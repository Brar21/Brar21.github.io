
import './App.css';
import Nav from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';
import Home from './Pages/Home';

import About from './Pages/About';
import Project from './Pages/Porject';

import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Github from './Pages/GithubStats';


function App() {
  return (
    <div  className="App" marginLeft="50px">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Github />
      <Project />
      <Contact />

      <AllRoutes />
     
   
    
    </div>
  );
}

export default App;
