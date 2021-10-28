import React, {useState} from 'react'
import { Nav, Logo, Navbar, NavItem, NavItemBtn, LogoLink, Toggle } from './Menu';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <LogoLink href="/"><Logo src='/images/logo-white.png'/></LogoLink>
            <Toggle onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Toggle>
            <Navbar isOpened={isOpen}>
                <NavItem href="">Bosh sahifa</NavItem>
                <NavItem href="">Biz haqimizda</NavItem>
                <NavItem href="">Aloqa</NavItem>
                <NavItemBtn href="">Ro'yhatdan o'tish</NavItemBtn>
            </Navbar>
        </Nav>
    );
}

export default Menu