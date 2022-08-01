require("dotenv").config();

const db = require("../models");
const Service = require("./service");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserService extends Service {
  constructor() {
    super(db.user);
  }

  create = async (newUser) => {
    const hashedPassword = await bcryptjs.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    try {
      const [user, didNotExist] = await this.DBModel.findOrCreate({
        where: { email: newUser.email },
        defaults: {
          name: newUser.name,
          password: newUser.password,
          role: newUser.role,
        },
      });

      const message = didNotExist
        ? { message: `User create successfully`, user }
        : `User with same name already exist.`;

      return message;
    } catch (error) {
      res.status(500).send("An error occured.");
    }
  };

  login = async (user) => {
    try {
      const userDB = await this.DBModel.findOne({
        where: { email: user.email },
      });
      if (!userDB) return "Incorrect credentials.";

      const isPasswordCorrect = await bcryptjs.compare(
        user.password,
        userDB.password
      );
      if (!isPasswordCorrect) return "Incorrect credentials.";

      const payload = {
        id: userDB.id,
        username: userDB.username,
        password: userDB.password,
      };
      jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {}
  };
}

module.exports = UserService;
