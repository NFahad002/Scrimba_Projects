    //Display the count on HTML
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
}

    //Save button
// let countEl = document.getElementById("count-el")
// let count = 0
function save() {
    let countstr = count + " - "
    saveEl.textContent += countstr
    console.log(count)
}

