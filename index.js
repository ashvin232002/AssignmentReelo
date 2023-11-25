const express  =  require("express");
const app = express();


const QuestionRoutes =  require("./routes/questionPaper");

const database =  require("./config/Database");



const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
app.use(express.json());
app.use("/api/v1/QuestionRoutes",QuestionRoutes);




app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})