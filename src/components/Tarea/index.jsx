import Button from "../Button";

const Tarea = ({todo, onClickCheckbox, onClickRemove}) => {
  
  const onChangeHandler = () => {
    console.log("Soy el hijo, necesito decirle a mi padre que cambie el boolean checked de este item", todo.id);
    onClickCheckbox(todo)
  } 


  const onClickHandler = () => {
    console.log("Soy el hijo, necesito decirle a mi padre que elimine este item", todo.id);
    onClickRemove(todo)
  } 



return(

<li className='todo-container'>
  <input className='todo-checkbox' type={"checkbox"} checked={todo.checked} onChange={onChangeHandler} />
  <span className='title'> {todo.title} </span>
  <Button
          className={'todo-delete'}
          onClick={onClickHandler}
          text={" X "}
          disabled={!todo.checked}
        />
</li>
)

}

export default Tarea