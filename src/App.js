import { useState } from "react";
import "./App.css";
import Tarea from "./components/Tarea";
import Counter from "./components/Counters";
import Button from "./components/Button";

function App() {
  const [tareas, setTareas] = useState([]);

  const addTodo = () => {
    const tituloTarea = prompt("Título de la tarea: ");
    console.log("Se agrega esta tarea: " + tituloTarea);

    const toDo = {
      id: new Date().getTime(),
      title: tituloTarea,
      checked: false,
    };

    setTareas([...tareas, toDo]);
  };

  const changeCheckedStatusToDo = (toDo) => {
    console.log("Soy el padre, necesito modificar este elemento ", toDo);

    const nuevoArray = tareas.map((item) => {
      return item.id === toDo.id ? { ...toDo, checked: !toDo.checked } : item;
    });

    setTareas(nuevoArray);
  };

  const removeToDo = (toDo) => {
    console.log("Soy el padre, necesito eliminar este elemento ", toDo);
    const nuevoArray = tareas.filter((item) => toDo.id !== item.id);
    setTareas(nuevoArray);
  };

  return (
    <div className="App">
      <div className="container center">
        <h1 className="center title">TO-DO App</h1>

        <Counter todos={tareas} />

        <Button
          className="button center"
          onClick={addTodo}
          text={"Agregar tarea"}
        />

        <ul id="todo-list" className="todo-list">
          {tareas.map((item) => (
            <Tarea
              todo={item}
              key={item.id}
              onClickCheckbox={changeCheckedStatusToDo}
              onClickRemove={removeToDo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
