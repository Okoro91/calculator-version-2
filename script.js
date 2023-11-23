const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

let output = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if(event.target.textContent == '='){
            output = String(eval(output));
            display.value = output;
        }else if(event.target.textContent == 'AC'){
            output = '';
            display.value = output;
        }else if(event.target.textContent == 'DEL'){
           output = output.split('')
                  .slice(0, -1)
                  .join('');

            display.value = output;
        }else if (event.target.id == 'plus-minus'){
            output = String(eval(string));
            display.value = output;
        }else {
            output += event.target.textContent;
            display.value = output;
        }
    })
})