import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

export const getPosts = async(req, res) => {
    try {
        const postMessages = await postMessage.find();
        console.log('Trying to find...')
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {

        res.status(404).json({ message: error.message });

    }
}

export const createPost = async(req, res) => {

    const { title, message, selectedFile, creator, tags } = req.body;

    const new_post = new postMessage({ title, message, selectedFile, creator, tags })

    // const post_body = req.body();

    // const new_post = new postMessage(post_body);
    try {
        await new_post.save();
        res.status(201).json(new_post);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async(req,res) => {

    const { id :_id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID');
    
    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new : true});
    res.json(updatedPost);
}