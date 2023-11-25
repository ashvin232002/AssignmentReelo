const  express =  require("express");
const Question = require('../model/QuestionModel');


exports.generateQuestionPaper = async(req,res)=>{
    try{
        //console.log("Hello");
        const {totalMarks,EasyPer,MediumPer,HardPer} =  req.body;

        // console.log("Hello");
        // console.log(totalMarks)
        if(!totalMarks || !EasyPer || !MediumPer || !HardPer){
            return res.status(400).json({
                success:false,
                message:"Please Enter The al Information ",
            })
        }

        /*Considering Easy - 1 Marks
                      Medium - 3 Marks
                      Hard -  5 Marks
                      so devide accordingly
        */
        const  NumberOfEasyQue =  ((EasyPer/100) * totalMarks)/1;
        const  NumberOfMediumQue =  ((MediumPer/100)*totalMarks)/5;
        const  NumberOfHardQue  =   ((HardPer/100)*totalMarks)/10;


        // console.log(NumberOfEasyQue);
        // console.log(NumberOfMediumQue);
        // console.log(NumberOfHardQue);
        const questionPaper =  await generate(totalMarks,NumberOfEasyQue,NumberOfMediumQue,NumberOfHardQue);

        // console.log("printing");
        // console.log(questionPaper);
        return res.status(200).json({
            success:true,
            questionPaper
        })

    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error while generating Question paper",
        })
    }
}


const getUniqueRandomObject = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };


async function generate(totalMarks , NumberOfEasyQue,NumberOfMediumQue,NumberOfHardQue){
    try{
        //taking the ans array of objects which we have to return
       const questionPaper = [];  
       const difficultyArray = ["Easy","Medium","Hard"];
       const arraySizes = [NumberOfEasyQue,NumberOfMediumQue,NumberOfHardQue];
       const marks =[1,3,5];
       for(let i =0;i<3;i++){
           const  difficulty =  difficultyArray[i];

           //fetching the question as per The difficulty
           const  allQue =  await Question.find({difficulty:difficulty});
           
           //suffling the array of object
           getUniqueRandomObject(allQue);
           console.log(allQue);
           //after suffling we want to take some sized object
           const selectQue =  allQue.slice(0,arraySizes[i]);
        
        
           //adding que to paper
            selectQue.forEach(item =>{
                if(totalMarks-marks[i]>=0 && arraySizes[i]>0 ){
                    questionPaper.push(item);
                    totalMarks-=item.marks;
                    arraySizes[i]--;
                }
            });
       }
       return questionPaper;
    }
    catch(error){
        return res.status(400).json({
            success:false,
            message:"Error While Generating Question Paper"
        })
    }
}
/*note

considering Easy = 1 marks
            Medium =  5 Marks
            Hard =  10 marks */