import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import HeadContent from './Components/HeadContent/HeadContent';
import About from './Components/About/About';
import Project from './Components/Projects/Project';
import { BrowserRouter } from 'react-router-dom'
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experiences/Experience';
import Education from './Components/Education/Education';
import Testimonial from './Components/Testimonials/Testimonial';
import Footer from './Components/Footer/Footer';
import ProgressBar from "react-scroll-progress-bar"; //Add this line

function App() {
  return (
    <BrowserRouter>
<ProgressBar  bgcolor="#08c177" />
    <div className="App">
      <Navbar />
      <HeadContent />
      <About />
      <Project />
      <Skills/>
      <Experience/>
      <Education/>
      <Testimonial/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App; 
