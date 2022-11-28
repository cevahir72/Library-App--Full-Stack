const express = require("express");
const app = express()
const models = require("./models");
const {sequelize}= require("./models");

const port = 3000;  // process.env.PORT || 3000 ;

//DARABASE İLE BAĞLANMA
const connectDB = async ()=>{
        console.log("Checking database connection...");
        try {
            await sequelize.authenticate();
            console.log("Database connection established.");
        } catch (error) {
            console.log("Database connection failed",error)
            process.exit(1);
        }
}

//SELF EXECUTING ASYNC FUNCTION -PARANTEZ İÇİ 
(async ()=>{
        await connectDB();
        console.log(`Attempting to run server on port ${port} `);

        app.listen(port, ()=>{
            console.log(`Listening on port ${port}`);
        })
})();





// const bookList = require("../controllers").bookController

// models.authors.bulkCreate([
//     {
//         authorName:"Yaşar Kemal"
//     },
//     {
//         authorName:"Ahmet Hamdi Tanpınar"
//     },
//     {
//         authorName:"Sabahattin Ali"
//     },
//     {
//         authorName:"Oğuz Atay"
//     },
//     {
//         authorName:"Sait Faik Abasıyanık"
//     },
//     {
//         authorName:"Halit Ziya Uşaklıgil"
//     },

// ]).then(function(){
//     return models.authors.findAll()
// }).then(function(authors){
//     console.log(authors);
// })

