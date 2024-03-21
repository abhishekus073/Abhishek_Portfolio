import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience/Experience";
import { Certifications} from "./components/Certifications"
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
     <NavBar />
      <Banner />
      <Experience />
      <Certifications/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
