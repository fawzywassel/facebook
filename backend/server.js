const express = require("express");
const cors = require('cors');
const {readdirSync} = require('fs')
const dotenv = require('dotenv');
dotenv.config()


const app = express();

// __________ MIDDLEWARES __________ //
app.use(cors())



// ___________ ROUTES ______________//
readdirSync("./routes").map(r=>app.use("/",require('./routes/'+r)))


// __________ DATABASE CONNECTION __________ //
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{},(error)=>{
  error ? console.log(error) :console.log("DB Connection Created Successful ....")
})


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT} ....`);
});
