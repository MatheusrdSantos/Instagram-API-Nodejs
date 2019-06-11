const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb+srv://root:0A072mNLwZMoqNlj@cluster0-pmatr.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.listen(3333);

