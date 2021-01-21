import React from 'react'
import { Bars, Nav, NavLink, NavIcon } from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Cullinary</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
