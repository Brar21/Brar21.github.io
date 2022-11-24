import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes/>
    </div>
  );
}

export default App;
