import { Routes, Route, Link } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Porject from "../Pages/Porject";
import Skills from "../Pages/Skills";

export const AllRoutes = () => {
    
    return <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/" element={ <About/>}></Route>
            <Route path="/" element={<Skills/>}></Route>
            <Route path="/" element={<Porject/>}></Route>
            <Route path="/" element={<Contact/>}></Route>
    </Routes>
    </>
}