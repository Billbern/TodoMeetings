import { useState } from "react";
import "./App.css";

function App() {
  const [meetings, setMeetings] = useState([]);

  return (
    <div className="container">
      <div className="content">
        {
          meetings.length < 1 
          ?
            <h4>no meetings yet</h4>
          :
          meetings.map(item => {
            return <div>item</div>
          })
        }
      </div>
      <div className="button">
        <button>
          <svg width="32" height="32"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.364 60.364"><path fill="#fff" d="M54.454 23.18l-18.609-.002-.001-17.268a5.91 5.91 0 10-11.819 0v17.269L5.91 23.178a5.91 5.91 0 000 11.819h18.115v19.457a5.91 5.91 0 0011.82.002V34.997h18.611a5.908 5.908 0 005.908-5.907 5.906 5.906 0 00-5.91-5.91z"/></svg>
        </button>
      </div>
    </div>
  );
}

export default App;
