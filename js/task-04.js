let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]')

const incrementEl = document.querySelector('[data-action="increment"]')

const valueEl = document.querySelector('#value')



decrementEl.addEventListener('click', decrease)
incrementEl.addEventListener('click',  increase)


function increase() { 
  counterValue += 1
  valueEl.textContent = counterValue
}

function decrease() { 
  counterValue -= 1
  valueEl.textContent = counterValue
}