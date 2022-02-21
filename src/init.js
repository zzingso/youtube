//require("dotenv").config();
import "dotenv/config";
import "./db.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);
