import {useState} from 'react';

function TopBar(props) {

    const [content, setContent] = useState('');
    const [tyme, setTyme] = useState('');

    function onFormSubmit(e){
        e.preventDefault();
        props.settodo([...props.todo, {content: content, time: tyme, completed: false} ])
        setContent('')
        setTyme('')
    }

    function onContentChange(e){
        setContent(e.target.value)
    }

    function onTymeChange(e){
        setTyme(e.target.value)
    }

    return (
        <form onSubmit={(e)=> onFormSubmit(e)}>
            <div>
                <input type="text" name="todotext" id="todoText" value={content} onChange={ e => onContentChange(e) } />
            </div>
            <div>
                <input type="time" name="todotime" id="todoTime" value={tyme} onChange={e=>onTymeChange(e)} />
            </div>
            <div>
                <input id="addbtn" type="submit" value="Add"/>
            </div>
        </form>
    )
}

export default TopBar
// export { TopBar, BottomBar }