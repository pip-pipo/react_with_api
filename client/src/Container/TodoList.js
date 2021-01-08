import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'
const TodoList = () => {
    const [todos,setTodos]= useState(['']);


    const AddTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo,...todos];
        setTodos(newTodos);
        console.log(...todos);
    }

    const completeTodo =()=>{
        let updateTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete  = !todo.isComplete
            }
            return todo;
        })
        setTodos(updateTodos)
    }


    return (
        <>
          <h3>What's the plan for today</h3>  
            <TodoForm onSubmit={AddTodos}/>
            <Todo todos={todos} completeTodo={completeTodo} />
        </>
    )
}

export default TodoList
