const CorrectionService = require("../Service/correction.service");
const Controller = require("./controller");

const correctionService = new CorrectionService();

class CorrectionController extends Controller {
  constructor() {
    super(correctionService);
  }
}

module.exports = CorrectionController;
