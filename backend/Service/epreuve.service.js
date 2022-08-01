const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");



// const filePath = path.join(__dirname, "icon.png");
const filePath = "icon.png" 

class EpreuveService {
  constructor(googleDriveService) {
    this.auth = googleDriveService
  }

  createAndUploadFile = async () => {
    const auth = this.auth; 
    const driveService = google.drive({ version: "v3", auth });

    let fileMetaData = {
      name: "in.png",
      mimeType: "image/png",
      parents: ["12dnBdJfSCilCqLGUFlWh7v1gQ_jEzmIn"],
    };

    let media = {
      mimeType: "image/png",
      body: fs.createReadStream(filePath),
    };
    try {
      let response = await driveService.files.create({
        resource: fileMetaData,
        media: media,
      });

      console.log(response.data);
      return response;
    } catch (error) {
      console.log("error: " + error);
    }
  };

  getFile = async()=>{}

  deleteFile = async()=>{}
}

module.exports = EpreuveService;
