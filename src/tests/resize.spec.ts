import supertest from "supertest";
import app from "../index";

describe("Reszie an image", () => {
  it("should resize an image and return status 200", async () => {
    const response = await supertest(app).get(
      "/api/resize?imageName=wildefire.jpeg&width=125&height=450"
    );
    expect(response.status).toBe(200);
    expect(response.text).toContain("Resized image saved at:");
  });
});
