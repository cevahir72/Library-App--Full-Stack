'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint("books",{
      fields:['authorId'],
      type:"foreign key",
      name:"author_book_association",
      references:{
        table:"authors",
        field:'id'
      }
    }),
    queryInterface.addConstraint("books",{
      fields:['publisherId'],
      type:"foreign key",
      name:"publisher_book_association",
      references:{
        table:"publishers",
        field:'id'
      }
    }),
    queryInterface.addConstraint("books",{
      fields:['categoryId'],
      type:"foreign key",
      name:"category_book_association",
      references:{
        table:"categories",
        field:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint("books",{
      fields:['authorId'],
      type:"foreign key",
      name:"author_book_association",
      references:{
        table:"authors",
        field:'id'
      }
    }),
    queryInterface.removeConstraint("books",{
      fields:['publisherId'],
      type:"foreign key",
      name:"publisher_book_association",
      references:{
        table:"publishers",
        field:'id'
      }
    }),
    queryInterface.removeConstraint("books",{
      fields:['categoryId'],
      type:"foreign key",
      name:"category_book_association",
      references:{
        table:"categories",
        field:'id'
      }
    })
  }
  
};
