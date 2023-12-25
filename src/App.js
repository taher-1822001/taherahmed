
import './App.css';
import Home from './components/home';
import About from './components/about';
import SkillsAndTools from './components/skillsAndTools';
import Education from './components/education';
import Certificates from './components/certificates';
import Achievements from './components/achievements';
import Experience from './components/experience';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
   <Home />
      <About />
      <SkillsAndTools />
      <Experience />
      <Education />
      <Certificates />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
