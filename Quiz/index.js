const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswer: "Au"
    },
    {
      question: "Who is the first Indian woman who became the Miss World.",
      options: ["Reita Faria", " Aishwarya Rai", "Lara Dutta", "Priyanka Chopra"],
      correctAnswer: "Reita Faria"
    },

      {
        question: "Which among the following is the longest tunnel in India?",
        options: ["Pir Panjal Railway Tunnel", " Kabude Tunnel", "Nathuwadi Tunnel", " Berdewadi Tunnel"],
        correctAnswer: "Pir Panjal Railway Tunnel"
      },
      {
        question: "The mountain Great Dividing Range is located in ?",
        options: ["India", "Australia", "New Zealand", "South Africa"],
        correctAnswer: "Australia"
      },
      {
        question: "The book Romancing with Life was written by ",
        options: [" Amitabh Bachchan", " Amish Tripathi", " P. Chidambaram", "Dev Anand"],
        correctAnswer: "Dev Anand"
      },
      {
        question: "Bhabha Atomic Research Center (BARC) is located in ",
        options: ["Udhagamandalam", "Mumbai", "Hyderabad", "Trombay"],
        correctAnswer: "Trombay"
      },
      {
        question: " The National Game of Russia is",
        options: ["Baseball", "Tennis", "Chess", "Ice Hockey"],
        correctAnswer: "Chess"
      },
      {
        question: " Who is the first female amputee who climbed Mt. Everest.",
        options: [" Bachendri Pal ", "Arunima Sinha", "Santosh yadav", "Sonam Gyatso"],
        correctAnswer: "Arunima Sinha"
      },
      {
        question: "The Election Commission of India (ECI) recognises a party as National Party if it is recognised in at least how many states?",
        options: ["Two", "Four", "Six", "Eight"],
        correctAnswer: "Six"
      },
      {
        question: "Which of the following generation of computers is associated with artificial intelligence? ",
        options: ["First", "Third", "Fifth", "Seventh"],
        correctAnswer: "Fifth"
      },
      {
        question: "The following two states are largest producers of Coal in India?",
        options: ["Jharkhand & Chhattisgarh", "  Madhya Pradesh & Orissa", "Bihar & West Bengal", "Andhra Pradesh & Chhattisgarh"],
        correctAnswer: "Jharkhand & Chhattisgarh"
      },
      {
        question: "Which institution developed the Light Combat Aircraft (LCA) Tejas?",
        options: ["HAL", "DRDO", "BEL", "ISRO"],
        correctAnswer: "DRDO"
      },
      {
        question: "Which Union Ministry announced 5G & Beyond Hackathon 2023?",
        options: ["  Ministry of Communication", "  Ministry of Science and Technology", " Ministry of MSME", "Ministry of External Affairs"],
        correctAnswer: "Ministry of Communication"
      },
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 120;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  

 let message = "";
if (scorePercentage >= 90) {
  message = "You have studied very well! Keep up the good work!";
} else if (scorePercentage >= 80) {
  message = "You have studied well! Great job!";
} else {
  message = "Focus on studying more to improve your score!";
}
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${Math.round(scorePercentage)}%</p>
      <p>${message}</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);