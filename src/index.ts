import express from "express";
import routes from "./routes/index";
import resize from "./routes/api/resize";
import logger from "./utilities/logger";
import path from "path";

const app = express();
const port = 3000;

// Serve the images directory as a static directory
app.use("/images", express.static(path.resolve(__dirname, "../images")));

//routes
// testing route
app.get("/ping", logger, (req, res) => {
  res.send("pong");
});

app.use("/api", routes); //this makes server use the routes we use globally
app.use("/api/resize", resize); //this makes server use the resize route

//Start the express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
