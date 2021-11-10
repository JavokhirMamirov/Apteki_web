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
                <NavItem to="header"  smooth={true}>Bosh sahifa</NavItem>
                <NavItem to="posible" smooth={true}>Tizim inkoniyatlari</NavItem>
                <NavItem to="program" smooth={true}>Dasturlar</NavItem>
                <NavItem to="control_app">Apteki app</NavItem>
                <NavItemBtn href="">Yuklab olish</NavItemBtn>
            </Navbar>
        </Nav>
    );
}

export default Menu