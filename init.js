import app from "./app";
import "./db";

const PORT = 3000;

const handleListening = (req, res) => {
  console.log(`✅ listen on : https://${PORT}`);
};

app.listen(PORT, handleListening);
