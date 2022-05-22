import './App.css'
import Navbar from './UI/Navbar'
import Footer from './UI/Footer'
import Player from './Views/Player'
import AddPlayer from './Component/AddPlayer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddPlayer />
      <header className="App-header">
        <Player />
      </header>
      <Footer />
    </div>
  )
}

export default App
