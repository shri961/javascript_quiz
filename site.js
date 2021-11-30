
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 4,
    question: "HTTP stands for",
    answer: "Hyper Text Transfer Protocol",
    options: [
      "Hyper Text Translate Protocol",
      "High Text Transfer Protocol",
      "Hyper Text Transfer petrol",
      "Hyper Text Transfer Protocol"
    ]
  },

  {
    id: 5,
    question: "this is not an output divice",
    answer: "Mouse",
    options: [
      "Moniter",
      "Printer",
      "Mouse",
      "ploter"
    ]
  },

  {
    id: 6,
    question: "moniter is a ___",
    answer: "output divice",
    options: [
      "Input divice",
      "output divice",
      "both a and b",
      "none of this"
    ]
  },

  {
    id: 7,
    question: "in CRT moniter how many colors are creating a projection image",
    answer: "3",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
{
  id: 8,
  question: "The Binary Coded Decimal (BCD) uses",
  answer: "6 bits",
  options: [
    "6 bits",
    "8 bits",
    "16 bits",
    "None of these"
  ]
},
{
  id: 9,
  question: "Which of the following is billionth of a second?",
  answer: " Nanosecond",
  options: [
    " Nanosecond",
    "Microsecond",
    "Terabyte",
    "Gigabyte"
  ]
},
{
  id: 10,
  question: "The two kinds of main memory are",
  answer: "RAM and ROM",
  options: [
    "RAM and ROM",
    "CD and DVD",
    "primary and secondery",
    "Direct and siquencial"
  ]
},

{
  id: 11,
  question: "Befour graphical user interface is found the whole system is running on ",
  answer: "DOS",
  options: [
    "DOS",
    "linux",
    "Windows",
    "none of this"
  ]
},

{
  id: 12,
  question: "c language is devloped in___ ",
  answer: "1972",
  options: [
    "1972",
    "1971",
    "1962",
    "1970"
  ]
},

{
  id: 13,
  question: "Which Committee standardize C Programming Language ?",
  answer: "ANSI",
  options: [
    "ANSI",
    "ISO",
    "IEC",
    "IEEE"
  ]
},

{
  id: 14,
  question: "which is the following language is use to create a backend program",
  answer: "all of the above",
  options: [
    "SQL",
    "My SQL",
    "JAVA DARBI",
    "all of the above"
  ]
},

{
  id: 15,
  question: "JDK stands for",
  answer: "Java Devlopment Kit",
  options: [
  "Java Devlopment Kit",
  "Java Distributer Kit",
  "java Domain Kit",
  "None of these"
]
},

{
  id: 16,
  question: "java is developed by",
  answer: "Sun Microsystems",
  options: [
  "denis richi",
  "Sun Microsystems",
  "Both a and b",
  "None of these"
]
},

{
  id: 17,
  question: "Which of the following option leads to the portability and security of Java?",
  answer: "Bytecode is executed by JVM",
  options: [
  "Dynamic binding between objects",
  "Use of exception handling",
  "Bytecode is executed by JVM",
  "The applet makes the Java code secure and portable"
]
},

{
  id: 18,
  question: "_____ is used to find and fix bugs in the Java programs.",
  answer: "JDB",
  options: [
  "JRE",
  "JDB",
  "JDK",
  "JVM"
]
},

{
  id: 19,
  question: "What is the return type of the hashCode() method in the Object class?",
  answer: "init",
  options: [
  "void",
  "long",
  "init",
  "object"
]
},

{
  id: 20,
  question: "Evaluate the following Java expression, if x=3, y=5, and z=10++z + y - y + z + x++",
  answer: "24",
  options: [
  "21",
  "24",
  "20",
  "2"
]
},

{
  id: 21,
  question: "What is the maximum possible length of an identifier?",
  answer: "none of this above",
  options: [
  "16",
  "32",
  "64",
  "none of this above"
]
},

{
  id: 22,
  question: "In which language is Python written?",
  answer: "C",
  options: [
  "PHP",
  "C",
  "English",
  "all of the above"
]
},
{
  id: 23,
  question: "In which year was the Python 3.0 version developed?",
  answer: "2008",
  options: [
  "2001",
  "2008",
  "2005",
  "2021"
]
},
{
  id: 24,
  question: "What do we use to define a block of code in Python language?",
  answer: "Indentetion",
  options: [
  "block",
  "indention",
  "key",
  "None of these"
]
},

{
  id: 25,
  question: "Which character is used in Python to make a single line comment?",
  answer: "with hash #",
  options: [
  "with hash #",
  "with slash /",
  "with dubble slash //",
  "none of this"
]
}
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
