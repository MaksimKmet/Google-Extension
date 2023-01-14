let myLeads = [] 

let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById('input-btn')

localStorage.setItem("myName", "Maksym Kmet")
//localStorage.clear()
let name = localStorage.getItem("myName")
console.log(name)
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", () => {
    
    if(inputEl.value === "") {
        console.log("this input is empty")
    } else {
        return renderLeads()
        
    }
})

function renderLeads() {
    myLeads.push(inputEl.value)
    
    let listItem = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItem +=`<li> 
        <a href="${myLeads[i]}" target="_blank">
        ${myLeads[i]}
        </a> </li>`

        //listItem +=  
        //ulEl.innerHTML = listItem
        inputEl.value = ""


        console.log(myLeads[i])
        // ulEl.append(li)

    }
    ulEl.innerHTML = listItem
}



