var character = document.getElementById("character");
var block = document.getElementById("block");
var score = 0;

// change random backgroundColor at every score of 700 multiples 
var div = document.getElementById("game");
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
  div.style.backgroundColor= getRandomColor();
}
setInterval(changeColor,16400);

function jump(){
    if(character.classList !="animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    // get top position of the character and parse it as int value
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    setInterval(() => {
        score +=1;
        document.getElementById("score").innerHTML = score/1000;
    }, 1);
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation= "none";      
        block.style.display= "none";      
        alert("You lose...Refresh Window to Play Again");
    }
    
},10);