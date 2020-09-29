import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './styles/index.css';
import logo from './logo.jpg';

const index = () => {
  return (
    <div className='teste'>
      <Nav className='navbar'>
        <div className='topbar-wrapper'>
          <img className='topbar-logo' src={logo} />
          <p className='title'>𝐴𝑟𝑜𝑤𝑎𝑛𝑎</p>
        </div>
        <div className='navlinks-wrapper'>
          <NavItem>
            <NavLink href='#'>Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Quem somos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>Fale conosco</NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
};

export default index;
