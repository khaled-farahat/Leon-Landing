import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const theme = {
  main: "#10cab7",
  secondary: "#2c4755",
  bg: "#f6f6f6",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Landing />
        <Features />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
