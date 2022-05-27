// const mongoose=require('mongoose')

// mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.nv24w.mongodb.net/AlumniPortalSystem',
// {useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true })

//  module.exports = mongoose;

// 'mongodb+srv://kanhaiya:asqPXt5aaYPZO4Jx@cluster0.xzm7l.mongodb.net/alumini_tracking_system?retryWrites=true&w=majority'


const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.nv24w.mongodb.net/AlumniPortalSystem' , {useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true });
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }
}

module.exports = mongoose