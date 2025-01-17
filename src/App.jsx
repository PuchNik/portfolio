import './styles/main.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import MaterialsLibrary from "./pages/MaterialsLibrary .jsx";
import Profile from "./pages/Profile.jsx";
import Material from "./pages/Material.jsx";
import ScrollToTop from "./utils/scrollToTop.js";
import Support from "./pages/Support.jsx";

export default function App() {

  return (
      <div className="App">
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/archive" element={<MaterialsLibrary />}/>
                <Route path="/project/:id" element={<Material />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/support" element={<Support />} />
            </Routes>
            <Footer />
        </Router>

      </div>
  )
}

