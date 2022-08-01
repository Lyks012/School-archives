const EpreuveService = require("../Service/epreuve.service");
const Controller = require("./controller");

const SCOPE = ["https://www.googleapis.com/auth/drive"];
const keyFile =
  "C:\\Users\\kaali\\OneDrive\\Documents\\Projet developpement web avance\\backend\\school-archive-354323-19bb21db225a.json";

const driveService =  new google.auth.GoogleAuth({
      keyFile: keyFile,
      scopes: SCOPE,
    });
const epreuveService = new EpreuveService(driveService);

class EpreuveController extends Controller {
  constructor() {
    super(epreuveService);
    
  }

  createDrive = async(req, res) => {
    try {
      const response = await this.service.createAndUploadFile();
      res.send(response)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = EpreuveController;
