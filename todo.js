let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    //list create
    let item = document.createElement("li");
    item.innerText = inp.value;
    //delete btn add on
    let delBtn =  document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn);
    ul.appendChild(item);//ul dke uder as a child append karna chahte
    inp.value = "";// reset to empty string
});

// let delBtns = document.querySelectorAll(".delete")
//     for ( delBtn of delBtns){
//         delBtn.addEventListener("click", function(){
//           let par = this.parentElement;
//           par.remove();
//         })
//     };

    //Bubbling method 
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") {
     let listName  =  event.target.parentElement;
     listName.remove();
     console.log("deleted!")

    }
});


// let todo = [];
// let req = prompt("Enter your request .");

// while (true) {
//     if (req == "quit") {
//         console.log("quit the app ");
//         break;
//     }
//     if (req == "list") {
//         console.log("----------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("----------");
//     }
//     else if (req == "add") {
//         let task = prompt("please enter the task you want to add:");
//         todo.push(task);
//         console.log("Task added !");
//     }
//     else if (req == "delete") {
//         let del = console.log(prompt("please enter the index of a task you want to delete:"));
//         todo.splice(del, 1);
//         console.log("Task Deleted !");
//     }
//     else{
//         console.log("wrong request!");
//     }
//     req = prompt("enter your request");
// }