import express from "express";
import logger from "./utilities/logger";
import resizeImage from "./utilities/resize";

const app = express();
const port = 3000;

//routes
app.get("/ping", logger, (req, res) => {
  res.send("pong!");
});

app.get("/resize", logger, async (req, res) => {
  try {
    // Extract query parameters
    const { imageName, width, height } = req.query;

    // Validate the parameters
    if (!imageName || !width || !height) {
      return res
        .status(400)
        .send(
          "Missing required query parameters: imageName, width, or height."
        );
    }

    // Call the resizeImage function
    const resizedImagePath = await resizeImage(
      imageName as string,
      parseInt(width as string, 10),
      parseInt(height as string, 10)
    );

    // Send the resized image path as a response
    res.send(`Resized image saved at: ${resizedImagePath}`);
  } catch (error) {
    console.error("Error resizing image:", error);
    res.status(500).send("An error occurred while resizing the image.");
  }
});

//Start the express server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
