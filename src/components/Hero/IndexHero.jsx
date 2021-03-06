import React, {useState} from 'react'
import Navbar from '../Navbar/IndexNav'
import Sidebar from '../Sidebar/IndexSide'
import {
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    // HeroBtn
} from './HeroElement'

const Hero = () => {
const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Healthy and Tasty Food</HeroH1>
                    <HeroP>Keep you full and healthy</HeroP>
                    {/* <HeroBtn>Order now</HeroBtn> */}
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
