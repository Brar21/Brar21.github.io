import { Routes, Route } from "react-router-dom";
import { Link } from "react-scroll";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Project from "../Pages/Porject";
import Skills from "../Pages/Skills";

export const AllRoutes = () => {

    return <>
        <Link to='/#home'></Link>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={ <About/>}></Route>
            <Route path="/skills" element={<Skills/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
}