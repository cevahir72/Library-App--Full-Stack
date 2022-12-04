const Publisher = require("../models").publishers;



module.exports ={

  publisherList (req,res){
    return Publisher
    .findAll()
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(400).send(error));
  },
  postPublisher (req, res) {
    return Publisher
    .create({
      publisher: req.body.publisher
    })
    .then((result) => res.status(200).send(result))
    .catch((error) =>  res.status(400).send(error) );

  }

}