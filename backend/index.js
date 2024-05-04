//import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const badgeRouter = require('./routers/badgeRouter');

//initialize express
const app = express();
const port = 5000;

//middleware
app.use('/user', userRouter);
app.use('/badge', badgeRouter);


// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

// start server
app.listen(port, () => { console.log('server started'); });