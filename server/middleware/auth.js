const jwt = require('jsonwebtoken');
const config = require('../config');
const path = require('path');
const fs = require('fs');
const publicKey = fs.readFileSync(path.join(__dirname, '../config/') + 'public.key', 'utf8');
module.exports = async (req, res, next) => {
    const token = await req.headers['token']
    if (token) {
        const verifyOptions = {
            issuer: config.JWT_ISS,
            subject: config.JWT_SUB,
            audience: config.JWT_AUD,
            maxAge: config.JWT_EXPIRE_IN,
            algorithm: config.JWT_ALGO
        }
        await jwt.verify(token, publicKey, verifyOptions, (err, decoded) => {
            if (err) {
                const response = {
                    success: false,
                    status: 'unauthorised',
                    message: 'Session expired,please re-login to access'
                }
                return res.status(403).json(response);
            } else {
                req.decoded = decoded;
                const {userId, isBrand} = decoded;
                if (isBrand) {
                    req.body.userId = userId;
                    next();
                } else {
                    const response = {
                        success: false,
                        message: 'you dont have accesses for this action'
                    }
                    return res.status(403).json(response);
                }
            }
        });
    } else {
        const response = {
            success: false,
            status: 'unauthorised',
            message: 'Session expired,please re-login to access'
        }
        return res.status(401).json(response);
    }
};
