import fs from 'fs';
import path from 'path';
import resizeImage from '../utilities/resize';

describe('Image Processing - Resize Function', () => {
  const testImageName = 'test-image.jpeg';
  const testWidth = 200;
  const testHeight = 200;
  const testImageDir = path.resolve(__dirname, '../../images/');
  const resizedImageDir = path.resolve(__dirname, '../../images/resized/');

  beforeEach(() => {
    // Ensure test directories exist
    if (!fs.existsSync(testImageDir)) {
      fs.mkdirSync(testImageDir, { recursive: true });
    }
    if (!fs.existsSync(resizedImageDir)) {
      fs.mkdirSync(resizedImageDir, { recursive: true });
    }
  });

  it('should create a new resized image when it does not exist', async () => {
    const expectedResizedPath = path.join(
      resizedImageDir,
      `${testWidth}x${testHeight}-${testImageName}`,
    );

    // Ensure resized image doesn't exist before test
    if (fs.existsSync(expectedResizedPath)) {
      fs.unlinkSync(expectedResizedPath);
    }

    const result = await resizeImage(testImageName, testWidth, testHeight);

    expect(result).toBe(expectedResizedPath);
    expect(fs.existsSync(expectedResizedPath)).toBe(true);
  });

  it('should return existing resized image path when it already exists', async () => {
    const expectedResizedPath = path.join(
      resizedImageDir,
      `${testWidth}x${testHeight}-${testImageName}`,
    );

    // First call to create the resized image
    await resizeImage(testImageName, testWidth, testHeight);

    // Second call should return existing path without recreating
    const result = await resizeImage(testImageName, testWidth, testHeight);

    expect(result).toBe(expectedResizedPath);
    expect(fs.existsSync(expectedResizedPath)).toBe(true);
  });
});
