const express = require("express");
const router = express.Router();

let items = [];

router.get("/", (req, res) => {
  res.json(items);
});

router.post("/", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description
  };

  items.push(newItem);
  res.json(newItem);
});

module.exports = router;
