import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        {
          meetings.length < 1 ?
          <h1>
            no meetings yet
          </h1> :
          meetings.map(item => {
            return <div>item</div>
          })
        }
      </div>
      <div>
        <button>
          
        </button>
      </div>
    </div>
  );
}

export default App;
