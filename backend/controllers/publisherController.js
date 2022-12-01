const Publisher = require("../models").publishers;



module.exports ={

  publisherList (req,res){
    return Publisher
    .findAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(400).send(error));
  },
  postPublisher (req, res) {
    const newPublisher = req.params.name
    return Publisher
    .create({
      publisher:`${newPublisher}`
    })
    .then((result) => res.status(200).send(result))
    .catch((error) =>  res.status(400).send(error) );

  }

}