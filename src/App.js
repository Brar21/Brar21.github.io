
import './App.css';
import Nav from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';

import About from './Pages/About';
import Project from './Pages/Porject';

import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Github from './Pages/GithubStats';
import {Box} from "@chakra-ui/react"

function App() {
  return (
    <Box className='App'>
      <Nav />
      <AllRoutes />
      <About />
      <Skills />
      <Github />
      <Project />
      <Contact />
    </Box>
  );
}

export default App;
