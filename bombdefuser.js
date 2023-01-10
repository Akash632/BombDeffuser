let timerElement = document.getElementById("timer");
let defuserElement = document.getElementById("defuser");
let wrongInputElement = document.getElementById("wrongInput");
let hintElement = document.getElementById("hint");

let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerElement.textContent = countdown;
    if (countdown === 0) {
        timerElement.style.color = "#ff0000";
        timerElement.textContent = "BOOM!!!";
        clearInterval(intervalId);
    }
}, 1000)
defuserElement.addEventListener("keydown", function(event) {
    let defuserElementText = defuserElement.value;
    console.log(defuserElementText);
    if ((event.key === "Enter") && (defuserElementText === "defuse") && (countdown !== 0)) {
        timerElement.style.color = "#00ff00";
        timerElement.textContent = "You Did it!!!";
        wrongInputElement.textContent = "";
        hintElement.textContent = "";
        clearInterval(intervalId);
    } else if ((event.key === "Enter") && (defuserElementText !== "defuse") && (countdown !== 0)) {
        wrongInputElement.textContent = "Wrong key";
        hintElement.textContent = "Hint: Try to ______ the bomb"
    }
})
