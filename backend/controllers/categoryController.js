const Category = require("../models").categories;



module.exports ={

  categoryList (req,res){
    return Category
    .findAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => { res.status(400).send(error); });
  },
  postCategory (req, res) {
    const newCategory = req.params.name
    return Category
    .create({
      category:`${newCategory}`
    })
    .then((result) => res.status(200).send(result))
    .catch((error) =>  res.status(400).send(error) );

  }

}