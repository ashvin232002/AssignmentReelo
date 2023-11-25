const  express =  require("express");
const Question = require('../model/QuestionModel');

exports.createquestion =  async (req,res)=>{
    try{
       const {questionText,subjectName,topicName,difficulty,marks} = req.body;
        
       //check all data entered or not
       if(!questionText || !subjectName || !topicName || !difficulty || !marks){
          return res.status(400).json({
            success:false,
            message:"Please Enter All The details",
          })
       }

       //create que and save inside db
       const  savedquestion =  await Question.create({
        questionText,
        subjectName,
        topicName,
        difficulty,
        marks
       })

       return res.status(200).json({
        success:true,
        message:"Question Added SuccessFully",
        question:savedquestion
       })
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error While Creating Question"
        })
    }
}