import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import Character from "./components/Character";
import CharacterProfile from "./components/CharacterProfile";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile/:characterId" element={<CharacterProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
