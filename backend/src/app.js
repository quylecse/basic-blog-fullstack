import express from 'express'
import { postsRoutes } from './routes/posts.js'
import cors from 'cors'

const app = express()
app.use(
  // In production, the FE_URL environment variable should be set to the frontend's
  // deployed URL. For local development, it can be undefined and will default
  // to localhost.
  cors({
    origin: [process.env.FE_URL, 'http://localhost:3000'],
    credentials: true,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
postsRoutes(app)

export { app }
