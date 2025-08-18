const list_items = document.getElementsByClassName("all-lists")[0];
const input = document.getElementsByClassName("input")[0];
const button = document.getElementsByClassName("button")[0];
function addtask(){
    if(input.value === ''){
        alert('Insert Something!')
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = input.value;
        list_items.appendChild(li)

        let delbtn = document.createElement("span")
        delbtn.className = "delbtn"; 
        delbtn.innerHTML = "\u00d7"; 
        li.appendChild(delbtn)
    }
    input.value = "";
    saveData()
}
list_items.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
} , false)

function saveData(){
    localStorage.setItem("data" , list_items.innerHTML)
}
function showtasks(){
    list_items.innerHTML = localStorage.getItem("data")
}

showtasks()