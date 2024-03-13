import React from 'react'

function Profile() {
    return (
        <div style=
            {
                {
                    // backgroundColor: "red",
                    width: "300px",
                    height: "400px",
                    border: "1px solid white",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center"
                }
            }>
            <div style=
                {
                    {
                        backgroundColor: "khaki",
                        height: "150px",
                        width: "full"
                    }
                }>

                <img src="" alt="" />
            </div>
            <div style=
                {
                    {
                        backgroundColor: "powderblue",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }
                }>
                details
            </div>
            <div style={
                {
                    backgroundColor: "red",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }

            }>
                <span>80K</span>
                <span>803K</span>
                <span>1.4K</span>
            </div>
        </div>
    )
}

export default Profile