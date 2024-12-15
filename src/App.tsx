import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rankings from "./pages/Rankings";
import Teams from "./pages/Teams";
import Schedule from "./pages/Schedule";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import FeatureDetails from "./pages/FeatureDetails";
import PlayerDetails from "./pages/PlayerDetails";
import TeamDetails from "./pages/TeamDetails";
import "./i18n";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rankings" element={<Rankings />} />
          <Route path="teams" element={<Teams />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="features/:id" element={<FeatureDetails />} />
          <Route path="player/:id" element={<PlayerDetails />} />
          <Route path="team/:id" element={<TeamDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
