import { useEffect, useState } from "react";

function Todo({ id }) {
    const [todos, setTodos] = useState({});
    //   const todoPull = () => {
    //     fetch("https://sum-server.100xdevs.com/todos")
    //       .then((res) => {
    //         res.json();
    //       })
    //       //   .then((res) => {
    //       //     setTodos(
    //       //       todos.map((element) => {
    //       //         return <div>{element}</div>;
    //       //       }),
    //       //     );
    //       //   });
    //       .then((res) => {
    //         return console.log(res);
    //       });
    //   };
    useEffect(() => {

        fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
            .then((res) => res.json())
            .then((res) => setTodos(res.todo));
    }, [id]);
    return (
        <>
            <div>{todos.title}</div>
            <div>{todos.description}</div>
        </>
    );
}

export default Todo;
