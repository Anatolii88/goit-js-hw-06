let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]')
console.log(decrementEl)

const incrementEl = document.querySelector('[data-action="increment"]')
console.log(incrementEl)

const valueEl = document.querySelector('#value')
console.log(valueEl)

decrementEl.addEventListener('click', () => { 
  counterValue -= 1
  valueEl.textContent = counterValue
  console.log(counterValue)
})
incrementEl.addEventListener('click', () => { 
  counterValue += 1
  valueEl.textContent = counterValue
  console.log(counterValue)
})