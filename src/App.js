
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import './App.css';

function App() {
  const stays = JSON.parse(localStorage.getItem('stays'));
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row gx-5">
          <div className="col">
          <div className="p-3 text-start"><h5> Stays in Finland </h5></div>
          </div>
          <div className="col">
            <div className="p-3 text-end"><small><i> {stays.length} stays </i>  </small></div>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
