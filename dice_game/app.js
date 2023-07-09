
var randomNumber1 = Math.floor(Math.random()*6)  + 1;
var Png1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll('img')[0].setAttribute("src", Png1);


var randomNumber2 = Math.floor(Math.random()*6)  + 1;
var Png2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll('img')[1].setAttribute("src", Png2);

if(randomNumber1 > randomNumber2){
    document.getElementById('message').textContent = "🚩 Player 1️⃣ Wins! 🚩";
}else if (randomNumber1<randomNumber2){
    document.getElementById('message').textContent = "🚩 Player 2️⃣ Wins! 🚩";
} else{
    document.getElementById('message').innerHTML 
    = "Draw! &nbsp; <img class='rock'" +
    "src='https://external-preview.redd.it/iSpSIg6Vu4paQxA77pKwfwMcOx9iRkVr8tIUVvsjsBs.png?format=pjpg&auto=webp&s=7e23a2aacc1f3e583c42080b0daa03438290eeae'>";
}

function refresh(){
    window.location.reload();
} 

