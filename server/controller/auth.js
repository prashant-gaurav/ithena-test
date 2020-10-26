const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../model/auth');
const Token = require('../model/token');
const config = require('../config');
const privateKey = fs.readFileSync(path.join(__dirname, '../config/') + 'private.key', 'utf8');
/* ----------------------------------------------- *
 *                   User SignUp                   *
 * ----------------------------------------------- */
router.post('/register', async (req, res, next) => {
    const {name, email, mobile, password} = req.body;
    // console.log(req.body)
    try {
        await Users.find({email: email}).exec().then(async user => {
            if (user.length >= 1) {
                return res.status(409).json({success: false, message: 'Email is associated with other account.'})
            } else {
                const hashPassword = await bcrypt.hashSync(password, 10);
                const user = new Users({name: name, email: email, mobile: mobile, password: hashPassword})
                const resp = await user.save();
                const token = uuidv4()
                const mailToken = new Token({userId: resp._id, email: resp.email, token: token})
                await mailToken.save();
                await res.status(200)
                // email sending code

                //
                await res.send({
                    success: true,
                    message: 'The mail have been sent to your email id please verify to continue using',
                })
            }
        })
    } catch (e) {
        console.log(e)
        res.status(404)
        res.send({success: false, message: 'Something went wrong'})
    }
});


/* ----------------------------------------------- *
 *                   Login                         *
 * ----------------------------------------------- */
router.post('/login', async (req, res, next) => {

    const {email, password} = req.body;
    console.log(email, password)
    try {
        await Users.find({email: email}).exec().then(async user => {
            if (user.length < 1) {
                return res.status(401).json({
                    success: false,
                    message: 'There is no account with this id'
                });
            } else if (!user[0].active) {
                return res.status(401).json({
                    success: false,
                    message: 'Account is not verified | active, please verify and login.'
                });
            }
            await bcrypt.compare(password, user[0].password, async (err, result) => {
                if (result) {
                    const {_id, name, email, mobile, isBrand} = user[0];
                    const signInOptions = {
                        issuer: config.JWT_ISS,
                        subject: config.JWT_SUB,
                        audience: config.JWT_AUD,
                        expiresIn: config.JWT_EXPIRE_IN,
                        algorithm: config.JWT_ALGO
                    }
                    const payload = {userId: _id, isBrand: isBrand}
                    const jwtToken = await jwt.sign(payload, privateKey, signInOptions);
                    return res.status(200).json({
                        success: true,
                        userData: {userName: name, userEmail: email, userContact: mobile, token: jwtToken}
                    });
                } else {
                    return res.status(401).json({
                        success: false,
                        message: 'Invalid credentials'
                    });
                }
            });
        })
    } catch (e) {
        console.log(e)
        res.status(404)
        res.send({success: false, message: 'Something went wrong'})
    }

});
module.exports = router;
