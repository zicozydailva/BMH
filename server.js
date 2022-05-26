import express, { application } from "express"
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import connectDB from './utils/db.js'

dotenv.config()

import productsRoutes from "./routes/products.js"

const port = process.env.PORT

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))


// ROUTES
app.use("/api", productsRoutes)


// LISTENING PORT

app.listen(port, () => console.log(`Server is running on port: ${port}`))
await connectDB(process.env.MONGO_URI)
