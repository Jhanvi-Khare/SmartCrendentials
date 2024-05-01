const mongoose = require( 'mongoose');
const url = "mongodb+srv://jhanvikhare26:water1@cluster0.jfuhq8r.mongodb.net/mydatabase1234?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function
mongoose.connect(url)
.then((result) => {
    console.log('connect to db');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;