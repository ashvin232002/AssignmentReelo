const express  =  require("express");
const router  =  express.Router();




const {
    generateQuestionPaper
} = require("../controllers/GenerateQuestionPaper");

const {
    createquestion
} =  require("../controllers/addQuestion");

/*********************Routes****************************** */

router.post("/addque",createquestion);

router.post("/generateQuestionPaper",generateQuestionPaper);


module.exports = router;


//Route1  :      http://localhost:4000/api/v1/QuestionRoutes/addque
//Route2   :     http://localhost:4000/api/v1/QuestionRoutes/generateQuestionPaper