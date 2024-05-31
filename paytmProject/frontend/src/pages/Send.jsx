import React from 'react'

import axios from 'axios'

import Button from '../components/Button'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import SubHeading from '../components/SubHeading'

const Send = () => {

    return (
        <div className='w-full h-screen flex flex-wrap justify-center items-center bg-blue-200 '>
            <div className='w-80 h-dvd  rounded-xl shadow-2xl bg-white'>
                <Heading label={'Send Money'} />
                <div className="flex justify-center items-center">
                    <div className=' bg-orange-400 rounded-full p-3 mx-3 h-12 w-12'>A</div>

                    <div className='font-semibold text-xl '>Friend's Name</div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className=' text-sm font-semibold '>
                        Amount:
                    </div>
                    <InputBox type={'text'} placeholder={'Enter Amount'}></InputBox>
                </div>
                <button onClick={Transfer} className='p-3 my-5 w-[80%] bg-blue-400 rounded-lg shadow hover:shadow-xl'>
                    Initiate Transfer
                </button>
            </div>
        </div>
    )
}

function Transfer() {
    const response = axios.post('http:localhost:3000/account/transfer', {
        headers: {

        }
    })
}

export default Send