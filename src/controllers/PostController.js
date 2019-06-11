const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('createdAt');
        res.json(posts);
    },
    async store(req, res){
        const {author, place, description, hashtags} = req.body;
        const { filename: image } = req.file;
        //console.log(req.file)
        await sharp(req.file.path).resize(500).jpeg({quality:70}).toFile(path.resolve(req.file.destination, 'resized', image));
        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        });
        fs.unlinkSync(req.file.path);
        return res.json(post);
    }
};