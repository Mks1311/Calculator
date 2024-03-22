let TextOnScreen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let expression = "";
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        let className = (event.target.className);
        let CurrText = event.target.innerHTML;
        let lastText = TextOnScreen.value[TextOnScreen.value.length - 1];
        if (className === "operator" && (lastText === '+' || lastText === '-' || lastText === '*' || lastText === '/' || lastText === '%')) { }
        else if (CurrText === "AC") {
            expression = "";
            TextOnScreen.value = "";
        }
        else if (CurrText === "=") {
            expression = eval(expression);
            TextOnScreen.value = expression;
            console.log(expression);
        }
        else if (CurrText === "DEL") {
            TextOnScreen.value=TextOnScreen.value.slice(0,-1);
            expression=TextOnScreen.value
        }
        else {
            expression += CurrText;
            TextOnScreen.value += CurrText;
        }
    })
})