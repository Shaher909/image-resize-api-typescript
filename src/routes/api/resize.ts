import express from 'express';
import logger from '../../utilities/logger';
import resizeImage from '../../utilities/resize';

const resize = express.Router();

resize.get('/', logger, async (req, res) => {
  try {
    // Extract query parameters
    const { imageName, width, height } = req.query;

    // Validate the parameters
    if (!imageName || !width || !height) {
      return res
        .status(400)
        .send(
          'Missing required query parameters: imageName, width, or height. Please check the pattern of the URL request to match ?imageName=file.jpeg&width=number&height=number ',
        );
    }

    // Call the resizeImage function
    const resizedImagePath = await resizeImage(
      imageName as string,
      parseInt(width as string, 10),
      parseInt(height as string, 10),
    );

    const relativeImagePath = `/images/resized/${width}x${height}-${imageName}`;

    // Send the resized image path as a response
    //res.send(`Resized image saved at:${resizedImagePath}`);
    res.send(`
      <html>
        <body>
          <h1>Resized image saved at: ${resizedImagePath}</h1>
          <img src="${relativeImagePath}" />
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error resizing image:', error);
    //res.status(500).send("An error occurred while resizing the image.");

    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An error occurred while resizing the image';

    res.send(`
      <html>
        <body>
          <h1>Hmm.. there was an error</h1>
          <p>${errorMessage}</p>
        </body>
      </html>
    `);
  }
});

export default resize;
