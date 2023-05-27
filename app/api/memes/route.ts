import Post from '@/models/post.model'
import { connectToDB } from '@/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

export const POST = async(req:NextApiRequest, res:NextApiResponse) =>{
    const {creator, photo, tags} = req.body
    try {
        await connectToDB()
        const newPost = new Post(req.body)
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}