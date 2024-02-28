function Todo({ todos }) {
    return (
        <div>
            {
                todos.map((element) => {
                    return <div>
                        <div>{element.title}</div>
                        <div>{element.description}</div>
                        <button>{element.completed == true ? "Completed" : "Mark as Completed"}</button>
                    </div>
                })
            }
        </div>
    )
}

export default Todo
