// imports
const express = require("express");
require("dotenv").config()
const mongoose=require("mongoose")

// variables
const app = express();
const {PORT,DBPASS,DBUSER,DBNAME}=process.env;
const port = PORT || 8000;




// connection

mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}@umesh.hybg3.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,(err)=>{
    if(err) return console.log(err)
    console.log('connected with db')
})




// mongodb+srv://<username>:<password>@umesh.hybg3.mongodb.net/?retryWrites=true&w=majority



// server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
