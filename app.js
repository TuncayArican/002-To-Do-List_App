let to_do1=document.getElementById("to_do1");
let confirm1=document.getElementById("confirm1");
let h1=document.getElementById("h1");
let task_list=document.getElementById("task_list");
let to_do2=document.createElement("input");
let confirm2=document.createElement("button");

confirm1.addEventListener("click", ()=>{
    h1.style.display="block"
    let logo = document.createElement("div");
    let to_do2=document.createElement("span");
    let confirm2=document.createElement("button");
    to_do2.setAttribute("class", "to_do2");
    confirm2.setAttribute("class", "confirm2");
    to_do2.innerText=to_do1.value;
    to_do1.value=""
    confirm2.innerText="X"
    task_list.append(to_do2);
    task_list.append(confirm2);
    to_do2.addEventListener("click", ()=>{
        to_do2.style.textDecorationLine="line-through";

    }) 
    confirm2.addEventListener("click", ()=>{
        confirm2.style.display="none";
        to_do2.style.display="none";
    }) 
})




/* 
$(".plus").click(function () {
    let title = $("#title").val();
    let content = $("#content").val();

    $(".tasks").append(
        `<div class="task">
            <div class="task-title">
                <p>${title}</p>
                <button class="done-btn"></button>
            </div>
            <hr>
            <div class="task-content">
                <p>${content}</p>
                <i class="fa-solid fa-trash-can delete"></i>
            </div>
        </div>`
    )
}) */




