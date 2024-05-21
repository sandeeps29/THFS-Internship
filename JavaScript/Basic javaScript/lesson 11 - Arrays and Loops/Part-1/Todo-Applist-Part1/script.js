
const todoArray = [];
function todoList() {
  let inputElement = document.querySelector(".js-todo-input");
  todoArray.push(inputElement.value);
  console.log(todoArray);
  inputElement.value = '';
  todoDisplay();
}
   
 function todoDisplay(){
  let todoListHTML = '';
  for (let i = 0; i < todoArray.length; i++) {
       let value = todoArray[i];
      const html = `<p>${value}</p>`
      todoListHTML += html ; 
     }
     document.querySelector('.js-todo-display').innerHTML = 
     todoListHTML;
 }


