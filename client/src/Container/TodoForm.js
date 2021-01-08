import React, { useState } from 'react'

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    const submitForm = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }

    return (
        <>

            <form action="" onClick={submitForm}>
                <input onChange={handleChange} type="text" placeholder="Add a Todo" value={input} name="text" className="todo_inupt" />
                <button className="todo_button">Add Todo</button>
            </form>

        </>
    )
}

export default TodoForm