import sharp from "sharp";
import fs from "fs";
import path from "path";

const resizeImage = async (
  originalImageName: string,
  width: number,
  height: number,
  originalImageDirectory: string = path.resolve(__dirname, "../../images/"),
  resizedImageDirectory: string = path.resolve(
    __dirname,
    "../../images/resized/"
  )
): Promise<string> => {
  try {
    // Construct the full paths
    const originalImagePath = path.join(
      originalImageDirectory,
      originalImageName
    );
    const resizedImagePath = path.join(
      resizedImageDirectory,
      `${width}x${height}-${originalImageName}`
    );

    // Check if the original image exists
    if (!fs.existsSync(originalImagePath)) {
      throw new Error("Image file not found at the specified path.");
    }

    // Ensure the resized image directory exists
    if (!fs.existsSync(resizedImageDirectory)) {
      fs.mkdirSync(resizedImageDirectory, { recursive: true });
    }

    // Resize the image and save it to the resized directory
    await sharp(originalImagePath)
      .resize(width, height)
      .toFile(resizedImagePath);

    return resizedImagePath; // Return the path of the resized image
  } catch (error) {
    console.error("Error resizing image:");
    throw error; // Re-throw the error for further handling
  }
};

export default resizeImage;
