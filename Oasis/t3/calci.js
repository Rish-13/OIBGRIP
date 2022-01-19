let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'ENTER') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'Clr') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}