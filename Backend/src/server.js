import express from "express"
import notesRoutes from './routes/notesRountes.js'
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middlewares/rateLimiter.js"
import cors from 'cors'

//access enviromnt variables
dotenv.config()

const app = express()
const port = 3000

//middleware
app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Middleware xử lý dữ liệu từ form (x-www-form-urlencoded)
app.use(rateLimiter)




//ROUTES
app.use("/api/notes", notesRoutes)

//connect to mongoDBs
connectDB().then(() => {
  //connect to db first and then listening on port
  app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/api/notes`)
  })
})

