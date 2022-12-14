

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const counter = document.querySelector('#contadorTareas')
const pendientes = document.querySelector('#contadorTareasTerminadas')


const tasks = [
  { 
    id: 1, 
    task: "Tratar de conquistar el mundo", 
    state: false },

  { id: 2, 
    task: "Regar las plantas", 
    state: false },

  { id: 3, 
    task: "Estudiar con Pinky", 
    state: false },
];

console.log(tasks);


const generateTemplate = (todo) => {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <input type="checkbox" id=${todo.id} onclick="cambiarEstado(${todo.id})" ${todo.state ? "checked" : ""} />
            <span>${todo.task}</span>
            <i class="far fa-trash-alt delete" id=(${todo.id})></i>
        </li>
    `;

    
};

/* Print Para Todo's iniciales */

const printTodo = () => {
    let html = "";
    let contador = "";
    for (const task of tasks) {
      html += generateTemplate(task);
      contador++;
    }
    list.innerHTML = html;
    counter.innerHTML = contador;
    const arr = tasks.filter((task) => task.state == true);
    const conteo = arr.length;
    pendientes.innerHTML = conteo;
  };



// funcion para agregar tarea



addForm.addEventListener('submit', e => {

    e.preventDefault();
    let todo = addForm.add.value.trim ();
   

    if(todo.length){
        tasks.push({id: Date.now(), task: todo, state: false});
        todo = "";
        printTodo(tasks);
        addForm.reset();
    } else {
        alert ('Necesitas ingresar una tarea')
    }

});

console.log (tasks)





//Para borrar cada tarea: usamos el metodo delete referenciando al parent element dentro de la funcion if.




list.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        
        const index = tasks.findIndex((ele) => ele.id === tasks.id)
        tasks.splice(index,1)
    }
    
    printTodo(tasks)
});

/* Funcion para cambiar los status */

function cambiarEstado(id) {
    tasks.map((task) => {
      if (task.id == id) task.state = !task.state;
    });
  
    printTodo(tasks);
  }



document.addEventListener("DOMContentLoaded", printTodo)





