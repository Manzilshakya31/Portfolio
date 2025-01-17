import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Herosection from "./pages/Herosection";
import Header from "./Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Skill from "./pages/Skill";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Review from "./pages/Review";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header />
    <Herosection />
    <About />
    <Service />
    <Skill />
    <Resume />
    <Portfolio />
    <Review />
    <Blog />
    <Contact />
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
