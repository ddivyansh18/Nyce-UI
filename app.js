const toogleBtn = document.querySelector('.component-list-toggle');
const componentList = document.querySelector('.component-list-container');

console.log(toogleBtn);
console.log(componentList);

toogleBtn.addEventListener('click', () => {
    componentList.classList.toggle('display-none');
})