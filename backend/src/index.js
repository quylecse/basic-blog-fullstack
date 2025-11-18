import { app } from './app.js'
import dotenv from 'dotenv'
import initDatabase from './db/init.js'

dotenv.config()

try {
  await initDatabase()
  // Use the PORT from the environment, or default to 3001 for local development
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })
} catch (error) {
  console.error('error connecting to database: ', error)
}
