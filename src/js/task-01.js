const categoriesEl = document.querySelector('#categories')

const arrayCategories = [...categoriesEl.children]

function result(array) { 
  console.log('Number of categories:',array.length)
  array.forEach(function (item) { 
    console.log('Category:', item.firstElementChild.textContent)
    console.log('Elements:',item.lastElementChild.children.length)
  })
}
result(arrayCategories)