import React from 'react'
import { Link } from 'react-router-dom'
const BottomWarning = ({ label, spanText, to }) => {
    return (
        <div className='py-2 text-sm flex justify-center items-center'>
            <div>
                {label}
            </div>
            <Link className='underline pl-1 cursor-pointer' to={to} >
                {spanText}
            </Link>
        </div>
    )
}

export default BottomWarning