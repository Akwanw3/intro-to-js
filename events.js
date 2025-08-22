let parent = document.getElementById('parent')
let buttons = document.querySelectorAll('button')
buttons.forEach(button =>{
    button.addEventListener('click', function(){
      console.log(this.innerText+ 'clicked!')
    });
});

parent.addEventListener('click', function(){
    console.log('Parent DIV clicked!')
})

let papa = document.getElementById('papa')
papa.addEventListener('click',function(event){
   if (event.target.tagName === 'BUTTON'){
    console.log('Delegation:'+ event.target.innerText+'clicked!')
   }
});

setTimeout(()=>{
    newbtn=document.createElement('button')
    newbtn.innerText = 'Button four';
    papa.appendChild(newbtn)
},3000);




function display(){
    let input = document.getElementById('inp');
    let para = document.getElementById('txt');
    let btn = document.getElementById('dis');
    btn.addEventListener('click', function(){
        if (input.value === ''){
            para.textContent = `Please enter something`
        }else{
            para.textContent = input.value
        }
        input.value =''
    })

    
}

display()

function counter(){
    let text = document.getElementById('air');
    let para = document.getElementById('par')
    text.addEventListener('keyup', function(){
        para.textContent = text.value;
        if(para.textContent.length>50){
            para.classList.add('red')
        }
    })
}
counter()


function password(){
    let password = document.getElementById('pass')
    let displaytxt = document.getElementById('chk')
    password.addEventListener('keyup', function(){
        if(password.value.length<5){
            displaytxt.textContent = 'Oga no de use weak password for here oo';
            displaytxt.classList.add('red');
            displaytxt.classList.remove('green')
        }else if(password.value.length>=5 && password.value.length<=8){
            displaytxt.textContent = 'put password wey make sense, this one too Weak';
            displaytxt.classList.add('yellow');
            displaytxt.classList.remove('red')
        }else if (password.value.length>8){
            displaytxt.textContent = " STRONG PASSWORD Good Boy!";
            displaytxt.classList.add('green');
            displaytxt.classList.remove('yellow')
        }
    })

}

password()
