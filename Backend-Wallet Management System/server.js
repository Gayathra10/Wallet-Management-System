const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router/users.router');

const usersRoutes = require('./router/users.router');
const recordRoutes = require('./router/record.router');
const paymentRoutes = require('./router/payment.router');


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://admin:1234@cluster0.r6ddbte.mongodb.net/employee_db?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to mongoDB');
    }catch(error){
        console.log('MongoDB Error:',error);
    }
};

connect();

app.use('/api', usersRoutes);
app.use('/api', recordRoutes);
app.use('/api', paymentRoutes);


const server = app.listen(port, host , () => {
    console.log(`Node server is listening to ${server.address().port}`)
} );

app.use('/api', router);