require("dotenv").config();

const express = require("express");
// const bodyParser = require("body-parser")

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser);

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Dropped and resync db.");
});

const PORT = 5000;

require("./routes/correction.routes")(app);
require("./routes/epreuve.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
