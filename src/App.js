import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [meetings, setMeetings] = useState([]);
  const [formvalues, setFormValues] = useState({name: "", time: "", link: ""});

  async function getData() {
    const respData = await axios.get('http://localhost:8186/')
    console.log(respData);
    setMeetings(respData.data)
  }

  useEffect(async () => {
     await getData();
  }, [])

  function onValuesChange(e){
    if(e.target.name == "name"){
      setFormValues({...formvalues.time, ...formvalues.link, name: e.target.value})
    }else if(e.target.name == "time"){
      setFormValues({...formvalues.name, ...formvalues.link, time: e.target.value})
    }else if(e.target.name == "link"){
      setFormValues({...formvalues.name, ...formvalues.time, link: e.target.value})
    }
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
                <img src={item.image} alt=""/>
                </span>
              <span>{item.name}</span>
              <span>{item.time}</span>
              
            </div>
          })
        }
      </div>
      <div className="button">
        <button>
          <svg width="32" height="32"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.364 60.364"><path fill="#fff" d="M54.454 23.18l-18.609-.002-.001-17.268a5.91 5.91 0 10-11.819 0v17.269L5.91 23.178a5.91 5.91 0 000 11.819h18.115v19.457a5.91 5.91 0 0011.82.002V34.997h18.611a5.908 5.908 0 005.908-5.907 5.906 5.906 0 00-5.91-5.91z"/></svg>
        </button>
      </div>
      <div className="meeting-form">
        <form>
          <input name="name" type="text" placeholder="name of person" value={formvalues.name} />
          <input name="time" type="time" value={formvalues.time} />
          <input name="link" type="text" placeholder="link to image" value={formvalues.link}/>
          <input type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
}

export default App;
