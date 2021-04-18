const hexValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const btn = document.querySelector("#btnRandom")
const bod = document.querySelector("#bod")
const bgName = document.querySelector("#bgName")
const colors = ["aqua","plum", "rebeccapurple", "cadetblue", "burlywood", "indianred", "dodgerblue", "coral", "chocolate", "navajowhite","cornflowerblue", "red","blue", "white", "crimson","gold","forestgreen","purple","cyan","lemonchiffon","yellow"]
const letters = document.querySelectorAll("#letter")

const randomLetterColors = () => {
    let colored;
    
    letters.forEach(letter => {
        let randomColor = Math.floor(Math.random() * colors.length)
        while (randomColor === colored) {
            randomColor = Math.floor(Math.random() * colors.length)
        }
        let color = colors[randomColor]
        letter.style.color = color
    })
}
const randomBackgroundColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * hexValues.length);
        color = color + hexValues[randomValue];
    }

    bod.style.background = color
    bgName.innerHTML = color
}

btn.addEventListener("click", () => {
    randomBackgroundColor()
    randomLetterColors()
})