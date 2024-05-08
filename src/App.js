import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Herosection from "./pages/Herosection";
import About from "./pages/About";
import Service from "./pages/Service";
import Skill from "./pages/Skill";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Review from "./pages/Review";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App container">
      <Header />
      <Herosection />
      <About />
      <Service />
      <Skill />
      <Resume />
      <Portfolio />
      <Review />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
