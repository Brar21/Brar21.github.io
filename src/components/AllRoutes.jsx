import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Porject from "../Pages/Porject";
import Skills from "../Pages/Skills";

export const AllRoutes = () => {
    
    return <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={ <About/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/project" element={<Porject/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
}