const value = document.getElementById("no");
const ans = document.getElementsByClassName("Answer");
let form = document.getElementsByClassName("form")[0];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let userValue = Number(value.value);
    let dice = Math.floor(Math.random() * 10) + 1;
    console.log("User:", userValue, "Dice:", dice);

    if (isNaN(userValue) || userValue < 1 || userValue > 10) {
        alert("Please enter value between 1 to 10");
        return;
    }

    if (dice === userValue) {
        ans[0].innerText = "You are win ✌";
    } else {
        ans[0].innerText = "Sorry you are not win, try again 😔";
}
});