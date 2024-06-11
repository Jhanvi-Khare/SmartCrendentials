const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    name : String,
    subject : String,
    image: {type : String, default: 'badge_placeholder.webp'},
    description: String,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('badge', mySchema);