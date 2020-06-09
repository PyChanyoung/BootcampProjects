var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 === randomNumber2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 1 wins!";
}
else  {
    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 2 wins!";
}