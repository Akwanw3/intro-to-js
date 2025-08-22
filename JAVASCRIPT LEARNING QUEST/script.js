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
    let nonsense = (a==="" || b==='');
   
    for (i=0; i<opp.options.length; i++){
       
        let minus = a-b;
        let times = a*b;
        let div = a/b;
        let mod = a%b;
    let ope = opp.options[i].value;
    if (ope==='add' && !nonsense){
        result.textContent = `your answer is,${sum} , 😁`;
        result.classList.add('success');
    }

}
 if (a=='' && b==''){
        result.textContent = `Oga Enter a valid number no de mumu yourself`;
        result.classList.add('error');
        result.classList.remove('success');
    }

}





//result.textContent = 100 

