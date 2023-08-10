import Intro from "./components/Intro"
import NavBar from "./components/NavBar"
import "./global.scss";

function App() {

  return (
    <div className="main-container">
      <div className="first-section">
        <NavBar />
        <Intro />
      </div>
    </div>
  )
}

export default App
