const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://root:0A072mNLwZMoqNlj@cluster0-pmatr.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(cors());
app.use((req, res, next)=>{
    req.io = io;
    
    next();
})
server.listen(3333);

