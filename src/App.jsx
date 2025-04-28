import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      {/* <Skills /> */}
    </div>
  );
}

export default App;
