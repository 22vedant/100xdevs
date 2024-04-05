import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
const Balance = () => {
    const [value, setValue] = useState('')
    useEffect(async () => {
        const response = await axios.post('http://localhost:3000/account/')
        setValue(response.data.balance)
    }, [])
    return (
        <div className="flex my-3 p-1">
            <div className="font-semibold text-lg">
                Balance:
            </div>
            <div className="font-semibold ml-4 text-lg">
                &#8377; {value}
            </div>
        </div>
    )
}

export default Balance