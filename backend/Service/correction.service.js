const db = require("../models");
const Service = require("./service");

class CorrectionService extends Service {
  constructor() {
    super(db.correction);
  }

  create = async(newCorrection) => {
    super.create(newCorrection, "name")
  }
}

module.exports = CorrectionService;
