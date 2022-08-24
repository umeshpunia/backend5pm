// imports
const express = require("express");
require("dotenv").config()
const mongoose=require("mongoose")





// variables
const app = express();
const {PORT,DBPASS,DBUSER,DBNAME}=process.env;
const port = PORT || 8000;

// middlewares
app.use(express.json())


// connection
mongoose.connect(``,(err)=>{
    if(err) return console.log(err)
    console.log('connected with db')
})



// routes
app.get("/",(req,res)=>{
    res.send("Hello Backend")
})

app.use("/api/v1/user",require("./routes/user.routes"));




// server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
