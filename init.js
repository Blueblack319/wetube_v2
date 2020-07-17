import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comments";
import "./models/User";

const PORT = process.env.PORT || 3000;

const handleListening = (req, res) => {
  console.log(`✅ listening Port : ${PORT}`);
};

app.listen(PORT, handleListening);
