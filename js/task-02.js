const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')


function addElement(array) { 

  const newArray = []

  array.forEach(function (element) { 
    const itemEl = document.createElement('li')
    itemEl.textContent = element
    itemEl.classList.add('item')
    newArray.push(itemEl)
  })

  return ingredientsEl.append(...newArray)
  
}
addElement(ingredients)


// - - - - - - - - Второй способ решения задания   - - - - - - - -


// function addElement(array) { 

//   return array.map(function (element) { 
//     const itemEl = document.createElement('li')
//     itemEl.textContent = element
//     itemEl.classList.add('item')
//     return itemEl
//   })
  
// }
// const newArray = addElement(ingredients)
// ingredientsEl.append(...newArray)