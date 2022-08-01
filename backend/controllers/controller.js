class Controller {
  constructor(service) {
    this.service = service;
  }; 

  create = async (req, res) => {
    try {
      const message = await this.service.create(req.body);
      res.send(message);
    } catch (error) {
      res
        .status(500)
        .send(error.message || `An error occured while creating a user.`);
    }
  };

  getAll = async (req, res) => {
    try {
      const message = await this.service.getAll();
      res.send(message);
    } catch (error) {
      res
        .status(500)
        .send(error.message || `An error occured while creating a user.`);
    }
  };

  getById = async (req, res) => {
    try {
      const message = await this.service.getById(req.params.id);
      res.send(message);
    } catch (error) {
      res
        .status(500)
        .send(error.message || `An error occured while creating a user.`);
    }
  };

  update = async (req, res) => {
    try {
      const message = await this.service.update(req.body);
      res.send(message);
    } catch (error) {
      res
        .status(500)
        .send(error.message || `An error occured while creating a user.`);
    }
  };

  delete = async (req, res) => {
    try {
      const message = await this.service.delete(req.body.id);
      res.send(message);
    } catch (error) {
      res
        .status(500)
        .send(error.message || `An error occured while creating a user.`);
    }
  };
}

module.exports = Controller;
