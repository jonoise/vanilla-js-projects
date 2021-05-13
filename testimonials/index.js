const testimonials = [
    {
        name: "Amilkar Munoz",
        rate: 4,
        pic: "./images/avataaars.png",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque expedita laboriosam maiores praesentium veritatis assumenda consequuntur beatae a quisquam ea doloribus repudiandae officiis illum quibusdam, cum iure suscipit magnis.",
        email: "amilkar@example.com"
    },
    {
        name: "Luis Munoz",
        rate: 5,
        pic: "./images/avataaars2.png",
        body: "I'm baby etsy marfa tousled godard, sartorial 3 wolf moon 90's pop-up four loko raw denim. Sartorial pork belly narwhal vinyl. Cray copper mug williamsburg, yuccie coloring book kogi hashtag PBR&B kitsch man braid poke. Pork belly +1 helvetica skateboard live-edge, normcore kickstarter. Wolf freegan sustainable, disrupt ethical chillwave typewriter bitters glossier bespoke tousled gochujang +1",
        email: "luis@example.com"
    },
    {
        name: "Victoria Sibaja",
        rate: 2,
        pic: "./images/avataaars3.png",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque expedita laboriosam maiores praesentium veritatis assumenda consequuntur beatae a quisquam ea doloribus repudiandae officiis illum quibusdam, cum iure suscipit magnis.",
        email: "victoria@example.com"
    },
    {
        name: "Fabian Soto",
        rate: 4,
        pic: "./images/avataaars2.png",
        body: "Distillery lyft flexitarian banjo. Butcher hoodie squid coloring book hexagon hammock VHS plaid. Messenger bag biodiesel thundercats lomo, portland letterpress readymade fashion axe 3 wolf moon tumblr. Meh tofu live-edge photo booth. Scenester intelligentsia keffiyeh, tattooed messenger bag echo park food truck lyft.",
        email: "victoria@example.com"
    },
    {
        name: "Paola Muñoz",
        rate: 4,
        pic: "./images/avataaars3.png",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque expedita laboriosam maiores praesentium veritatis assumenda consequuntur beatae a quisquam ea doloribus repudiandae officiis illum quibusdam, cum iure suscipit magnis.",
        email: "paola@example.com"
    },
]

let name = document.querySelector(".name")
let pic = document.querySelector(".pic") 
let rate = document.querySelector(".rate")
let body = document.querySelector(".body")
let email = document.querySelector(".email")
const btnIzq = document.querySelector(".izq")
const btnDer = document.querySelector(".der")
let currentReview = 0;

data(currentReview)

btnIzq.addEventListener("click", () => {
    currentReview--
    if (currentReview < 0) {
        currentReview = testimonials.length - 1 
    }
    data(currentReview)
})

btnDer.addEventListener("click", () => {
    currentReview++
    if (currentReview > testimonials.length -1) {
        currentReview = 0 
    }
    data(currentReview)
})

function data(current) {
    name = document.querySelector(".name").innerHTML = testimonials[current]["name"]
    pic = document.querySelector(".pic").setAttribute("src", testimonials[current]["pic"]) 
    body = document.querySelector(".body").innerHTML = testimonials[current]["body"]
    email = document.querySelector(".email").innerHTML = testimonials[current]["email"]
}
