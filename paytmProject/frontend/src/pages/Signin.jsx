import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { SubHeading, Heading, InputBox, Button, BottomWarning } from "../index"
const Signin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const userToken = localStorage.getItem('token')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // const splitArray = userTokenWithBearer.split(" ")
    // const userToken = splitArray[1]

    return (
        <div className='w-full min-h-screen flex flex-wrap justify-center items-center bg-blue-200 '>
            <div className='w-80 h-dvd  rounded-xl shadow-2xl bg-white'>
                <Heading label={"PayTM"} />
                <SubHeading label={"Sign In"} />
                <div>
                    <SubHeading label={'Enter details to sign-in'}></SubHeading>
                    <InputBox type={"email"} placeholder={"Please enter your email address"} onChange={(e) => {
                        setUsername(e.target.value)
                    }} />
                    <InputBox type={"password"} placeholder={"Please enter your password"} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />

                    <Button onClick={async () => {
                        const response = await axios.post('http://localhost:3000/user/signin', { username: username, password: password },
                            {
                                headers: { 'authorization': userToken },
                            })

                    }} label={"Sign In"} />

                    <BottomWarning label={"Don't have an account yet?"} spanText={'Sign Up'} to={'/signup'} />
                </div>
            </div>
        </div>
    )
}

export default Signin