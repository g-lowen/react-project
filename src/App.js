import "./App.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import Player from "./Views/Player";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Player />
      </header>
      <Footer />
    </div>
  );
}

export default App;
