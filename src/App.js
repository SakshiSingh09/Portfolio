import './App.scss';
import { useCallback } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadSlim } from "tsparticles-slim";
import Home from './containers/home/index.jsx';
import About from './containers/about/index.jsx';
import Skills from './containers/skills/index.jsx';
import Resume from './containers/resume/index.jsx';
import Portfolio from './containers/portfolio/index.jsx';
import Contact from './containers/contact/index.jsx';
import Navbar from './components/navBar/index.jsx';
import particles from './utils/particles.js';

function App() {
  const location = useLocation();

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
}, []);

  return (
    <div className="App">
      
      { location.pathname === '/' && <Particles id="particles" options={particles} init={particlesInit}/>}

      <Navbar />

      <div className='App__main-page-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
