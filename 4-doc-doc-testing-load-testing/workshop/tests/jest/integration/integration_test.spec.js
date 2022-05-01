const request = require("supertest"); // supertest is a framework that allows to easily test web apis

const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/toDoApp";

const app = require("../../../router.js");

const mockingoose = require("mockingoose");

const ToDo = require("../../../toDoModel.js").ToDo;

beforeAll(async () => {
  await mongoose.connect(DB_URI);
  mockingoose.resetAll();
});

describe("Testing endpoint with good parmeters", () => {
  it("GET /todo", async () => {
    const _doc = new ToDo({
      _id: "626b9f56e54ad72dea6b1f5e",
      text: "Todo1",
      done: false,
    });

    mockingoose(ToDo).toReturn(_doc, "find");

    const response = await request(app).get("/todo");
    expect(response.statusCode).toBe(200);

    expect(response.text).toBe(JSON.stringify(_doc));
  });

  it("POST /todo", async () => {
    const toDo = {
      _id: "626b9f56e54ad72dea6b1f5e",
      text: "Todo2",
      done: true,
    };
    const _doc = new ToDo(toDo);

    mockingoose(ToDo).toReturn(_doc, "save");

    const response = await request(app).post("/todo").send(toDo);

    expect(response.statusCode).toBe(201);

    expect(response.text).toBe(JSON.stringify(_doc));
  });
});
