import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'


function SignUp() {
    return (
        <div className='w-full min-h-screen flex flex-wrap justify-center items-center bg-blue-200 '>
            <div className='w-80 h-dvd  rounded-xl shadow-2xl bg-white'>
                <Heading label={"PayTM"} />
                <SubHeading label={"Sign Up"} />
                <div>
                    <SubHeading label={'Enter details to signup'}></SubHeading>
                    <InputBox type={"text"} placeholder={'First Name'} />
                    <InputBox type={"text"} placeholder={'Last Name'} />
                    <InputBox type={"email"} placeholder={"Please enter your email address"} />
                    <InputBox type={"password"} placeholder={"Please enter your password"} />

                    <Button label={"Sign Up"} />
                    <BottomWarning label={"Already have an account?"} spanText={'Sign In'} to={'/signin'} />
                </div>
            </div>
        </div>
    )
}

export default SignUp