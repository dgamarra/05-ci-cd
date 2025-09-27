const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Crear usuario
router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

// Listar usuarios
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
