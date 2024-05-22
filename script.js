let currentQuestion = 0;


function init() {
  document.getElementById("questionAmount").innerHTML = questions.length;

  showQuestion();
}


function showQuestion() {

  if ((currentQuestion >= questions.length)) {
    document.getElementById("questionBody").style = 'display: none';
    document.getElementById("endScreen").style = "";
  } else {
    let question = questions[currentQuestion];

    document.getElementById("currentQuestionAmount").innerHTML =currentQuestion + 1;

    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
  }
}


function answer(clickedAnswer) {
  let question = questions[currentQuestion];
  let clickedAnswerNumber = Number(clickedAnswer.slice(-1));

  let idOfRightAnswer = `answer${question["rightAnswer"]}`;

  if (question["rightAnswer"] === clickedAnswerNumber) {
    document
      .getElementById(clickedAnswer)
      .parentNode.classList.add("bg-success");
  } else {
    document
      .getElementById(clickedAnswer)
      .parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("nextButton").disabled = false;
}


function nextQuestion() {
  currentQuestion++;

  document.getElementById("nextButton").disabled = true;

  resetAnswerButtons();
  showQuestion();
}


function resetAnswerButtons() {
  document.getElementById("answer1").parentNode.classList.remove("bg-success");
  document.getElementById("answer1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer2").parentNode.classList.remove("bg-success");
  document.getElementById("answer2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer3").parentNode.classList.remove("bg-success");
  document.getElementById("answer3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer4").parentNode.classList.remove("bg-success");
  document.getElementById("answer4").parentNode.classList.remove("bg-danger");
}
