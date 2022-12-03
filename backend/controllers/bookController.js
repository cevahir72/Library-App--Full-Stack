const Book = require("../models").books;
const Author = require("../models").authors;
const Category = require("../models").categories;
const Publisher = require("../models").publishers;
const { Op } = require("sequelize");

//GET - BOOK LIST  --SEARCH


module.exports ={

      bookList (req,res){
        const {page , size } = req.query
        const ORD = req.params.order
        return Book
        .findAndCountAll({
          attributes:['id',"book"],
          include: [{
            model: Author,
            as: 'author',
            attributes:['author']
          },{
            model: Category,
            as: 'category',
            attributes:['category']
          },{
            model: Publisher,
            as: 'publisher',
            attributes:['publisher']
          }],
           order: [ ['book', `${ORD}` ]],
           limit: size,
           offset: size * page
        })

        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(400).send(error));
      },

      bookSearch (req,res){
        const WORD = req.params.search
        const ORD = req.params.order
        const {page , size } = req.query
        return Book
        .findAndCountAll({
          include: [{
            model: Author,
            as: 'author',
            attributes:['author']
          },{
            model: Category,
            as: 'category',
            attributes:['category']
          },{
            model: Publisher,
            as: 'publisher',
            attributes:['publisher']
          }],
          where: {
            book: {
              [Op.substring] : `${WORD}`  // DYNAMIC LIKE %WORD%
            }
          },
          order: [ ['book', `${ORD}` ]  // DYNAMIC ASC/DESC
    
          ],
          limit: size,
          offset: size * page
        })
        .then((result) => res.status(200).send(result))
        .catch((error) => res.status(400).send(error));
      },



      } 
     

  // try {
  //   const bookList = await Book.findAll({
  //     include: [
  //       { model: Author, attibutes: ["author"] },
  //       { model: Publisher, attibutes: ["publisher"] },
  //       { model: Category, attibutes: ["category"] }
  //     ],
  //     limit:5
  //   });

  //   res.status(200).json(bookList);
  // } catch (error) {
  //   console.log(error);
  // }