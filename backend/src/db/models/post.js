import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    contents: String,
    tags: [String],
  },
  { timestamps: true },
)
const Post = mongoose.model('post', postSchema)

export default Post
