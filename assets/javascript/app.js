var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "What is the only mammal capable of true flight?",
  answers: ["Bat", "Flying Squirrel", "Sugar Glider", "Hummingbird"],
  correctAnswer: "Bat"
}, {
  question: "A newborn kangaroo is about the size of a ...?",
  answers: ["Lima Bean", "Plum", "Grapefruit", "Watermelon"],
  correctAnswer: "Lima Bean"
}, {
  question: "What is the gestation period of a blue whale?",
  answers: ["4-6 months", "10-12 months", "16-18 months", "2 years"],
  correctAnswer: "10-12 months"
}, {
  question: "What is the world's most poisonous spider?",
  answers: ["Brown Recluse", "Brazilian Wandering Spider", "Sydney Funnel Spider", "Black Widow"],
  correctAnswer: "Brazilian Wandering Spider"
}, {
  question: "What animal has the longest lifespan?",
  answers: ["Elephant", "Blue Whale", "Giant Tortoise", "Locust"],
  correctAnswer: "Giant Tortoise"
}, {
  question: "What animal has the highest blood pressure?",
  answers: ["Giraffe", "Blue Whale ", "Elephant", "Flea"],
  correctAnswer: "Giraffe"
}, {
  question: "How many times can a hummingbird flap its wings per second?",
  answers: ["20", "40", "80", "160"],
  correctAnswer: "80"
}, {
  question: "What is the smallest mammal in the world?",
  answers: ["Western Harvest Mouse", "Numbat", "Pygmy Marmoset", "Bumblebee Bat"],
  correctAnswer: "Bumblebee Bat"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
