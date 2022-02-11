import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleProtected = (req, res) => {
  return res.send("Welcome Login!!!");
}

app.get("/", () => console.log(11));
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening);