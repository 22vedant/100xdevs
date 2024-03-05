import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const focus = useRef()
    useEffect(() => {
        focus.current.focus()
    }, []);

    const handleButtonClick = () => {
        const inputElement = focus.current
        console.log(inputElement)
        inputElement.focus()
    };

    return (
        <div>
            <input ref={focus} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
