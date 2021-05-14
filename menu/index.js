import food from './data.js'

const menu = document.querySelector('.menu')
const menuBtns = document.querySelectorAll('.menu-btns')

menuBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const option = e.target.dataset.id
        if (option === 'all') {
            return displayOnScreen(food)
        }
        const menuFiltered = food.filter(meal => {
            if (meal.type === option) {
                return meal
            }
        })
        displayOnScreen(menuFiltered)
    })
})

window.addEventListener("DOMContentLoaded", () => {
    displayOnScreen(food)
})

function displayOnScreen(food) {
    let data = food.map(meal => {
        return `<div class="card" style="width: 18rem">
        <div class="card-img-top">
          <img src="${meal.img}" alt="" class="food-img"/>
        </div>
        <div class="card-body">
          <h5 class="card-title">${meal.name}</h5>
          <p class="card-text">
            ${meal.desc}  
          </p>
          <a href="#" class="btn btn-primary form-control">Buy</a>
        </div>
        </div>`
    })

    menu.innerHTML = data.join("")
}