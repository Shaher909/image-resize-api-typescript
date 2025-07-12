import * as fs from "fs";
import * as path from "path";

describe("TypeScript Build Process", () => {
  it("should generate the compiled JavaScript file in the build directory.", () => {
    const buildPath = path.resolve(__dirname, "../../build/index.js");
    const fileExists = fs.existsSync(buildPath);
    expect(fileExists).toBeTrue();
  });
});
