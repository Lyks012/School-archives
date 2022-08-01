const EpreuveController = require("../controllers/epreuve.controller");
const auth = require("../middlewares/auth");

module.exports = (app) => {
  const controller = new EpreuveController();

  const router = require("express").Router();

  // router.get("/", auth.authenticateToken, controller.getAll);
  router.get("/", controller.createDrive);

  router.get("/:id", auth.authenticateToken, controller.getById);

  router.post("/", [auth.authenticateToken, auth.checkAdmin], controller.create);

  router.put("/:id", [auth.authenticateToken, auth.checkAdmin], controller.update);

  router.delete("/:id", [auth.authenticateToken, auth.checkAdmin], controller.delete);

  app.use("/api/epreuve", router);
};
