const express = require("express");

const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./Routes/user");
const goalRouter = require("./Routes/goal");


app.use(cors());

mongoose
  .connect("mongodb+srv://abbas:khan123@cluster0.okqoqs7.mongodb.net/", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to mongodb"));

app.use(express.json());

app.get("/api", (req, res) => {
  console.log("yes reciev");
  res.status(200).json({ suucess: true });
});
app.use("/api/user", userRouter);
app.use("/api/goals", goalRouter);
app.listen(5000, () => console.log("Server running at port 5000"));
