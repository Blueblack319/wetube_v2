import express from "express"
import helmet from "helmet"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

const app = express()

app.use(helmet())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const handleHome = (req, res) => {
    res.send("Home")
}

app.get("/", handleHome)

export default app