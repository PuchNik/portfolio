import './styles/main.css'

import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";

export default function App() {

  return (
      <div className="App">
        <Navbar />
        <Home />
        <Projects />
        <Contacts />
        <Footer />
      </div>
  )
}

