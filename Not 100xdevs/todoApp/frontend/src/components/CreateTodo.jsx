import React from 'react'

function CreateTodo() {
    return (
        <div>
            <input type="text" placeholder='Title' />
            <br />
            <br />
            <input type="text" placeholder='Description' />
            <br />
            <br />
            <button >Add Todo</button>
        </div>
    )
}

export default CreateTodo