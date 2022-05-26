import { readFile } from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './utils/db.js'
import Product from './models/Product.js'

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    const jsonProducts = JSON.parse(
      await readFile(new URL('./data.json', import.meta.url))
    )
    await Product.create(jsonProducts)
    console.log('Success!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
