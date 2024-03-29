import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
