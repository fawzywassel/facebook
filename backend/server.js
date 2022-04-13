const express = require("express");
const cors = require('cors');
const {readdirSync} = require('fs')
const dotenv = require('dotenv')
dotenv.config()
const app = express();

// __________ MIDDLEWARES __________ //
app.use(cors())
readdirSync("./routes").map(r=>app.use("/",require('./routes/'+r)))

app.get("/", (req, res) => {
  res.send("welcome from home");
});
app.get("/books", (req, res) => {
  res.send("test");
});

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} ....`);
});
