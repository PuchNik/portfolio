import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Project from "./pages/Project.jsx";

export default function App() {

  return (
      <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/project" element={<Project />}/>
                <Route path="/contacts" element={<Contacts />}/>
            </Routes>
            <Footer />
        </Router>

      </div>
  )
}

