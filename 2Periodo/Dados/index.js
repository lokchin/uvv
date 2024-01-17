//Dado 1

let randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png"
let randomImageSource = "images/" + randomDiceImage;
let img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

/* Dado 2 */

let randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png"
let randomImageSource2 = "images/" + randomDiceImage2;
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource2);

/* Vencedor */

if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🏆 Player 1 venceu!!!";
}
else if (randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "🏆 Player 2 venceu!!!";
}
else
    document.querySelector("h1").innerHTML = "♟️ Empate";