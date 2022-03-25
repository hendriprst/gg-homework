import './App.css';
import Song from './components/Song';
import data from './assets/data/single-sample';

function App() {
  const {images, title, artist, albums} = data;

  return (
    <div className="App">
      <header className="App-header">
        <Song data={data} />
      </header>
    </div>
  );
}

export default App;
