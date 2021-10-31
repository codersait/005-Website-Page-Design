const hamburger = document.querySelector('.hamburger')
const firstLine = document.querySelector('.first')
const secondLine = document.querySelector('.second')
const thirdLine = document.querySelector('.third')
const sidebar = document.querySelector('.sidebar')
console.log(hamburger);

hamburger.addEventListener('click', () => {
  firstLine.classList.toggle('first-line')
  secondLine.classList.toggle('second-line')
  thirdLine.classList.toggle('third-line')
  sidebar
  sidebar.classList.toggle('hide')
  sidebar.classList.toggle('translate-sidebar')
  document.body.classList.toggle('modal')
  document.body.classList.toggle('stop-scrolling')


})