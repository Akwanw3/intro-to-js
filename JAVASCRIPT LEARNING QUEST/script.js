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
 