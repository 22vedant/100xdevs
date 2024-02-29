import React, { useState } from 'react'
import Header from './Header'

function HeaderWithButton() {
    const [title, setTitle] = useState(``)
    function changeBtn() {
        setTitle(
            Math.floor(Math.random() * 100 + 1)
        )
    }
    return (
        <>
            <button onClick={changeBtn}>Click</button>
            <Header title={title} />
        </>
    )
}

export default HeaderWithButton