//import express
const express = require('express');
const userRouter = require('./routers/userRouter');
const badgeRouter = require('./routers/badgeRouter');
const studentRouter = require('./routers/studentRouter');
const issueRouter = require('./routers/issueRouter');
const utilRouter = require('./routers/utilRouter');

const cors = require('cors');

//initialize express
const app = express();
const port = 5000;

app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use(express.json());

//middleware
app.use('/user', userRouter);
app.use('/badge', badgeRouter);
app.use('/student', studentRouter);
app.use('/issue', issueRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

// endpoint
app.get('/', (req, res) => {
    res.send('Response from express');
});

// start server
app.listen(port, () => { console.log('server started'); });