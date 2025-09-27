const mongoose = require("mongoose");
const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../app");
const User = require("../models/User");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await User.deleteMany();
});

describe("Pruebas E2E de usuarios", () => {
  test("POST /api/users crea un usuario", async () => {
    const res = await request(app).post("/api/users").send({ name: "Daniel" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("Daniel");
  });

  test("GET /api/users devuelve usuarios", async () => {
    await User.create({ name: "María" });
    const res = await request(app).get("/api/users");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe("María");
  });
});
