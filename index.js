//counting in js
let heading = document.querySelector('h1')
let counter = 0
let btnCount = document.getElementById('btn1')
let btnUncount = document.getElementById('btn2')
let btnReset = document.getElementById('reset')
function count(){counter += 1;heading.innerHTML = counter;}
function decrement (){counter--;heading.innerHTML = counter;}
function reset(){counter = 0;heading.innerHTML = counter;}

btnCount.addEventListener('click',count)
btnUncount.addEventListener('click',decrement)
btnReset.addEventListener('click',reset)




//todolist in js
const list = document.querySelector("ul");
const todoTable = [];
let item = 0;
//fonction qui gere la creation des lists items
function todolister(){
          //recuperation de l'entre
          todoTable.push(document.querySelector('input').value)
          //creation de list item
          const li = document.createElement('li');
          //creation de checkbox 
          
          const checkbox = document.createElement('input')
          checkbox.setAttribute("type", "checkbox")
          const text = document.createTextNode(todoTable[item])
          const label = document.createElement('label')
          label.appendChild(text)
          li.insertBefore(checkbox,li.children[0])
          li.insertBefore(label, li.children[1])
          //insertion dans list
          list.insertBefore(li,list.lastChild);
          item++;
}
function todolisterForKey(key){
    //On s'assure que l'utilisateur appuie sur la touche entree
    if(key === "Enter"){
            //recuperation de l'entre
        todoTable.push(document.querySelector('input').value)
        //creation de list item
        const li = document.createElement('li');
        //creation de checkbox 
        
        const checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        const text = document.createTextNode(todoTable[item])
        const label = document.createElement('label')
        label.appendChild(text)
        li.insertBefore(checkbox,li.children[0])
        li.insertBefore(label, li.children[1])
        //insertion dans list
        list.insertBefore(li,list.lastChild);
        item++;
    }
}

document.querySelector("input").addEventListener("keypress",function(e){
    todolisterForKey(e.key)
})


