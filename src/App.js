import './App.css';
import Playlist from './components/Playlist';
import AllSample from './assets/data/AllSample';
import GetPlaylist from './components/GetPlaylist';

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <GetPlaylist />
          <TrackLoop />
        </div>
      </header>
    </div>
  );
}

export default App;
