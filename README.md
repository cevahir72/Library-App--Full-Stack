# Library-App--Full-Stack

## Sequelize Vital Notes:

Sequelize lets you write SQL queries in Javascript!
Some Examples!

| SQL | SEQUELIZE |
| ------ | ------ |
| SELECT * FROM users; | Users.findAll(); |
| INSERT INTO users(username,password,age) VALUES("MK-SOFTWARE",'wordpass',25); | Users.create({username:"MK-SOFTWARE",password:"wordpass",age:25}); |
| SELECT password FROM users WHERE username="MK-SOFTWARE" LIMIT 1 | Users.findOne({where:{username:"MK-SOFTWARE"}}) |
| SELECT * FROM users WHERE age=25 OR age=37 | Users.findAll({where:{[Op.or]:[{age:25},{age:37}]}}) |


## Data Types in Sequelize

| DataType | What it Means in PostgreSQL |
| ------ | ------ |
| STRING | VARCHAR |
| TEXT | TEXT |
| BOOLEAN | BOOLEAN |
| INTEGER | INTEGER |
| FLOAT | FLOAT |
| STRING(1234) | VARCHAR(1234) |
| DATE | TIMESTAMP WITH TIME ZONE |



