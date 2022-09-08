let UserChoice = document.querySelectorAll('.img-item');
let MyChoice = document.querySelectorAll('#MyChoice');
let RandomNum = Math.floor(Math.random()*2000)%3;
let UserPoint = document.querySelector("#user-point");
let MyPoint = document.querySelector("#my-point");
let Continue = document.querySelector("#continue");
let Restart = document.querySelector("#restart");
let UserChoiceReport = document.querySelector("#user-choice-report");
let MyChoiceReport = document.querySelector("#my-choice-report");
let Default = document.querySelector("#default");
Continue.addEventListener('click',button);
function button(){
    for(let i=0; i<=UserChoice.length-1; i++){
        UserChoice[i].style.display="inline-block";
        MyChoice[i].style.display="none";
    }
    RandomNum = Math.floor(Math.random()*2000)%3;
}
// option c key in keyboard to perform continue button
document.addEventListener("keydown",(x)=>{
    if(x.key=='c' || x.key =='C'){
        button();
    }
});
UserChoice[0].addEventListener('click',GameLogic1);
function GameLogic1(){
    UserChoice[1].style.display="none";
    UserChoice[2].style.display="none";
    Continue.style.display="inline-block";
    MyChoice[RandomNum].style.display="inline-block";
    if(RandomNum==1){
        MyPoint.innerHTML=Number(MyPoint.innerHTML)+1;
    }
    else if(RandomNum==2){
        UserPoint.innerHTML=Number(UserPoint.innerHTML)+1;
    }
    MyChoiceReport.style.display="block";
    UserChoiceReport.style.display="block";
    Default.style.display="none";
    if(MyPoint.innerHTML == 5){
        document.querySelector('#announce-lose').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }
    }
    else if(UserPoint.innerHTML == 5){
        document.querySelector('#announce-win').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }
    }
}
UserChoice[1].addEventListener('click',GameLogic2);
function GameLogic2(){
    UserChoice[0].style.display="none";
    UserChoice[2].style.display="none";
    Continue.style.display="inline-block";
    MyChoice[RandomNum].style.display="inline-block";
    if(RandomNum==0){
        UserPoint.innerHTML=Number(UserPoint.innerHTML)+1;
    }
    else if(RandomNum==2){
        MyPoint.innerHTML=Number(MyPoint.innerHTML)+1;
    }
    MyChoiceReport.style.display="block";
    UserChoiceReport.style.display="block";
    Default.style.display="none";
    if(MyPoint.innerHTML == 5){
        document.querySelector('#announce-lose').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }
    }
    else if(UserPoint.innerHTML == 5){
        document.querySelector('#announce-win').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }
    }
}
UserChoice[2].addEventListener('click',GameLogic3)
function GameLogic3(){
    UserChoice[1].style.display="none";
    UserChoice[0].style.display="none";
    Continue.style.display="inline-block";
    MyChoice[RandomNum].style.display="inline-block";
    if(RandomNum==0){
        MyPoint.innerHTML=Number(MyPoint.innerHTML)+1;
    }
    else if(RandomNum==1){
        UserPoint.innerHTML=Number(UserPoint.innerHTML)+1;
    }
    MyChoiceReport.style.display="block";
    UserChoiceReport.style.display="block";
    Default.style.display="none";
    if(MyPoint.innerHTML == 5){
        document.querySelector('#announce-lose').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }

    }
    else if(UserPoint.innerHTML == 5){
        document.querySelector('#announce-win').style.display="block";
        Restart.style.display="inline-block";
        UserChoiceReport.style.display="none";
        MyChoiceReport.style.display="none";
        for(let i=0; i<=UserChoice.length-1; i++){
            UserChoice[i].style.display="none";
            MyChoice[i].style.display="none";
        }
    }
}
Restart.addEventListener('click',Refresh);
function Refresh(){
    window.location.reload();
}
