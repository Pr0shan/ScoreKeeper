const p1Button=document.querySelector('#p1button')
const p2Button=document.querySelector('#p2button')
const reset=document.querySelector('#reset')
const winningscoreSelect=document.querySelector('#winningscore')
let winningscore=3
winningscoreSelect.addEventListener('change',function(){
    winningscore=parseInt(this.value);
    resetscore()
})

const resetscore=function(){
    p1score=p2score=0;
    p1.style.color='black'
    p2.style.color='black'
    p1.innerText=0;
    p2.innerText=0;
}

const p1=document.querySelector('#p1')
const p2=document.querySelector('#p2')

let p1score=0;
let p2score=0;
p1Button.addEventListener('click', function(){
    p1score++;
    p1.textContent=p1score;
    if(p1score===winningscore){
        p1.style.color='green'
        p2.style.color='red'
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
})
p2Button.addEventListener('click',function(){
    p2score++;
    p2.textContent=p2score;
    if(p2score===winningscore){
        p1.style.color='red'
        p2.style.color='green'
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
})
reset.addEventListener('click',function(){
    resetscore()
    p1Button.disabled=false;
    p2Button.disabled=false;
})