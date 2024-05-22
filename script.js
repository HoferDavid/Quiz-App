
let currentQuestion = 0;


function init() {
    document.getElementById("questionAmount").innerHTML = questions.length;

    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionText").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer1"];
    document.getElementById("answer2").innerHTML = question["answer2"];
    document.getElementById("answer3").innerHTML = question["answer3"];
    document.getElementById("answer4").innerHTML = question["answer4"];
}


function answer(clickedAnswer) {
    let question = questions[currentQuestion];
    let clickedAnswerNumber = Number(clickedAnswer.slice(-1));

    let idOfRightAnswer = `answer${question["rightAnswer"]}`;

    if (question["rightAnswer"] === clickedAnswerNumber) {
        document.getElementById(clickedAnswer).parentNode.classList.add("bg-success");
    } else {
        document.getElementById(clickedAnswer).parentNode.classList.add("bg-danger");
        document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    }
    document.getElementById("nextButton").disabled = false;
}