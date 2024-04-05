import React from 'react'

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className='p-3 my-5 w-[80%] bg-blue-400 rounded-lg shadow hover:shadow-xl'>{label}</button>
    )
}

export default Button