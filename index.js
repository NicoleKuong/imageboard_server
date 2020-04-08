const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
const jsonParser = express.json();
app.use(jsonParser);

// Routers
app.use("/users", userRouter);
app.use("/images", imageRouter);

//test
app.get("/", (request, response, next) => {
  response.send("hello world");
});

// Start server
app.listen(PORT, () => console.log("App listening"));
