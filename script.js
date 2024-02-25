'use strict'
let hiddenNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
document.querySelector('.check').addEventListener('click', function(){
const input = Number(document.querySelector('.guess').value);
if(input==0){
    document.querySelector('.message').textContent='Number should be greater than zero and it will not reduce the score';
}
else if(input===hiddenNumber){
    document.querySelector('.message').textContent='match with hidden number';
    document.querySelector('.number').textContent=hiddenNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width ='30rem';
}
else if (input>hiddenNumber){
    if(score>1){
        document.querySelector('.message').textContent="Too high";
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent="you lost the game";
        document.querySelector('.score').textContent=0;
    }
}
else if (input<hiddenNumber || input < 0){
    if(score>1){
        document.querySelector('.message').textContent="Too low";
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        document.querySelector('.message').textContent="you lost the game";
        document.querySelector('.score').textContent=0;
    }
    }
}
);
document.querySelector('.again').addEventListener('click',function(){
    hiddenNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.message').textContent="starts guessing";
    document.querySelector('.guess').value ='';
    document.querySelector('.number').textContent="?";
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width ='15rem'
});
