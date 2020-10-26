const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        trim: true
    },
    mobile: {
        type: Number,
        match: /^[1-9]{1}[0-9]{9}$/,
        maxLength: 13,
        minLength: 10,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    emailVerified: {
        type: Boolean,
        default: true // true for testing
    },
    contactVerified: {
        type: Boolean,
        default: true // true for testing
    },
    active: {
        type: Boolean,
        default: true// need to false, i haven written mail sending code do made true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', userModel);
