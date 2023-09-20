const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date
    },
    status: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
