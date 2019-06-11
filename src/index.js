const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:0A072mNLwZMoqNlj@cluster0-pmatr.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3333);

