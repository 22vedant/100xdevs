import React from 'react'
import { useNavigate } from 'react-router-dom'


function Appbar() {

    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => {
                navigate('/')
            }}>Landing</button>
            <button onClick={() => {
                navigate("/dashboard")
            }}>Dashboard</button>

        </div>
    )
}

export default Appbar