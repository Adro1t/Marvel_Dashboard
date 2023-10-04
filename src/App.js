import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "./Layouts/Search";
import About from "./components/About";
import CharacterList from "./components/CharacterList";
import CharacterProfile from "./components/CharacterProfile";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:characterId" element={<CharacterProfile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
