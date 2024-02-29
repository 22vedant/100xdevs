import React from 'react'
import { useState } from 'react'

function Todo({ title, description }) {

    return (
        <>
            <h1>{title}</h1>
            <div>{description}</div>
        </>
    )
}

export default Todo