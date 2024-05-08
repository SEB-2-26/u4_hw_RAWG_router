import "./styles/App.css";
import.meta.env.VITE_RAWG_KEY;
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import GameDetails from "./pages/GameDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import ViewGames from "./pages/ViewGames";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gamedetails" element={<GameDetails />} />
          <Route path="/viewgames" element={<ViewGames />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
