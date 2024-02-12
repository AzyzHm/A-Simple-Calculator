screen = document.querySelector('.screen');

function add(value) {
  if (screen.innerText === '0')
    {if (value === '.'){
    screen.innerText += value;
  }
  else screen.innerText = value;}
  else  screen.innerText += value;
}

function remove() {
  if (screen.innerText.length === 1) {
    screen.innerText = '0';
  } else {
    screen.innerText = screen.innerText.slice(0, -1);
  }
}

function clear() {
    screen.innerText = '0';
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText);
    }catch (e) {
        screen.innerText = 'Error';
    }}

  let removeButton = document.querySelector('.remove');
  let clearButton = document.querySelector('.clear');
    
  removeButton.addEventListener('click', remove);
  clearButton.addEventListener('click', clear);
    
