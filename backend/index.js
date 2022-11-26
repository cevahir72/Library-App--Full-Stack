const Sequelize = require("sequelize"); //Büyük S ile yazılmasının sebebei Constructor function olmasıdır.


//------------SEQUELIZE - CONNECTING WITH DATABASE -------------- 
//ORDER--> database name / username /password / {options}
const sequelize = new Sequelize("Library_App","postgres","kirikkale71",{
    host:"localhost",
    port: 5432,
    dialect: "postgres"
});

sequelize.authenticate().then(()=>{
    console.log("Database Connection succesful")
}).catch((err)=>{
    console.log("Error connecting to database!")
})
// then yerine async de kullanabilirdik. O zaman =>

// async function auth() {
//     await sequelize.authenticate();
//     console.log("Database Connection succesful");
// }
// auth();

// -----------------------------END---------------------------------

//------AUTHOR TABLOSU OLUŞTURMA -----
const Author = sequelize.define('author',{
    authorName:{
        type: Sequelize.DataTypes.STRING
    }
});