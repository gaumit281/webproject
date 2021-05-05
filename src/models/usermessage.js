const mongoose=require("mongoose");
const validator=require("validator");


const userSchema = mongoose.Schema({
    

name:{
    type:String,
    required:true,
    minLength:3
},

email:{
    type:String,
    required:true,
    validate(value){
         if(!validator.isEmail(value)){
             throw new Eroor("invalid email")
         }
    }
},

message:{
    type:Number,
    required:true,
    minLength:3

},

phone:{
    type:Number,
    required:true,
    min:10


}


})
//create collection
const User = mongoose.model("Usermessage",userSchema);

module.exports = User;