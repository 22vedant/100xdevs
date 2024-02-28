import React, { useState } from 'react'
import Todo from './Todo'

function CreateTodo() {
    // const [todos, setTodos] = useState("")
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div>
            <input type="text" placeholder='Title' id='title' onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <br />
            <br />
            <input type="text" placeholder='Description' id='desc' onChange={(e) => {
                setDescription(e.target.value)
            }} />
            <br />
            <br />
            <button id='add' onClick={() => {
                fetch('http://localhost:3200/todos', {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        completed: true
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res);
                    })

            }}>Add Todo</button>
        </div >
    )
}

export default CreateTodo