import supertest from "supertest";
import app from "../index";

describe("GET /ping", () => {
  it("should return 'pong' with status 200", async () => {
    const response = await supertest(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.text).toBe("pong");
  });
});
