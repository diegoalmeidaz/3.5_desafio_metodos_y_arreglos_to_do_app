

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const counter = document.querySelector('#contadorTareas')


const tasks = [
  { id: 1, task: "Tratar de conquistar el mundo", state: false },
  { id: 2, task: "Regar las plantas", state: false },
  { id: 3, task: "Estudiar con Pinky", state: false },
];

console.log(tasks);


const generateTemplate = (todo) => {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <input class="form-check-input me-1" type="checkbox" onclick="cambiarEstado(${todo.state})" value="(${todo.id})" aria-label="...">
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
        contador ++
    }
    list.innerHTML = html;
    counter.innerHTML = contador;

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









const removeItem = (tasks, id) => {
    let newTasks = [...tasks]
    const index = newTasks.findIndex((element) => element === id)
    if(index !==-1) {
        newTasks.splice(index, 1)
        return newTasks
    }
}













list.addEventListener('click', e => {
    
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        
        const index = tasks.findIndex((ele) => ele.id === tasks.id)
        tasks.splice(index,1)
    }
    
    printTodo(tasks)
});


document.addEventListener("DOMContentLoaded", printTodo)




