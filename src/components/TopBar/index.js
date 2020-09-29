import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import styles from './styles/topBar.module.css';
import logo from './logo.jpg';

const index = () => {
  return (
    <div className={styles.teste}>
      <Nav className={styles.navbar}>
        <div className={styles.topbarWrapper}>
          <img className={styles.topbarLogo} src={logo} />
          <p className={styles.title}>𝐴𝑟𝑜𝑤𝑎𝑛𝑎</p>
        </div>
        <div className={styles.navlinksWrapper}>
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
