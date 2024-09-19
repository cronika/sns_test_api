const express = require("express");
const app = express();
const authRoute = require("./routers/auth");
const postRoute = require("./routers/posts");
const userRoute = require("./routers/users");
const cors = require("cors");

require("dotenv").config;

const PORT = 5000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
