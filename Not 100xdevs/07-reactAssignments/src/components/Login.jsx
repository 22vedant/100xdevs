import React, { useState } from 'react'
import Otp from './Otp'

function Login() {
    const [phnumber, setPhnumber] = useState("")
    const [isSubmitted, setIssubmitted] = useState(false)

    const onOtpSubmit = () => {
        console.log("hello");
    }
    return (
        <div>
            {
                !isSubmitted ? <form>
                    <div style={{ border: "1px solid white", padding: "20px" }}>
                        <h2>Login via OTP</h2>
                        <br />
                        <input type="text" placeholder='Enter you mobile number' value={phnumber} onChange={(e) => {
                            setPhnumber(e.target.value)

                        }} maxLength="10" />
                        <br />
                        <br />
                        <button onClick={(e) => {
                            e.preventDefault()
                            console.log("Hello");
                            setIssubmitted(true)
                        }}>Send OTP</button>
                        <div>{phnumber}</div>
                    </div>
                </form> : <div>
                    <p>Enter OTP sent to {phnumber}</p>
                    <Otp onOtpSubmit={onOtpSubmit} />
                </div>
            }
        </div>
    )
}

export default Login