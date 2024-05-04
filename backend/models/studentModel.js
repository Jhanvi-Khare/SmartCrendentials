const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : {type : String, require: true},
    email : { type : String, unique: true},
    enrollmentNumber : String,
    image: String,
    subject: String,
    admissionDate: String,
    completitionDate: String,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('student', mySchema);