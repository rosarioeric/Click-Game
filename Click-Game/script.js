var startBtn = document.getElementById("start");
var score = 0;
var questIndex = 0;
var choiceBox = document.getElementById("questHeader");
var timeText = $("#time-text");
var timer = 10;
var currentQuest = 0;

var questList = [
{   question1: "In what state was Busey born?",
    choice1: ['Kansas', 'Oklahoma', 'Texas'],
    answer: 'Texas'
},

{   question2: "In what film did Busey play Pappas, a seasoned FBI agent?",
    choice2: ['Point Break', 'Sharknado 4', 'Lethal Weapn'],
    answer: 'Point Break'
},
{
    question3: "Who is Buseys actor son?",
    choice3: ['Harry Busey', 'Gary Busey, Jr.', 'Jake Busey'],
    answer: 'Jake Busey'
},
{
    question4: 'In "Fear and Loathing in Las Vegas", Busey has a cameo as a?',
    choice4: ['Exotic dancer', 'Police officer','Professional gambler'],
    answer4: 'Police Officer'
},
{
    question5: 'How tall is Busey?',
    choice5: ['5ft 9in', '6ft', '6ft 3in'],
    answer: '6ft'
},
]

$(startBtn).on("click", function (askQuestion1) 
{
    document.getElementById("questHeader").textContent=questList[0].question1;
    document.getElementById("choiceBox1").textContent=questList[0].choice1[0];
    document.getElementById("choiceBox2").textContent=questList[0].choice1[1];
    document.getElementById("choiceBox3").textContent=questList[0].choice1[2];
})

$(".answer3").on("click", function (askQuestion2) 
{
    document.getElementById("questHeader").textContent=questList[1].question2;
    document.getElementById("choiceBox1").textContent=questList[1].choice2[0];
    document.getElementById("choiceBox2").textContent=questList[1].choice2[1];
    document.getElementById("choiceBox3").textContent=questList[1].choice2[2];
})

$(".answer1").on("click", function (askQuestion3) 
{
    document.getElementById("questHeader").textContent=questList[2].question3;
    document.getElementById("choiceBox1").textContent=questList[2].choice3[0];
    document.getElementById("choiceBox2").textContent=questList[2].choice3[1];
    document.getElementById("choiceBox3").textContent=questList[2].choice3[2];
})

$(".answer3").on("click", function (askQuestion4) 
{
    document.getElementById("questHeader").textContent=questList[3].question4;
    document.getElementById("choiceBox1").textContent=questList[3].choice4[0];
    document.getElementById("choiceBox2").textContent=questList[3].choice4[1];
    document.getElementById("choiceBox3").textContent=questList[3].choice4[2];
})

$(".answer2").on("click", function (askQuestion5)
{
    document.getElementById("questHeader").textContent=questList[4].question5;
    document.getElementById("choiceBox1").textContent=questList[4].choice5[0];
    document.getElementById("choiceBox2").textContent=questList[4].choice5[1];
    document.getElementById("choiceBox3").textContent=questList[4].choice5[2];
})


for (var i=0; i < questList.length; i++) {
    var response = click(questList[i].answer);
    if (response == questList[i].answer){
        score++;
    } else {
        score--;
    }
}