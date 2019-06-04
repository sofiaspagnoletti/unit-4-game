
var goal = 0;
var currentSum = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var wins = 0;
var losses = 0;

function resetGame() {
    goal = Math.floor((Math.random() * 100) + 20);
    currentSum = 0;
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
    writeGameStatus();
}

function win() {
    wins++;
    resetGame();
}

function lose() {
    losses++;
    resetGame();
}

function writeGameStatus() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#goal").text("Goal: " + goal);
    setNewSum(currentSum);
}

function setNewSum(value) {
    $("#total-sum").text("Your current sum is: " + value);
}

function reactToNewSum() {
    setNewSum(currentSum);
    if (currentSum === goal) {
        win();
    }
    else if (currentSum > goal) {
        lose();
    }
}

resetGame();

$(document).ready(function () {

    $("#start").on("click", function () {
        resetGame();
        $("#goal").text("Goal: " + goal);
    });

    $(".gem1").on("click", function () {
        currentSum = currentSum + gem1;
    });

    $(".gem2").on("click", function () {
        currentSum = currentSum + gem2;
    });

    $(".gem3").on("click", function () {
        currentSum = currentSum + gem3;
    });

    $(".gem4").on("click", function () {
        currentSum = currentSum + gem4;
    });

    $(".gem").on("click", function () {
        reactToNewSum();
    });

});