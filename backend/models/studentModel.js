const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : {type : String, require: true},
    email : { type : String, unique: true},
    enrollmentNumber : {type: String, unique: true},
    image: {type : String, default: 'student_placeholder.png'},
    subject: String,
    admissionDate: String,
    completionDate: String,
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('student', mySchema);