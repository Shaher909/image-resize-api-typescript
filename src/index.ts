import express from "express";

const app = express();
const port = 3000;

//routes
app.get("/ping", (req, res) => {
  res.send("pong!");
});

//Start the express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
