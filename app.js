let to_do1=document.getElementById("to_do1");
let confirm1=document.getElementById("confirm1");
let h1=document.getElementById("h1");
let task_list=document.getElementById("task_list");



confirm1.addEventListener("click", ()=>{
    h1.style.display="block"
    let to_do2=document.createElement("span");
    let remove1=document.createElement("button");
    to_do2.setAttribute("class", "to_do2");
    remove1.setAttribute("class", "remove1");
    to_do2.innerText=to_do1.value;
    to_do1.value=""
    remove1.innerText="X"
    task_list.append(to_do2);
    task_list.append(remove1);
    to_do2.addEventListener("click", ()=>{
        to_do2.style.textDecorationLine="line-through";
        to_do2.style.textDecorationColor="red";

    }) 
    remove1.addEventListener("click", ()=>{
        remove1.style.display="none";
        to_do2.style.display="none";
    }) 
})




