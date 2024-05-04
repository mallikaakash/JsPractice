questionList = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "J.K. Rowling",
      "Stephen King",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Which of these is not a primary color?",
    options: ["Red", "Green", "Yellow", "Blue"],
    answer: "Green",
  },
  {
    question:
      "What is the approximate age of the universe, in billions of years?",
    options: ["13.8", "4.5", "7.2", "20.3"],
    answer: "13.8",
  },
  {
    question: "In computer programming, what does the acronym 'SQL' stand for?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Standard Query Logic",
      "Structured Query Logic",
    ],
    answer: "Structured Query Language",
  },
  {
    question:
      "What is the name of the phenomenon where light bends as it passes through a medium with varying density?",
    options: ["Refraction", "Reflection", "Diffraction", "Interference"],
    answer: "Refraction",
  },
  {
    question:
      "Which programming language is often used for artificial intelligence and machine learning?",
    options: ["Python", "Java", "C++", "R"],
    answer: "Python",
  },
  {
    question: "What is the speed of light in a vacuum, in meters per second?",
    options: ["299,792,458", "300,000,000", "275,000,000", "310,000,000"],
    answer: "299,792,458",
  },
  {
    question: "Who proposed the theory of general relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Stephen Hawking",
    ],
    answer: "Albert Einstein",
  },
  {
    question: "Which of the following is NOT a type of black hole?",
    options: [
      "Stellar Black Hole",
      "Supermassive Black Hole",
      "White Hole",
      "Intermediate Black Hole",
    ],
    answer: "White Hole",
  },
  {
    question: "In computing, what does 'IPv6' stand for?",
    options: [
      "Internet Protocol Version 6",
      "Internet Virtual Protocol 6",
      "Intranet Protocol Version 6",
      "Internet Protocol Version 4",
    ],
    answer: "Internet Protocol Version 6",
  },
  {
    question: "What is the primary function of a 'quantum computer'?",
    options: [
      "Performing complex calculations",
      "Simulating quantum mechanics",
      "Factoring large numbers",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which programming language was developed by Guido van Rossum?",
    options: ["Python", "Java", "C#", "Ruby"],
    answer: "Python",
  },
  {
    question:
      "What is the name of the rover that successfully landed on Mars in February 2021?",
    options: ["Perseverance", "Curiosity", "Opportunity", "Spirit"],
    answer: "Perseverance",
  },
  {
    question: "What is the concept of 'entanglement' in quantum mechanics?",
    options: [
      "A phenomenon where particles become interconnected",
      "A type of superposition",
      "A form of teleportation",
      "A way to measure quantum states",
    ],
    answer: "A phenomenon where particles become interconnected",
  },
  {
    question: "What is the name of the largest moon of Jupiter?",
    options: ["Ganymede", "Europa", "Io", "Callisto"],
    answer: "Ganymede",
  },
  {
    question: "Which of the following is NOT a programming paradigm?",
    options: ["Imperative", "Procedural", "Scalar", "Functional"],
    answer: "Scalar",
  },
  {
    question: "What is the primary function of a 'blockchain'?",
    options: [
      "Securely record transactions",
      "Run complex algorithms",
      "Generate random numbers",
      "Simulate quantum states",
    ],
    answer: "Securely record transactions",
  },
  {
    question:
      "Which of the following is NOT a potential application of nanotechnology?",
    options: [
      "Drug delivery systems",
      "Solar energy production",
      "Space travel",
      "Nuclear fusion",
    ],
    answer: "Nuclear fusion",
  },
  {
    question:
      "What is the name of the hypothetical structure that connects two separate points in spacetime?",
    options: ["Wormhole", "Black hole", "Singularity", "Neutron star"],
    answer: "Wormhole",
  },
  {
    question:
      "Which programming language is commonly used for developing mobile applications?",
    options: ["Swift", "Cobol", "Fortran", "Pascal"],
    answer: "Swift",
  },
  {
    question:
      "What is the name of the particle associated with the Higgs field?",
    options: ["Higgs boson", "Quark", "Lepton", "Neutrino"],
    answer: "Higgs boson",
  },
  {
    question:
      "What does the acronym 'AI' stand for in the context of computer science?",
    options: [
      "Artificial Intelligence",
      "Advanced Interface",
      "Automated Interaction",
      "Augmented Intelligence",
    ],
    answer: "Artificial Intelligence",
  },
  {
    question: "Which of the following is a fundamental force in nature?",
    options: ["Gravity", "Friction", "Magnetism", "Tension"],
    answer: "Gravity",
  },
  {
    question:
      "What is the name of the first human-made satellite launched into space?",
    options: ["Sputnik 1", "Voyager 1", "Explorer 1", "Apollo 11"],
    answer: "Sputnik 1",
  },
  {
    question:
      "Which of the following is a fundamental data structure in computer science?",
    options: ["Array", "Queue", "List", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What does the acronym 'IoT' stand for?",
    options: [
      "Internet of Things",
      "Internet of Technology",
      "Internet over Time",
      "Internet on Top",
    ],
    answer: "Internet of Things",
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["HTML", "CSS", "JavaScript", "XML"],
    answer: "XML",
  },
];

// export default questions;

const quizContainer = document.getElementById("quiz-container");
const a_1 = document.getElementById("a1");
const a_2 = document.getElementById("a2");
const a_3 = document.getElementById("a3");
const a_4 = document.getElementById("a4");

const submit = document.getElementById("submit");

let currentQuestion = 0;

loadQuestion();

function loadQuestion() {
  const question = question[currentQuestion];
  quizContainer.innerText = question.question;
  a_1.innerText = question.options[0];
  a_2.innerText = question.options[1];
  a_3.innerText = question.options[2];
  a_4.innerText = question.options[3];
}

submit.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz Completed");
  }
});
