"use strict";

const btn = document.querySelector("#btnRandom")
const bod = document.querySelector("#bod")
const bgName = document.querySelector("#bgName")
const colors = ["red","blue", "white", "silver","gold","forestgreen","purple","cyan","gray","yellow"]

var visited;

btn.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random() * colors.length)
    while (randomColor === visited) {
        randomColor = Math.floor(Math.random() * colors.length)
    }
    visited = randomColor
    let color = colors[randomColor]
    bod.style.background = color
    bgName.innerHTML = `${color}`.replace(/^\w/, e => e.toUpperCase())
})