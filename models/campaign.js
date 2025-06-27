const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
    scheduledTime: {
        type: Date,
        required: true
    },
    recipients: {
        type: [{
            email: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ['pending', 'sent', 'failed'],
                default: 'pending',
                required: true
            },
            _id: false
        }],
        required: true 
    }
});

module.exports = mongoose.model('campaign', campaignSchema);