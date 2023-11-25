# Question Paper Generator

The Question Paper Generator is an application designed to streamline the creation of question papers for various subjects. By leveraging a Question Store that houses questions with specific attributes, educators can automatically generate question papers based on desired criteria such as total marks and the distribution of marks based on question difficulty.

## Question Attributes

Each question in the Question Store has the following attributes:

- Question: The text of the question itself.
- Subject: The subject to which the question pertains, e.g., Physics, Math, etc.
- Topic: The topic within the subject, e.g., Waves, Algebra, etc.
- Difficulty: The difficulty level of the question, e.g., Easy, Medium, Hard.
- Marks: The marks allocated for the question.

Example of a question entry:

{"What is the speed of light", "Physics", "Waves", "Easy", 5}


## Question Paper Requirements Example

Total Marks: 100
Difficulty Distribution:
- Easy: 20%
- Medium: 50%
- Hard: 30%


## Installation

To get started with the Question Paper Generator, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ashvin232002/AssignmentReelo
   
2. Navigate to the project directory:
   ```bash 
   cd AssignmentReelo
   
3. Install the dependencies:
   ```bash
   npm install mongoose express body-parser nodemon dotenv
   
4. Start the server (using nodemon):
   ```bash
   nodemon index.js
   
5. If you don't have nodemon, start the server with:
   ```bash
   node index.js
   

## API Routes

### Add Question

- *POST* `/api/v1/QuestionRoutes/addque` 

  Use this route to add a new question to the Question Store.

### Generate Question Paper

- *POST* `/api/v1/QuestionRoutes/generateQuestionPaper`

  This route is used to generate a question paper. The generated paper will follow the specified mark distribution based on difficulty levels.



### demos
![image2](https://github.com/ashvin232002/AssignmentReelo/assets/120255875/ea56c088-c254-41b3-a28b-ef74d71ad918)
![reelotask1](https://github.com/ashvin232002/AssignmentReelo/assets/120255875/4e1e1ab4-22d4-45e8-a656-b5915aff8ff9)
