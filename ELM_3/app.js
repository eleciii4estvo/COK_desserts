const questions100 = [
  {
      question: "Какие основные виды теста используются для приготовления порционных десертов?" ,
      answers:[
          {text: 'Дрожжевое, бисквитное, песочное, заварное, вафельное', correct: false},
          {text: 'Дрожжевое, бисквитное, песочное, заварное, слоеное, блинное', correct: false},
          {text: 'Дрожжевое, бисквитное, песочное, заварное, вафельное слоеное, блинное', correct: true}
      ]
  },
  {
      question: "Какие виды дрожжевого теста существуют?" ,
      answers:[
          {text: 'Сдобное', correct: false},
          {text: 'Хлебное', correct: false},
          {text: 'Сдобное и хлебное', correct: true}
      ]
  },
  {
      question: "Сколько способов существует для приготовления дрожжевого теста?" ,
      answers:[
          {text: 'Один', correct: false},
          {text: 'Два', correct: true},
          {text: 'Три', correct: false}
      ]
  },
  {
      question: "Какой ингредиент добавляют в бисквитное тесто для снижения количества клейковины, увеличения пластичности теста, получения выпеченного полуфабриката более сухой и рассыпчатой консистенции?" ,
      answers:[
          {text: 'Сахарную пудру', correct: false},
          {text: 'Крахмал', correct: true},
          {text: 'Соль', correct: false}
      ]
  },
  {
      question: "С каким средним содержанием клейковины используют муку для заварного теста?" ,
      answers:[
          {text: '28-36%', correct: true},
          {text: '20-25%', correct: false},
          {text: '20-30%', correct: false}
      ]
  }
]

const questions200 = [
  {
      question: "Что такое Пралине?" ,
      answers:[
          {text: 'Это эмульсия из шоколада и сливок', correct: false},
          {text: 'Это карамелизированный сахар с добавлением жирных сливок, сливочного масла и соли', correct: false},
          {text: 'Это орехово-карамельная начинка', correct: true}
      ]
  },
  {
      question: "Что такое Ганаш?" ,
      answers:[
          {text: 'Это орехово-карамельная начинка', correct: false},
          {text: 'Это эмульсия из шоколада и сливок', correct: true},
          {text: 'Это карамелизированный сахар с добавлением жирных сливок, сливочного масла и соли', correct: false}
      ]
  },
  {
      question: "Какой способо разрыхления используется для приготовления теста для блинов?" ,
      answers:[
          {text: 'Механический', correct: false},
          {text: 'Биологический', correct: true},
          {text: 'Химический', correct: false}
      ]
  },
  {
      question: "Как определить готовносить опары?" ,
      answers:[
          {text: 'По внешним признакам (опара слегка опадает)', correct: true},
          {text: 'По вкусу', correct: false},
          {text: 'По появлению кисломолочного запаха', correct: false}
      ]
  },
  {
      question: "Какая роль дрожжей в тестобразовании?" ,
      answers:[
          {text: 'Разрыхляют его, создают пористость', correct: true},
          {text: 'Способствуют лучшему набуханию белков муки', correct: false},
          {text: 'Улучшают вкус изделия', correct: false}
      ]
  }
]

const questions300 = [
  {
      question: "Для каких изделий используют тесто, приготовленное опарным способом?" ,
      answers:[
          {text: 'С большим количеством сдобы', correct: true},
          {text: 'С малым количеством сдобы', correct: false},
          {text: 'С кремом, глазированные', correct: false}
      ]
  },
  {
      question: "Для каких изделий используют тесто, приготовленное безопасным способом?" ,
      answers:[
          {text: 'С большим количеством сдобы', correct: false},
          {text: 'С малым количеством сдобы', correct: true},
          {text: 'С кремом, глазированные', correct: false}
      ]
  },
  {
      question: "Какое тесто используют для приготовления блинчиков?" ,
      answers:[
          {text: 'Дрожжевое', correct: false},
          {text: 'Заварное', correct: false},
          {text: 'Бездрожжевое', correct: true}
      ]
  },
  {
      question: "Какое тесто используют для приготовления оладий?" ,
      answers:[
          {text: 'Дрожжевое', correct: true},
          {text: 'Заварное', correct: false},
          {text: 'Бездрожжевое', correct: false}
      ]
  },
  {
      question: "Что влияет на длительность расстойки изделия перед выпечкой?" ,
      answers:[
          {text: 'Масса самого изделия', correct: false},
          {text: 'Количество сдобы', correct: true},
          {text: 'Наличие или отсутствие фарша', correct: false}
      ]
  }
]


const scoreInformation = document.querySelector(".score_info")
const questionElement100 =  document.querySelector("#question_name100");
const questionElement300 =  document.querySelector("#question_name300");
const answerBtns100 =  document.querySelector("#answer_buttons100");
const answerBtns300 =  document.querySelector("#answer_buttons300");
const nextBtn100 =  document.querySelector("#next_button100");
const nextBtn300 =  document.querySelector("#next_button300");
const blocked200 = document.querySelector(".block200");
const blocked300 = document.querySelector(".block300");
const nextBtn200 =  document.querySelector("#next_button200");
const answerBtns200 =  document.querySelector("#answer_buttons200");
const questionElement200 =  document.querySelector("#question_name200");
const hiden200 = document.querySelector('.hiden_content200')
const hiden300 = document.querySelector('.hiden_content300')
const endQuiz = document.querySelector('.end_quiz')
const quizWrap = document.querySelector('.quiz_cont')
let isSecondReady = false;
let isThirdReady = false;

let questionCount = 0;



let currentQuestionIndex100 = 0;
let score=0;

function startQuiz100(){
  currentQuestionIndex100 = 0;
  nextBtn100.innerHTML="Следующий вопрос";
  showQuestion100();
}

function showQuestion100(){
  resetState100();
  let currentQuestion100 = questions100[currentQuestionIndex100];
  let questionNo100 = currentQuestionIndex100 + 1;
  questionElement100.innerHTML = questionNo100 + ". " + currentQuestion100.question;
  currentQuestion100.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("ans_btn");
      answerBtns100.appendChild(button);
      if(answer.correct){
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer100)
  })
}

function resetState100(){
  nextBtn100.style.display = "none";
  while(answerBtns100.firstChild){
      answerBtns100.removeChild(answerBtns100.firstChild);
  }
    blockContent200()
    blockContent300()
}

function selectAnswer100(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
      score+=100;
      scoreInformation.innerHTML=`Ваш счет: ${score} баллов`

  }else{
      selectBtn.classList.add("incorrect");
  }
  Array.from(answerBtns100.children).forEach(button=>{
      if(button.dataset.correct === "true"){
          button.classList.add("correct");
      }
      button.disabled=true;
  });
  nextBtn100.style.display = "block";
}

function handleNextButton100(){
  currentQuestionIndex100++;
  if(currentQuestionIndex100 < questions100.length){
      showQuestion100();
  }else{
    answerBtns100.innerHTML='';
    nextBtn100.remove()
    questionElement100.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
   }
}

nextBtn100.addEventListener("click", ()=>{
  if(currentQuestionIndex100<questions100.length){
      handleNextButton100();
  } else{
      answerBtns100.innerHTML='';
      nextBtn100.remove()
  }
  checkEnd()

})

startQuiz100();

function blockContent200(){
  if(score<190){
    blocked200.innerHTML = `
    Чтобы разблокировать наберите еще ${200 - score} очков!
    `
  } else{
    blocked200.classList.remove("blocked_content")
    blocked200.innerHTML = ''
    hiden200.classList.remove('hiden_content200')
    if(!isSecondReady){
      isSecondReady=true;
      startQuiz200();
    }
  }
}

function blockContent300(){
  if(score<700){
    blocked300.innerHTML = `
    Чтобы разблокировать наберите еще ${750 - score} очков!
    `
  } else{
    blocked300.classList.remove("blocked_content")
    blocked300.innerHTML=``
    hiden300.classList.remove('hiden_content300')
    if(!isThirdReady){
      isThirdReady=true;
      startQuiz300();
    }
  }
}

let currentQuestionIndex200 = 0;

function startQuiz200(){
  currentQuestionIndex200 = 0;
  nextBtn200.innerHTML="Следующий вопрос";
  showQuestion200();
}

function showQuestion200(){
  resetState200();
  let currentQuestion200 = questions200[currentQuestionIndex200];
  let questionNo200 = currentQuestionIndex200 + 1;
  questionElement200.innerHTML = questionNo200 + ". " + currentQuestion200.question;
  currentQuestion200.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("ans_btn");
      answerBtns200.appendChild(button);
      if(answer.correct){
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer200)
  })
}

function resetState200(){
  nextBtn200.style.display = "none";
  while(answerBtns200.firstChild){
      answerBtns200.removeChild(answerBtns200.firstChild);
  }
  blockContent300()
}

function selectAnswer200(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
      score+=250;
      scoreInformation.innerHTML=`Ваш счет: ${score} баллов`

  }else{
      selectBtn.classList.add("incorrect");
  }
  Array.from(answerBtns200.children).forEach(button=>{
      if(button.dataset.correct === "true"){
          button.classList.add("correct");
      }
      button.disabled=true;
  });
  nextBtn200.style.display = "block";
}

function handleNextButton200(){
  currentQuestionIndex200++;
  if(currentQuestionIndex200 < questions200.length){
      showQuestion200();
  }else{
    answerBtns200.innerHTML='';
    nextBtn200.remove()
      questionElement200.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
  }
}

nextBtn200.addEventListener("click", ()=>{
  if(currentQuestionIndex200<questions200.length){
      handleNextButton200();
  } else{

  }
  checkEnd()

})

let currentQuestionIndex300 = 0;

function startQuiz300(){
  currentQuestionIndex300 = 0;
  nextBtn300.innerHTML="Следующий вопрос";
  showQuestion300();
}

function showQuestion300(){
  resetState300();
  let currentQuestion300 = questions300[currentQuestionIndex300];
  let questionNo300 = currentQuestionIndex300 + 1;
  questionElement300.innerHTML = questionNo300 + ". " + currentQuestion300.question;
  currentQuestion300.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("ans_btn");
      answerBtns300.appendChild(button);
      if(answer.correct){
          button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer300)
  })
}

function resetState300(){
  nextBtn300.style.display = "none";
  while(answerBtns300.firstChild){
      answerBtns300.removeChild(answerBtns300.firstChild);
  }
}

function selectAnswer300(e){
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect){
      selectBtn.classList.add("correct");
      score+=500;
      scoreInformation.innerHTML=`Ваш счет: ${score} баллов`

  }else{
      selectBtn.classList.add("incorrect");
  }
  Array.from(answerBtns300.children).forEach(button=>{
      if(button.dataset.correct === "true"){
          button.classList.add("correct");
      }
      button.disabled=true;
  });
  nextBtn300.style.display = "block";
 
}

function handleNextButton300(){
  currentQuestionIndex300++;
  if(currentQuestionIndex300 < questions300.length){
      showQuestion300();
  }else{
    answerBtns300.innerHTML='';
    nextBtn300.remove()
    questionElement300.innerHTML='Вы ответили на все вопросы данного блока. Переходите к следующему. В случае, если вам не хватает очков, перезагрузите страницу и проверьте свои знания еще раз'
  }
}

nextBtn300.addEventListener("click", ()=>{
  if(currentQuestionIndex300<questions300.length){
      handleNextButton300();
  } else{
  }
  checkEnd()
})

const endScore = document.querySelector('.end_score')
const endMsg = document.querySelector('.end_message')

function checkEnd(){
  if (questionCount===14){
    quizWrap.style.display = "none";
    endQuiz.style.display = "block";
    endScore.innerHTML = `Вы ответили на все вопросы данного теста и заработали ${score} баллов из 4250 возможных.`
    if (score>4000){
      endMsg.innerHTML = `Это превосходный результат! Так держать!`
    } else if(score>3200){
      endMsg.innerHTML=`Это отличный результат! Молодец!`
    } else if(score>2500){
      endMsg.innerHTML = `Хороший результат!`
    }
    else if(score>1500){
      endMsg.innerHTML = `Попробуй пройти тест заново, чтобы повысить свой результат!`
    }
  } else{
    questionCount++;
  }
}