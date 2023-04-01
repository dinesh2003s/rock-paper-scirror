let computerchoose;
let computermove;
let ourmove, result, tie, win, lose;
tie = win = lose = 0;

function gameStart() {

    computerchoose = Math.random();
    if (computerchoose >= 0 && computerchoose <= 1 / 3) {
        computermove = "rock";
    }
    else if (computerchoose >= 1 / 3 && computerchoose <= 2 / 3) {
        computermove = "paper";
    }
    else {
        computermove = "scissor";
    }
  
}

function gamemove(ourmove) {

    if (computermove === ourmove) {
        result = "tie";
        tie++;
    }
    else if (computermove === "rock" && ourmove === "paper") {
        result = "win";
        win++;
    }
    else if (computermove === "rock" && ourmove === "scissor") {
        result = "lose";
        lose++;
    }
    else if (computermove === "paper" && ourmove === "rock") {
        result = "lose";
        lose++;
    }
    else if (computermove === "paper" && ourmove === "scissor") {
        result = "win";
        win++;
    }
    else if (computermove === "scissor" && ourmove === "rock") {
        result = "win";
        win++;
    }
    else if (computermove === "scissor" && ourmove === "paper") {
        result = "lose";
        lose++;
    }

    if (win === 3) {
        document.getElementById("computerpick").textContent = "you won the match with " + lose + " loses.";
        document.getElementById("result").textContent = " ";
        document.getElementById("score").textContent = " ";
        win = lose = tie = 0;
    }
    else {
        document.getElementById("computerpick").textContent = "computer pick: " + computermove;
        document.getElementById("result").textContent = "match: " + result;
        document.getElementById("score").textContent = "wins:" + win + ", loses: " + lose + ", ties: " + tie;
    }
}
