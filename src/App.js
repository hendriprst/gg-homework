import './App.css';
import data from './single-sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={data.album.images[1].url} className="App-logo" alt="" />
        <h3 className="App-title">{data.name}</h3>
        <p className="App-artist">{data.artists[0].name}</p>
        <button>Select</button>
      </header>
    </div>
  );
}

export default App;
