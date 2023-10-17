var timer;
var score = 0;
var currentQuestionIndex = 0;
var countDown=60;

var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];
    
  var ourFirstChoices= questions[0].answer
  console.log(ourFirstChoices)

  
        var titleEL= document.getElementById("question");
        var choicesEl = document.getElementById("answer-buttons");
        var nextbutton = document.getElementById("next-btn");
        var countDownEl = document.getElementById("time");

        function clockTick() {
            // update time
            countDown--;
            countDownEl.textContent = countDown;
          
            // check if user ran out of time
            if (countDown <= 0) {
        //      quizEnd();
            clearInterval(timer);
            }
          }

          function startQuiz() {
            timer = setInterval(clockTick, 1000);
          }

          function getQuestion() {
            // get current question object from array
            var currentQuestion = questions[currentQuestionIndex];
          
            // update title with current question
            var titleEl = document.getElementById('question-title');
            titleEl.textContent = currentQuestion.title;
          
            // clear out any old question choices
            choicesEl.innerHTML = '';
          
            // loop over choices
            for (var i = 0; i < currentQuestion.choices.length; i++) {
              // create new button for each choice
              var choice = currentQuestion.choices[i];
              var choiceNode = document.createElement('button');
              choiceNode.setAttribute('value', choice);
          
              choiceNode.textContent = i + 1 + '. ' + choice;
          
              // display on the page
              choicesEl.appendChild(choiceNode);
            }
          }

          function questionClick(event) {
            var buttonEl = event.target;
          
            // check if user guessed wrong
            if (buttonEl.value !== questions[currentQuestionIndex].answer) {
              // penalize time
              countDown -= 15;
         
              if (countDown < 0) {
                countDown = 0;
              }
          
              // display new countDown on page
              countDownEl.textContent = countDown;
          
            // move to next question
            currentQuestionIndex++;
          
            // check if we've run out of questions
            if (countDown <= 0 || currentQuestionIndex === questions.length) {
             // quizEnd();
            } else {
              getQuestion();
            }
          }
        }
// user clicks on element containing choices
choicesEl.onclick = questionClick;


// to call functions startQuiz we need to invoke it
       startQuiz()
       console.log(countDown)







  