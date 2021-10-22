// Задание №1

function toFormTextElement(teg, style, content) {
  const newElement = document.createElement(teg)
  newElement.style.color = style
  newElement.textContent = content
  return newElement
}
console.log(toFormTextElement('p', 'grey', 'lorem38'))

// Задание №2

const newTextElement = document.createElement('p')
newTextElement.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
newTextElement.style.fontSize = '36px'
newTextElement.style.fontWeight = 'bold'
const bodyElement = document.querySelector('body')
bodyElement.prepend(newTextElement)


// Задание №3

// const newSelectElement = document.createElement('select')
// const newBodyElement = document.querySelector('body')
// newBodyElement.append(newSelectElement)
// for (let i = 1960; i < 2021; i++) {
//   const optionElement = document.createElement('option')
//   newSelectElement.append(optionElement)
//   optionElement.textContent = i;
// }

// Задание №4

const newUlElement = document.createElement('ul')
const newBodyElement = document.querySelector('body')
newBodyElement.append(newUlElement)
const arr = [
  { name: "Женя", order: true },
  { name: "Кристина", order: true },
  { name: "Павел", order: false },
  { name: "Виолетта", order: false },
  { name: "Костя", order: true }];
for (let i = 0; i < arr.length; i++) {
  const newLiElement = document.createElement('li')
  newUlElement.append(newLiElement)
  if (arr[i].order) {
    newLiElement.textContent = ('Клиент' + ' ' + arr[i].name + ' ' + 'оплатил заказ')
  }
  else {
    newLiElement.textContent = ('Клиент' + ' ' + arr[i].name + ' ' + 'отменил заказ')
  }
}

