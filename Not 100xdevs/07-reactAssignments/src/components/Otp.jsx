import { useState, useRef } from "react"

function Otp(onOtpSubmit = () => { }) {
    const myRef = useRef([])
    const [otp, setOtp] = useState(new Array(4).fill(""))

    console.log(myRef);

    const otpGen = () => {
        let str = "0123456789"
        let otp = ""
        for (let i = 0; i < 4; i++) {
            let char = Math.floor
                (Math.random() * str.length + 1)
            otp += str.charAt(char)
        }
        console.log(otp)
    }

    // const onOtpSubmit = () => {
    //     console.log("hello");
    // }

    const handleChange = () => {

    }

    const handleClick = () => {

    }

    const keyDownHandle = () => {

    }
    return (
        <div>
            {/* <input key={1} type="text" maxLength={1} onClick={handleClick} onKeyDown={keyDownHandle} className="otpInput" />

            <input key={2} type="text" maxLength={1} onClick={handleClick} onKeyDown={keyDownHandle} className="otpInput" />

            <input key={3} type="text" maxLength={1} onClick={handleClick} onKeyDown={keyDownHandle} className="otpInput" />

            <input key={4} type="text" maxLength={1} onClick={handleClick} onKeyDown={keyDownHandle} className="otpInput" /> */}
            {
                otp.map((value, index) => {
                    return (
                        <input
                            className="otpInput"
                            key={index}
                            type="text"
                            ref={(input) => (myRef.current[index] = input)}
                            value={value}
                            onChange={(e) => {
                                handleChange
                            }} />
                    )
                })
            }

        </div>

    )
}

export default Otp