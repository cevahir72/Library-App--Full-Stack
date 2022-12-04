const Category = require("../models").categories;



module.exports ={

  categoryList (req,res){
    return Category
    .findAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => { res.status(400).send(error); });
  },
  postCategory (req, res) {
    return Category
    .create({
      category: req.body.category
    })
    .then((result) => res.status(200).send(result))
    .catch((error) =>  res.status(400).send(error) );

  }

}