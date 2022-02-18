export default function TodoItem(props) {
    return (
        <div class="todoItem">
            <div>
                <input type="checkbox" name="todocheck" id="" />
            </div>
            <div>
                <p>{props.content}</p>
            </div>
            <div>
                <p>{props.time}</p>
            </div>
            <div>
                <button id="delbtn">del</button>
            </div>
        </div>
    )
}