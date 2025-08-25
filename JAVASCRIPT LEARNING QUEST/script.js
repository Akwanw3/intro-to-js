function showPage(pageID){
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.nav-btn');
    pages.forEach(page =>{
        page.classList.remove('active');
    });

    buttons.forEach(btn =>{
        btn.classList.remove('active');
    });

    document.getElementById(pageID).classList.add('active');

    const clickedbutton = Array.from(buttons).find(btn => btn.getAttribute('onclick')=== `showPage('${pageID}')`);
    if (clickedbutton) {
        clickedbutton.classList.add('active');
    }

}

function calculateResult(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let opp = document.getElementById('operation');
    let result = document.getElementById('calc-output');
    let sum = (Number(a)+Number(b));
    let minus = a-b;
        let times = a*b;
        let div = a/b;
        let mod = a%b;
    let nonsense = (a==="" || b==='');
   
    if (opp.value ==='add' && !nonsense){
        result.textContent = `your answer is ${sum}  😁`;
        result.classList.add('success');
    }else if (opp.value ==='subtract' && !nonsense){
        result.textContent = `your answer is ${minus}  😁`;
        result.classList.add('success');
    }else if (opp.value ==='multiply' && !nonsense){
        result.textContent = `your answer is ${times}  😁`;
        result.classList.add('success');
    }else if (opp.value ==='divide' && !nonsense){
        result.textContent = `your answer is ${div}  😁`;
        result.classList.add('success');
    }  else if (opp.value ==='modulus' && !nonsense){
        result.textContent = `your answer is ${mod}  😁`;
        result.classList.add('success');      
    }else{
        result.textContent = `Werey, who be your math teacher  `
         result.classList.add('error');
        result.classList.remove('success');

    }
 if (a=='' && b==''){
        result.textContent = `Oga Enter a valid number no de mumu yourself`;
        result.classList.add('error');
        result.classList.remove('success');
    }
}



function clearCalculator(){
   document.getElementById('num1').value ='';
   document.getElementById('num2').value ='';
   document.getElementById('calc-output').textContent= ''; 
     }



function exploreDataType(){
    let inp = document.getElementById('dataInput');
    let result= document.getElementById('type-output');
    let input = inp.value;
    let type ;
    if(input ==='true' || input==="false"){
       type = 'Boolean' ;
    }else if (!isNaN((input)) && input.trim()!==''){
        type = 'Number';
    }else{
        type = 'sring';
    }

    if (input !==''){
       result.textContent = `The Data type you entered is a ${type}.`;
        result.classList.add('success'); 
    } else{
       result.textContent = `Oga you go type something oo, No do like witch`; 
       result.classList.add('error');
       result.classList.remove('success');
    }
   
        }


     


/////Arrays & Loops
let Myarray = [];
 let input = document.getElementById('gradeInput');
 let result = document.getElementById('grades-output')
function addGrade(){
   if(input.value !==''){
    Myarray.push(input.value);
    input.value = '';
   }else{
    result.textContent = `Enter a score na, No stress me ooo`;
    result.classList.add('error');
    result.classList.remove('success')
   }
}

function showAllGrades(){
if (Myarray.length){
    result.textContent = Myarray.join();
    result.classList.add('success')
}else{
    result.textContent =`No score has been recorded `;
    result.classList.add('error');
    result.classList.remove('success');
}
}

function calculateAverage(){
    let sum = 0;
    for (let i=0; i<Myarray.length; i++){
        sum += Number( Myarray[i]);
    }
    let average = sum/Myarray.length;
    if (Myarray.length){
    result.textContent = average
    result.classList.add('success')
}else{
    result.textContent =`No average has been recorded `;
    result.classList.add('error');
    result.classList.remove('success')
}

}

function findHighestGrade(){
let highest = Myarray[0];
for (let i=0; i<Myarray.length; i++){
    if (Myarray[i] > highest){
        highest = Myarray[i]
    }
}
if (Myarray.length){
    result.textContent = highest
    result.classList.add('success')
}else{
    result.textContent =`No de mumu yourself for here oo `;
    result.classList.add('error');
    result.classList.remove('success');
}

}

function findFailingGrades(){
    let lowscr = Myarray.filter(grade => grade<60);
    if (Myarray.length){
    result.textContent = lowscr.join();
    result.classList.add('success')
}else{
    result.textContent =`I go soon beat you `;
    result.classList.add('error');
    result.classList.remove('success')
}
}


function removeLastGrade(){
     if(Myarray.length){
    Myarray.pop();
   }else{
    result.textContent = `No click nonsense for here again!!!`;
    result.classList.add('error');
    result.classList.remove('success');
   }
}

function clearAllGrades(){
    Myarray.length=0;
    result.textContent = ''
    input.value = ''
}
 










//Objects 
let display = document.getElementById('student-profile-output');
let studentProfile = {};
function createStudentProfile(){
    let Studentname = document.getElementById('studentName').value.trim();
    let age = document.getElementById('studentAge').value.trim();
    let subject = document.getElementById('studentSubject').value.trim();
    let GPA = document.getElementById('studentGPA').value.trim();
    if(Studentname && age && subject && GPA){
        studentProfile = {
            Name : Studentname,
            Age : age,
            FavSubject : subject,
            CGPA : GPA
        };
        display.textContent= `Profile Created Successfully`;
        display.classList.add('success');
        display.classList.remove('error');
    }else{
        display.textContent= `please enter a complete profile `;
        display.classList.add('error');
        display.classList.remove('success');
    }
    
}

function updateStudentInfo(){
    let Newname = document.getElementById('studentName').value.trim();
    let Newage = document.getElementById('studentAge').value.trim();
    let Newsubject = document.getElementById('studentSubject').value.trim();
    let NewGPA = document.getElementById('studentGPA').value.trim();
    if(Object.keys(studentProfile).length){
        if(Newname)
            studentProfile.Name = Newname;
        
        if(Newage)
            studentProfile.Age = Newage;
        
        if(Newsubject)
            studentProfile.FavSubject = Newsubject;
        
        if(NewGPA)
            studentProfile.CGPA = NewGPA;

        display.textContent = `Profile updated Successfully`;
        display.classList.add('success');
        display.classList.remove('error');

        } else{
        display.textContent= `No profile to update you create anything before nii`;
        display.classList.add('error');
        display.classList.remove('success');
    }

}
   



function displayStudentInfo(){
    if(Object.keys(studentProfile).length){
        display.textContent = `Name: ${studentProfile.Name}, Age: ${studentProfile.Age}, Favorite Subject: ${studentProfile.FavSubject}, CGPA: ${studentProfile.CGPA}`;
        display.classList.add('success');
        display.classList.remove('error');
    }else{
        display.textContent= `No profile to view, craete a profile first`;
        display.classList.add('error');
        display.classList.remove('success');
    }
}



///functions

let functinput = document.getElementById('messageInput');
let functoutput = document.getElementById('functions-output');

function regularFunction(){
    function runregular(msg){
        return `Regular function says: ${msg}`
    }
    functoutput.textContent = runregular(functinput.value);
    functoutput.classList.add('success');
    functoutput.classList.remove('error');

    if (!functinput.value){
        functoutput.textContent= `Type something na`;
        functoutput.classList.add('error');
        functoutput.classList.remove('success');
    }
}


function arrowFunctionDemo(){
    let runarrow = (msg)=> `arrow function say: ${msg}`;
    functoutput.textContent = runarrow(functinput.value);
    functoutput.classList.add('success');
    functoutput.classList.remove('error');

    if (!functinput.value){
        functoutput.textContent= `Type something na`;
        functoutput.classList.add('error');
        functoutput.classList.remove('success');
    }

}


function callbackDemo(){
    function runcallback(msg, callback){
        return callback(msg);
    }
    let result = runcallback(functinput.value, function(m){
        return'Callback processed:'+ m.toUpperCase();
    })
    functoutput.textContent = result;
    functoutput.classList.add('success');
    functoutput.classList.remove('error');

     if (!functinput.value){
        functoutput.textContent= `Type something na`;
        functoutput.classList.add('error');
        functoutput.classList.remove('success');
    }
}

function higherOrderDemo(){
    function runhigher(msg){
        return function(){
            return `higher order says ${msg}`
        }
    }
    let fn = runhigher(functinput.value);
    functoutput.textContent= fn();
    functoutput.classList.add('success');
    functoutput.classList.remove('error');


     if (!functinput.value){
        functoutput.textContent= `Type something na`;
        functoutput.classList.add('error');
        functoutput.classList.remove('success');
}}


function runCalculatorFunctions(){
    let num1 = parseFloat(document.getElementById('funcNum1').value);
    let num2 = parseFloat(document.getElementById('funcNum2').value);
    let output = document.getElementById('calculator-functions-output');

    if (isNaN(num1)||isNaN(num2)){
        output.textContent = `Oya Enter better Number no de mumu yourself`;
        output.classList.add('error');
        output.classList.remove('success');
        return;
    }

    let addition = num1 + num2;
    let subtract = num1 - num2;
    let multiply = num1*num2;
    let mod = num1%num2;
    let divide = num2 !==0 ? (num1/num2):`<span class ="error">cannot divide by zero </span>`;

    output.innerHTML = ` Addition : ${addition} <br>
 Subtraction: ${subtract} <br>
 Multiplication: ${multiply} <br>
 Division : ${divide} <br>
 Modulus : ${mod}`;
output.classList.add('success');
output.classList.remove('error');
}

///DOM Manipulation

let input3 = document.getElementById('contentInput');
let title = document.getElementById('dynamic-title');
let text = document.getElementById('dynamic-text');
let newelement = document.getElementById('element-container');

function changeTitle(){
    if (input3.value){
        title.textContent = input3.value.toUpperCase();
    }else{
        alert(`you need to type something`)
    }
}

function addNewElement(){
    if (input3.value){
        newelement.textContent = input3.value;
    }else{
        alert(`Type WTF you want to add`)
    }
}
 let dyncontent = document.getElementById('dynamic-content');
    let arrt =['error', 'badge', 'success'];
function changeStyles(){
   let current = arrt.shift();
   dyncontent.classList.remove('error', 'success','badge');
   dyncontent.classList.add(current);
   arrt.push(current)

}

function toggleVisibility(){
    if (dyncontent){
        dyncontent.classList.toggle('page');
    }
}

let input4 = document.getElementById('classInput');
let demo = document.getElementById('attribute-demo');



function classexistsincssheet(className){
    for (let i=0; i<document.styleSheets.length; i++){
        let sheet = document.styleSheets[i];
        let rules;
        try{
            rules = sheet.cssRules || sheet.rules;
        }catch(e){
            continue;
        }
        if (rules){
            for (let j=0; j<rules.length; j++){
                if (rules[j].selectorText === `.${className}`){
                    return true;
                }
            }
        }
    }
    return false;
}






function addCustomClass(){
    let className = input4.value.trim();
    if(!className){
        alert(`You'll need to type something joor`);
        return;
    }
    if (classexistsincssheet(className)){
        demo.classList.add(className);
    }else{
        alert(`the Class ${className} does not exist, please define it first`)
    }
}

function removeCustomClass(){
    let className = input4.value.trim();
    if (!className){
        alert(`Type the class you want to remove!!`);
        return;
    }
    if(demo.classList.contains(className)){
        demo.classList.remove(className);
    }else{
        alert(`The class ${className} is not contained in the box, Na you add am?`);
    }
}

function toggleCustomClass(){
     let className = input4.value.trim();
    if(!className){
        alert(`You'll need to type something b4 you can toggle`);
        return;
    }
    if (classexistsincssheet(className)){
        demo.classList.toggle(className);
    }else{
        alert(`the Class ${className} does not exist, please define it first`)
    } 
}


///Events 

let clickBtn = document.getElementById('clickBtn');
let keyupinput = document.getElementById('keyupInput');
let keyupdisplay = document.getElementById('keyup-display');
let mouseArea = document.getElementById('mouseArea');
let EventLog = document.getElementById('events-log');

clickBtn.addEventListener('click', function(){
    EventLog.textContent= `Click Event`;
    EventLog.classList.add('success');
})

keyupinput.addEventListener('keyup', function(){
    keyupdisplay.textContent = keyupinput.value.toUpperCase();
    EventLog.textContent = `Typing Event 😁`;
    EventLog.classList.add('success');
})

mouseArea.addEventListener('mouseover', function(){
    EventLog.textContent = `Mouse over Event`;
    EventLog.classList.add('success');
})

let form = document.getElementById('interactive-form');
let formoutput = document.getElementById('form-output');

form.addEventListener('submit', function(Event){
    Event.preventDefault();
    let Names = document.getElementById('form-name');
let formail = document.getElementById('form-email');
let formessage = document.getElementById('form-message');

    if(Names.value && formail.value && formessage.value){
        formoutput.innerHTML = `<strong>Name</strong>: ${Names.value} <br>
<strong>Email</strong>: ${formail.value} <br>
<strong>Message</strong>: ${formessage.value} <br>`;
        formoutput.classList.add('success');
        formoutput.classList.remove('error');
        }
        setTimeout(() => {
            formoutput.innerHTML = 'thanks'+' '+ Names.value.toUpperCase()+' '+'for reaching out' ;
            form.reset();
        }, 1000);
})


/// final Quiz

const quizData = [
    {
        question: "What does 'var' stand for in JavaScript?",
        options: ["Variable", "Variant", "Variety", "Vary"],
        answer: "Variable"
    },
    {
        question: "Which company developed JavaScript?",
        options: [ "Microsoft", "Google","Netscape" ,"Apple"],
        answer: "Netscape"
    },
    {
        question: "What symbol is used to denote comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["pop()", "shift()","push()", "unshift()"],
        answer: "push()"
    },
    {
        question: "What is the output of 'typeof NaN' in JavaScript?",
        options: ["number", "string", "object", "undefined"],
        answer: "number"
    },
    {
    question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Method", "Digital Ordinance Model", "Desktop Oriented Module"],
      answer: "Document Object Model"
    },
    {
      question: "Which method is used to select an element by ID?",
      options: ["querySelector", "getElementById", "getElementsByClassName", "getElement"],
      answer: "getElementById"
    },
    {
      question: "Which keyword declares a block-scoped variable?",
      options: ["var", "let", "const", "define"],
      answer: "let"
    }
];
let currentQuestionIndex = 0;
let score = 0;

let quizprogress = document.getElementById('quiz-progress');
let quizQuestion = document.getElementById('question-text');
let optionsContainer = document.getElementById('options-container');
let startBtn = document.getElementById('start-quiz');
let nextBtn = document.getElementById('next-question');
let FinishBtn = document.getElementById('finish-quiz');
let resultDisplay = document.getElementById('quiz-results');

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    startBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    FinishBtn.style.display='none'
    showQuestion();
    updateProgress();
}

function showQuestion(){
    let Q = quizData[currentQuestionIndex];
    quizQuestion.textContent = Q.question;
    optionsContainer.innerHTML = '';
    Q.options.forEach(option =>{
        let button = document.createElement('button');
        button.textContent = option;
        button.style.display = 'block';
        button.style.margin = '10px 0';
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected){
    let correct = quizData[currentQuestionIndex].answer;
    if (selected === correct){
        score++;
    }

    if (currentQuestionIndex< quizData.length - 1){
        nextBtn.style.display= 'inline-block';
        FinishBtn.style.display = 'none'
    }else{
       nextBtn.style.display ='none';
       FinishBtn.style.display = 'inline-block';
    }
}

function nextQuestion(){
    if (currentQuestionIndex<quizData.length-1){
        currentQuestionIndex++;
        showQuestion();
        updateProgress();
        nextBtn.style.display ='none';
    }
}

function finishQuiz(){
    quizQuestion.textContent =`Quiz Completed!!!`
    optionsContainer.innerHTML ='';
    startBtn.style.display ='inline-block';
    nextBtn.style.display ='none';
    FinishBtn.style.display= 'none';

    resultDisplay.innerHTML = ` <p>You Scored <strong>${score}</strong> out of <strong>${quizData.length}</strong>.</p>`;
    resultDisplay.classList.add('success')
    quizprogress.style.width = '100%';
}

function updateProgress(){
    let progrees = ((currentQuestionIndex)/quizData.length)*100;
    quizprogress.style.width = progrees+'%';
}












