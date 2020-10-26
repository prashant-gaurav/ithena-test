const mongoose = require('mongoose');

const moviesModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    details: {
        type: String,
        required: true,
        trim: true
    },
    wallImg: {
        type: String,
        required: true,
        trim: true
    },
    video: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: String,
        required: true,
        trim: true
    },
    active: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Movies', moviesModel);
