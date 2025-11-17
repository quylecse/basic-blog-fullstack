import mongoose from 'mongoose'
const initDatabase = async () => {
  const DATABASE_URL = process.env.DATABASE_URL
  mongoose.connection.on('open', () => {
    console.log('successfully connected to database: ', DATABASE_URL)
  })
  const connection = mongoose.connect(DATABASE_URL)
  return connection
}

export default initDatabase
