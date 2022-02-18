import TodoItem from "./Todoitem";

function TodoDisplay(props){
    return(
        <div className="todobottom" id="todoList">
            {
                props.todos.map(todo => 
                    <TodoItem content={todo.content} time={todo.tyme} completed={todo.completed} /> 
                )
            }
        </div>
    )
}


export default TodoDisplay;