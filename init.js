import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListening = (req, res) => {
  console.log(`✅ listen on : https://${PORT}`);
};

app.listen(PORT, handleListening);
