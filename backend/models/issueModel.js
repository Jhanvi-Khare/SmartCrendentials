const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    student : {type : Types.ObjectId, ref : 'student'},
    badge : {type : Types.ObjectId, ref : 'badge'},
    createdAt: {type : Date, default: Date.now}
});

module.exports = model('issue', mySchema);