import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [formshow, setFormShow] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [formvalues, setFormValues] = useState({person: "", time: "", link: ""});

  async function getData() {
    const respData = await axios.get('http://localhost:8186/')
    setMeetings(respData.data)
  }

  useEffect(async () => {
     await getData();
  }, [])

  function onFormSubmit(e){
    e.preventDefault();
    const formData = { person : formvalues.person, time: formvalues.time, link: formvalues.link, completed: false }
    axios.post('http://localhost:8186/', formData).then(res => {
      setFormValues({person: "", time: "", link: ""})
      console.log(res)
    })
    setFormShow(false)
  }

  function onValuesChange(e){
    if(e.target.name == "person"){
      setFormValues({person: e.target.value,  time: formvalues.time, link: formvalues.link})
    }else if(e.target.name == "time"){
      setFormValues({person: formvalues.person, time: e.target.value, link: formvalues.link})
    }else if(e.target.name == "link"){
      setFormValues({person: formvalues.person, time: formvalues.time, link: e.target.value})
    }
  }

  function onButtonClick(){
    setFormShow(true)
  }

  return (
    <div className="container">
      <div className="content">
        {
          meetings.length < 1 
          ?
            <h4>no meetings yet</h4>
          :
          meetings.map(item => {
            return <div className="meeting-item">
              <span>{item.completed ? <input type="checkbox" checked/> : <input type="checkbox" />}</span>
              <span className="meeting-img">
                <img src={item.link} alt=""/>
                </span>
              <span>{item.person}</span>
              <span>{item.time}</span>
              
            </div>
          })
        }
      </div>
      <div className="button">
        <button onClick={ onButtonClick }>
          <svg width="32" height="32"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.364 60.364"><path fill="#fff" d="M54.454 23.18l-18.609-.002-.001-17.268a5.91 5.91 0 10-11.819 0v17.269L5.91 23.178a5.91 5.91 0 000 11.819h18.115v19.457a5.91 5.91 0 0011.82.002V34.997h18.611a5.908 5.908 0 005.908-5.907 5.906 5.906 0 00-5.91-5.91z"/></svg>
        </button>
      </div>
      {
        formshow ?

      <div className="meeting-form">
        <form onSubmit={ e => onFormSubmit(e)}>
          <input name="person" type="text" placeholder="name of person" value={formvalues.person} onChange={ e => onValuesChange(e) } />
          <input name="time" type="time" value={formvalues.time} onChange={ e => onValuesChange(e) } />
          <input name="link" type="text" placeholder="link to image" value={formvalues.link} onChange={ e => onValuesChange(e) } />
          <input type="submit" value="Add" />
        </form>
      </div>

      : ''

      }
      
    </div>
  );
}

export default App;
