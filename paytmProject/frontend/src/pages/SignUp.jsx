import React, { useState } from 'react'
import { SubHeading, Heading, InputBox, Button, BottomWarning } from "../index"
import axios from "axios"

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='w-full min-h-screen flex flex-wrap justify-center items-center bg-blue-200 '>
            <div className='w-80 h-dvd  rounded-xl shadow-2xl bg-white'>
                <Heading label={"PayTM"} />
                <SubHeading label={"Sign Up"} />
                <div>
                    <SubHeading label={'Enter details to signup'}></SubHeading>
                    <InputBox type={"text"} placeholder={'First Name'} onChange={e => {
                        setFirstName(e.target.value)
                    }} />
                    <InputBox type={"text"} placeholder={'Last Name'} onChange={e => {
                        setLastName(e.target.value)
                    }} />
                    <InputBox type={"email"} placeholder={"Please enter your email address"} onChange={e => {
                        setUsername(e.target.value)
                    }} />
                    <InputBox type={"password"} placeholder={"Please enter your password"} onChange={e => {
                        setPassword(e.target.value)
                    }} />

                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/user/signup", {
                            firstName,
                            lastName,
                            username,
                            password
                        })
                        console.log(response.data);
                        localStorage.setItem('token', "Bearer " + response.data.token)
                    }} label={"Sign Up"} />
                    <BottomWarning label={"Already have an account?"} spanText={'Sign In'} to={'/signin'} />
                </div>
            </div>
        </div>
    )
}

export default SignUp