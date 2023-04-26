var randomNumPlayer1 = Math.random()*6+1
randomNumPlayer1 = Math.floor(randomNumPlayer1)
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumPlayer1}.png`) 

var randomNumPlayer2 = Math.random()*6+1
randomNumPlayer2 = Math.floor(randomNumPlayer2)
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumPlayer2}.png`)

if (randomNumPlayer1>randomNumPlayer2){
    document.querySelector("h1").innerHTML = "Player 1 win!"   
}
else if (randomNumPlayer1<randomNumPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 win!" 
}

else{
    document.querySelector("h1").innerHTML = "Draw!" 
}