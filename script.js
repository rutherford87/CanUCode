//Select all elements via documentQueries or getElement
var start = document.getElementById('start');
var questionArea = document.querySelector('.wrapper');
var question = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var scoreArea = document.getElementById('update');
var timeEl = document.getElementById("timeCounter");

//still need vars for timer  
//var timeLeftEl= document.querySelector(".timeLeft") 
//var timeLimit = 10 // 10 seconds
//Build the question, answer choice, and correct answer array all as one, could fill out with more later
var questionAnswer = [
	{
		question: "What is the capitol of Texas?",
		choice1: 'Boston',
		choice2: 'Austin',
		choice3: 'Denver',
		choice4: 'Dallas',
		correctAnswer: 'choice2'
	},{
		question: "Who has the best BBQ?",
		choice1: 'Snows',
		choice2: 'Mamma',
		choice3: 'Franklins',
		choice4: 'Terry Blacks',
		correctAnswer: 'choice2'
	},{
		question: "Who has the best beer to go?",
		choice1: 'PHP',
		choice2: 'St Elmo',
		choice3: 'Rather have a topo',
		choice4: 'Tap... water',
		correctAnswer: 'choice2'
	}
];

//Set up Variables
//index will track where in the quiz out of number of questions the user is currently.
var index = 0;
//score will start at zero and add 1 as each answer is selected correctly. This will be diplayed and logged to local storage when the quiz has ended
var score = 0;

//select seconds to countdown from
var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        timeEl.textContent = secondsLeft + " seconds remaining";
//if countdown = zero, time has expired, send "game over" message
if(secondsLeft === 0) { 
	clearInterval(timerInterval);
    sendMessage();
}},1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up";
	questionArea.textContent='';
} 

//function to display question 1 through last question, after last question is complete, display final score
function showQuestion(){
	if (index <= (questionAnswer.length-1)) {
	question.textContent=questionAnswer[index].question;
	choice1.textContent=questionAnswer[index].choice1;
	choice2.textContent=questionAnswer[index].choice2;
	choice3.textContent=questionAnswer[index].choice3;
	choice4.textContent=questionAnswer[index].choice4;
	scoreArea.textContent='Score: ' + score;
} else {
	questionArea.textContent="Congrats, you finished!";
	scoreArea.textContent='Final Score: ' + score;
	clearInterval(timerInterval);
	timeEl.textContent = "";
	localStorage.setItem("Score", score);
	//will need to add a form to input for player to add name to local storage
	//localStorage.setItem("Player", count);
	//add another button to retake quiz
}}

//function to start quiz with a click of a button
start.addEventListener("click",startQuiz);

function startQuiz(){
	start.style.display="none";
	showQuestion();
	setTime();
	questionArea.style.display="block"; // could change later
}

//After logging which selection was made (next if statements to end game if index=number of questions)
//function to index to next question (position in array)
function indexQuestion(){
if (index <= (questionAnswer.length-1)) {
	index++;
} 
}

//After a selection is made, write function to compare selection to answer
function checkAnswer(selection){
console.log(selection);
console.log(questionAnswer[index].correctAnswer);
	if(selection === questionAnswer[index].correctAnswer) {
		score++; 
		indexQuestion();
		showQuestion();
 } else {
	 secondsLeft--;
	 secondsLeft--;
	indexQuestion();
	showQuestion();
}
}
