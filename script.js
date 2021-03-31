//Select all elements via documentQueries or getElement
var start = document.getElementById('start');
var questionArea = document.querySelector('.wrapper');
var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
//still need vars for timer  
//var timeLeftEl= document.querySelector(".timeLeft") 

//Begin function for taking quiz
//insert intervalTimer (check wordguess game)
//if time ends, display game over
//timeLeftEl.textContent = "Time left " + secondsLeft
//else {

//Build the question, answer choice, and correct answer array all as one, could fill out with more later
var questionAnswer = [
	{
		question: "What is the capitol of Texas?",
		choice1: 'Boston',
		choice2: 'Austin',
		choice3: 'Denver',
		choice4: 'Dallas',
		correctAnswer: '2'
	},{
		question: "What is the best Texas BBQ?",
		choice1: 'Snows',
		choice2: 'Mammas',
		choice3: 'Franklins',
		choice4: 'Terry Blacks',
		correctAnswer: '2'
	}
];
//Set up Variables
//index will track where in the quiz out of number of questions the user is currently.
var index = 0;
var lastQuestion = questionAnswer.length-1;
//score will start at zero and add 1 as each answer is selected correctly. This will be diplayed and logged to local storage when the quiz has ended
var score = 0;
//Timer variables need to include
//var timeLimit = 10 // 10 seconds

//function to display question 1
function showQuestion(){
	question.textContent=questionAnswer[index].question;
	choice1.textContent=questionAnswer[index].choice1;
	choice2.textContent=questionAnswer[index].choice2;
	choice3.textContent=questionAnswer[index].choice3;
	choice4.textContent=questionAnswer[index].choice4;
}

//function to start quiz with a click of a button
start.addEventListener("click",startQuiz);

function startQuiz(){
	start.style.display="none";
	showQuestion();
	questionArea.style.display="block"; // could change later
	indexQuestion();
}

//After logging which selection was made (next if statements to end game if index=number of questions)
//function to index to next question (position in array)

function indexQuestion(){
if (index <= (questionAnswer.length-1)) 
	index++;
}

//After a function 

//showScore in id=update - question.textContent('You scored ' + score +points!')

//don't forget:
//high score


///////STRETCH GOALS
//correct answer is +2, incorrect is -1
//correct answer is +time