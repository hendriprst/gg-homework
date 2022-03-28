import './App.css';
import Playlist from './components/Playlist';
import AllSample from './assets/data/AllSample';

function App() {

  const TrackLoop = () => {
    const AllList = AllSample.map((a) => (
      <Playlist 
        images={a.album.images[1].url}
        title={a.album.name}
        artist={a.album.artists[0].name}
        albums={a.name}
      />
    ));
    return AllList;
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <TrackLoop />
        </div>
      </header>
    </div>
  );
}

export default App;
