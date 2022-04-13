const express = require("express");
const cors = require('cors');




const app = express();

// __________ MIDDLEWARES __________ //
const corsOptions = {
  origin:'http://localhost:3000',
  useSuccessStatus:200
}
app.use(cors(corsOptions))




app.get("/", (req, res) => {
  res.send("welcome from home");
});
app.get("/books", (req, res) => {
  res.send("hahahahahahahhahahaaiidhiagduogauodhguagdigaiduygiuagduagdiu");
});
app.listen(8000, () => {
  console.log("server is lestining...");
});
