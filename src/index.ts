import express from "express";
import logger from "./utilities/logger";

const app = express();
const port = 3000;

//routes
app.get("/ping", logger, (req, res) => {
  res.send("pong!");
});

//Start the express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
