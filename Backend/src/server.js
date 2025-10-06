import express from "express"
import notesRoutes from './routes/notesRountes.js'
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middlewares/rateLimiter.js"
import cors from 'cors'
import path from "path"


//access enviromnt variables
dotenv.config()

const app = express()
const port = 3000 
//const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();


//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Middleware xử lý dữ liệu từ form (x-www-form-urlencoded)
app.use(rateLimiter)




//ROUTES
app.use("/api/notes", notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

//connect to mongoDBs
connectDB().then(() => {
  //connect to db first and then listening on port
  app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
  })
})

