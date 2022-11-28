const model= require("../models/index");
const controller = {};
const {Op}=require("sequelize");
const db = require("../models/index");


controller.getAll= async function(req, res){
    try{
        let author = await model.authors.findAll()
        if (author.lenght > 0){
            res.status(200).json({
                message: "Veri başarıyla geldi!",
                data: author
            })
        }else {
            res.status(200).json({
                message: "Henüz iletilecek veri yok!",
                data:[]
            })
        }
        }catch(error){
            res.status(404).json({
                message:error.message
            })
        }
    }

    controller.post = async function (req, res){
        try {
            let author = await model.authors.create({
                authorName : req.body.authorName
            })
            res.status(201).json({
                message: "Yazar ismi başarıyla yüklendi!",
                data: author
            })
        } catch (error) {
            res.status(404).json({
                message:error.message
            })
        }
    }

    module.exports = controller;
