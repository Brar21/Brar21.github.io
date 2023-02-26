import React from "react";
import { Button } from "@chakra-ui/react";
import {Link} from "react-scroll"
import "./fw19_0493-Varinder-Brar-Resume.pdf"

function NavLink({ to, name, onClose, ...rest }) {


    return (
       name==="Resume"?    <Button
       onClick={()=>window.open("https://drive.google.com/file/d/172btifiNmPUdJFonCULefi8coZ0sLkRi/view")}
       variant={'link'}
       cursor={'pointer'}
       minW={0}
       _hover={{ bg:"red.400" }}
       bg="red.400 "
       color='white'
       textDecoration='none'
       padding='2 5'
       target={"_blank"}
            rel="noreferrer"  
            display={{ base: 'grid', md: 'none' }}
>
             <a href={"fw19_0493-Varinder-Brar-Resume.pdf"} download={"fw19_0493-Varinder-Brar-Resume.pdf"}>RESUME</a>    
</Button>:<Link to={to} spy={true} smooth={true} offset={-60} duration={1000} onClick={onClose}>
            <Button

                size="sm"

                {...rest}
            >
                {name}
            </Button>
     
            </Link>
    );
}

export default NavLink;