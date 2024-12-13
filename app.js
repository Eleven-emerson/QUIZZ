
var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
]

var paraques=document.getElementById('question')
var options1 = document.getElementById('opt1')
var options2= document.getElementById('opt2')
var options3 = document.getElementById('opt3')

var btn=document.getElementById('button')
var score=0
var index=0
var min = 1
var sec =59
var timer =document.getElementById('timer')
var interval = setInterval(function(){
 timer.innerHTML=`${min} : ${sec} `
 sec--
 if (sec< 0 ){
    min--
    sec=59
    if (min<0){
        sec=59
        min=1
        nextquestion()
    }
    
 }
},1000)
nextquestion()
function nextquestion(){
 
    var getoptions=document.getElementsByName('options')
     for (var i=0; i<getoptions.length; i++){
        
        if (getoptions[i].checked){
           var selectedvalue = getoptions[i].value
           var selectedques= questions[index -1]['question']
           var selectedans = questions[index - 1][`option${selectedvalue}`]
           var correctOption=questions[index - 1][`correctOption`]
           if (selectedans==correctOption){
             
            score++

           }
         }

         getoptions[i].checked=false
     }
     
 btn.disabled= true
    
if (index>questions.length-1){
 alert((score/questions.length) * 100)
}
else{
    paraques.innerHTML=questions[index].question
    options1.innerText=questions[index].option1
    options2.innerText=questions[index].option2
    options3.innerText=questions[index].option3
    index++
}
}

function checkoption(){
   btn.disabled=false 
}
