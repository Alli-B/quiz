function populate(){
	if (quiz.isEnded()) {
		showScores();
	}else {
		// Show question
		var element =document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);

        }

        showProgress();

	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate(); 
	}
};


function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml += "<h2 id ='score'> Your scores: " + quiz.score + "</h2>";
		var element = document.getElementById("quiz");
		element.innerHTML = gameOverHtml;
}; 

function showProgress() {
	var currentQuestionNumber = quiz.getQuestionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


var questions = [
	new Question("What is Wizkid’s real name?", ["Ayodeji Balogun", "Ayodele Ibrahim", "Ayobami Balogun", "Ibrahim Biodun"], "Ayodeji Balogun"),
	new Question("What was his first record label?", ["E.M.E", "YBNL", "Starboy", "Chocolate city"], "E.M.E"),
	new Question("He's first album was?", ["Baddest boy", "Superstar", "Don’t dull", "Holla at your boy"], "Superstar"),
	new Question("Which one of these songs did he sing with Drake?", ["Come closer", "The matter", "Slowdown", "African bad gyal"], "Come closer"),
	new Question("What year did he win a grammy?", ["2011", "2019", "2020", "never"], "never")
];

var quiz = new Quiz(questions);

populate();