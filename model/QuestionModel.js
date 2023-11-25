const mongoose =  require("mongoose");

const QuestionSchema =  new mongoose.Schema({
    questionText:{
        type:String,
        required:true,
    },
    subjectName:{
        type:String,
        required:true,
    },
    topicName:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        enum:['Easy','Medium','Hard'],
        required:true,
    },
    marks:{
        type:Number,
        required:true
    }
})

module.exports =  mongoose.model("QuestionSchema",QuestionSchema);