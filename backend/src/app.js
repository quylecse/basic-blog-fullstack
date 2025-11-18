import express from 'express'
import { postsRoutes } from './routes/posts.js'
import cors from 'cors'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:3000', // React app
    credentials: true,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
postsRoutes(app)

export { app }
