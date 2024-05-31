import { useState } from "react"
import Button from "./Button";
import axios from 'axios'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export const Users = () => {

    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:3000/user/bulk?filter=${query}`)
            .then((response) => {
                setUsers(response.data.user)
                // console.log(response.data);
            })

    }, [query])
    //add debouncing 

    return (
        <div>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input onChange={(e) => {
                    setQuery(e.target.value)
                }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div>
                {users.map(user => <User user={user} />)}
                {/* {users} */}
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate()

    return <div className="flex justify-between p-3">
        <div className="flex justify-center items-center">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName} {user._id}
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <button onClick={(e) => {
                console.log(user._id);
                navigate(`/send?id=${user._id}&firstName=${user.firstName}&lastName=${user.lastName}`)
                // navigate("/send")
            }} className=" bg-blue-200  p-2 rounded-lg hover:shadow-lg hover:bg-blue-300">
                Send Money
            </button>
        </div>
    </div >
}