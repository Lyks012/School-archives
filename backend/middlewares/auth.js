require("dotenv").config();

const jwt = require("jsonwebtoken");
const db = require("../models");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
  try {
    const user = await db.user.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(400).send("No user with found.");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return res.status(400).send("Incorrect password.");

    const payload = { id: user.id, role: user.role };
    const accessToken = generateAccessToken(payload);

    res.send(accessToken);
  } catch (error) {
    console.log(error);
  }
};

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
}

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403).send(err);
    req.user = user;
    next();
  });
};

const checkAdmin = async (req, res, next) => {
  if (req.user.role == "admin") return res.status(403).send();

  next();
};

const checkStudent = async (req, res, next) => {
  if (req.user.role == "student") return res.status(403).send();

  next();
};

module.exports = {
  authenticateToken,
  login,
  checkAdmin,
  checkStudent
};
