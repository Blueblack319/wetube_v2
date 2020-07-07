import express from "express"
const app = express()

const handleHome = (req, res) => {
    res.send("Home")
}

app.get("/", handleHome)

export default app