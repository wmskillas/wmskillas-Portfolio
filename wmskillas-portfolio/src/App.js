import "./App.css";
import NavbarEl from "./components/NavbarEl";
import NavbarEl2 from "./components/NavbarEl2";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import TravelNanny from "./components/TravelNanny";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function AppContent() {
  const location = useLocation();
  const isOnTravelNanny =
    location.pathname === "/wmskillas-Portfolio/TravelNanny";

  return (
    <div className="bodybg text-white">
      {isOnTravelNanny ? <NavbarEl2 /> : <NavbarEl />}
      <Routes>
        <Route
          path="/wmskillas-Portfolio"
          element={
            <main className="">
              <Projects />
              <About />
              <Contact />
            </main>
          }
        />
        <Route
          path="/wmskillas-Portfolio/TravelNanny"
          element={
            <main className="bodybg text-white">
              <TravelNanny />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
