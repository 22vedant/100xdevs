import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import BottomWarning from '../components/BottomWarning'
import Button from '../components/Button'

const Signin = () => {
    return (
        <div className='w-full min-h-screen flex flex-wrap justify-center items-center bg-blue-200 '>
            <div className='w-80 h-dvd  rounded-xl shadow-2xl bg-white'>
                <Heading label={"PayTM"} />
                <SubHeading label={"Sign In"} />
                <div>
                    <SubHeading label={'Enter details to sign-in'}></SubHeading>
                    <InputBox type={"email"} placeholder={"Please enter your email address"} />
                    <InputBox type={"password"} placeholder={"Please enter your password"} />
                    <Button label={"Sign In"} />

                    <BottomWarning label={"Don't have an account yet?"} spanText={'Sign Up'} to={'/signup'} />
                </div>
            </div>
        </div>
    )
}

export default Signin