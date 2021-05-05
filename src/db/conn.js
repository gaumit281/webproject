const mongoose = require("mongoose");

//creating a database

mongoose.connect("mongodb://localhost:27017/kothiyatechnical",{

    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(() => {

    console.log("connection sussess");
}).catch((error) => {

    console.log(error);
}) 