let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById('input-btn')
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
} 

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""

        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        return render(myLeads)
        

})

function render(leads) {
    
    let listItem = ""
    for (let i = 0; i < leads.length; i++) {
        listItem +=`<li> 
        <a href="${leads[i]}" target="_blank">
        ${leads[i]}
        </a> </li>`
        //listItem +=  
        //ulEl.innerHTML = listItem


        console.log(myLeads[i])
        // ulEl.append(li)

    }
    ulEl.innerHTML = listItem
    
}




