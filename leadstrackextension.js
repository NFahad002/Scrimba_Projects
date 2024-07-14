// function buttonEl() {
//     console.log("Button Works");
// }
// buttonEl()

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
    // console.log(myLeads);
})

function renderLeads() {
    let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + " " + "</li>"
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    // console.log(myLeads[i]);
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>
`
}
ulEl.innerHTML = listItems
}


// Another way to replace innerHTML by using createElement and append()
// const li = createElement("li")
// li.textcontent = myLeads[i]
// ulEl.append(li)



// let box = document.getElementById("box")
// box.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })