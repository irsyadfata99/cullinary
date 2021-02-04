import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
} from './SideElement'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
        <SidebarMenu>
            <SidebarLink to ="/">Ayam Geprek</SidebarLink>
            <SidebarLink to ="/">Tengkleng</SidebarLink>
            <SidebarLink to ="/">Full Menu</SidebarLink>
        </SidebarMenu>
        </SidebarContainer>
    )
}

export default Sidebar
