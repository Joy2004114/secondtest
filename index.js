const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "emmu",
      age: 23,
    },
    {
      id: 3,
      name: "emmu",
      age: 23,
    },
    {
      id: 4,
      name: "emmu",
      age: 26,
    },
    {
      id: 2,
      name: "emmu",
      age: 240,
    },
  ]);
});
app.listen(5000, () => {
  console.log("the port is running at sal's ");
});
