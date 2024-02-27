import { useState } from 'react'
import App from '../App'

function Card(props) {
    const [todos, setTodos] = useState([])
    const for_loop = []
    const propsInterests = props.interests
    for (let i = 0; i < { propsInterests }.length; i++) {
        for_loop.push(<div>{propsInterests[i]}</div>)

    }

    return (
        <div style={{ border: "1px solid white" }}>
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>

            <h2>Interests</h2>
            {/* {
                props.interests.map((element) => {
                    return <div>
                        {element}
                    </div>
                })
            } */}
            {for_loop}
            <button>Twitter</button>
            <br />
            <button>Linkedin</button>
        </div>
    )
}

export default Card