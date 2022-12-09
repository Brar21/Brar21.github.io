
import './App.css';
import Nav from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';
import Home from './Pages/Home';

import About from './Pages/About';
import Project from './Pages/Porject';

import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import Github from './Pages/GithubStats';
import {Container} from "@chakra-ui/react"

function App() {
  return (
    <>
      <Nav />
    <Container maxW={'12xl'}  className="App" >
      <AllRoutes />
      <About />
      <Skills />
      <Github />
      <Project />
      <Contact />
      </Container>
    </>
  );
}

export default App;
