const digit1 = document.getElementById("digit1");
const opretion = document.getElementById("opreton");
const digit2 = document.getElementById("digit2");
const button = document.getElementById("submit");
const ans = document.getElementById("ans");
button.addEventListener("click", () => {
    number1 = Number(digit1.value.trim())
    number2 = Number(digit2.value.trim())
    opr = opretion.value.trim();
    
    let answer = function faindans(a,) {
        if (opr == "+") {
            return number1 + number2;
        } else if (opr == "-") {
            return number1 + number2;
        } else if (opr == "-") {
            return number1 + number2;
        } else if (opr == "*") {
            return number1 * number2;
        } else if (opr == "/") {
            return number1 / number2;
        } else if (opr == "%") {
            return number1 % number2;
        } else {
            return "Not a valid oprion"
        }
    }
    
    ans.innerHTML = answer(number1 , number2)
    console.log(answer(number1 , number2))

})
