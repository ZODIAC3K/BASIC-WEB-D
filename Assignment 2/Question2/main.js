function checkAnswers() {
    var quizForm = document.getElementById("quizForm");
    var answers = ["a", "a", "a", "a", "a"];
    var totalMarks = 0;

    for (var i = 1; i <= answers.length; i++) {
      var selectedAnswer = quizForm.elements["q" + i].value;
      var answerField = document.getElementById("answer" + i);

      if (selectedAnswer === answers[i - 1]) {
        totalMarks++;
        answerField.value = "Correct!";
      } else {
        answerField.value =
          "Incorrect. Correct answer: " + answers[i - 1];
      }
    }
    alert("Total marks scored: " + totalMarks);
  }