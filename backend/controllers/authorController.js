const Author = require("../models").authors;





module.exports ={

  authorList (req,res){
    
    return Author
    .findAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => { res.status(400).send(error); });
  },
  postAuthor (req, res) {
    const newAuthor = req.body
    return Author
    .create({
      author: newAuthor
    })
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(400).send(error));

  }

}