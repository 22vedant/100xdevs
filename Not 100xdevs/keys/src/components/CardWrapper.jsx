import React from 'react'

function CardWrapper({ innerComponent }) {
    return (
        <div style={{ border: "1px solid white" }}>{innerComponent}</div>
    )
}

export default CardWrapper