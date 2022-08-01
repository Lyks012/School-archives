const Controller = require("./controller");
const UserService = require("../Service/user.service");

const userService = new UserService();

class UserController extends Controller {
  constructor() {
    super(userService);
  }

  login(req, res, next) {
    try {
      
    } catch (error) {}
  }
}

module.exports = UserController;
