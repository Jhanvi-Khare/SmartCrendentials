const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    name : String,
    subject : String,
    image: String,
    description: String,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('badge', mySchema);