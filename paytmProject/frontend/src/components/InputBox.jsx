import React from 'react'

const InputBox = ({ type, placeholder, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} className='my-2 border p-3 w-[80%] rounded-lg' onChange={onChange} />
    )
}

export default InputBox