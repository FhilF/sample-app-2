const express = require("express"),
  cors = require("cors");

const app = express(),
  PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Server works");
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
