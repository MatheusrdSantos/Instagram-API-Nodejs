const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload'); 
const routes = express.Router();
const PostController = require('./controllers/PostController');

const upload = multer(uploadConfig);


routes.post('/posts', upload.single('image'),PostController.store);



module.exports = routes;