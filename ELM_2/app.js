const questions = [
    {
        question: "Какие ингредиенты нужны для приготовления клубнично-лимонного сорбета?" ,
        answers:[
            {text: 'Лимонный сок, замороженная клубника, сахар, яичный белок.', correct: true},
            {text: 'Лимонный сок, замороженная клубника, сахарная пудра, яичный белок.', correct: false},
            {text: 'Лимонный сок, свежая клубника, сахарная пудра, яичный белок.', correct: false},
            {text: 'Лимонный сок, свежая клубника, сахар, яичный белок.', correct: false}
        ]
    }
]

const questionElement =  document.querySelector("#question_name");
const answerBtn =  document.querySelector("#answer_buttons");
const nextBtn =  document.querySelector("#next_button");

let currentQuestionIndex = 0;
let score=0;