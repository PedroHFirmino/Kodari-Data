import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from '../assets/logo (1).png';


const Header = () => {
  const [isMenuOpen, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuActive(false);
  }

  return (
    <div style={styles.headerContainer}>
      <Sidebar>
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', margin: '10px' }} />
        <div>
          <h1 style={styles.menuTitle}>Geral</h1>
        </div>
        <Menu>
          <MenuItem> Home </MenuItem>
          <SubMenu label="Indicadores">
            <MenuItem> Movidesk </MenuItem>
            <MenuItem> Em produção </MenuItem>
          </SubMenu>
          <MenuItem> Roadmap </MenuItem>
          <MenuItem> Mapa Tático </MenuItem>
          <div>
            <h1 style={styles.menuTitle}>Ajuda</h1>
          </div>
          <MenuItem> Documentação </MenuItem>
          <div>
            <h1 style={styles.menuTitle}>Configurações</h1>
          </div>
          <MenuItem> Perfil</MenuItem>
          <MenuItem> Sair </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
};

export default Header;
 /** @type {{ [key: string]: React.CSSProperties }} */
    const styles = {

      headerContainer: {
        // backgroundColor: '#161b22',
      },
      menuTitle:{
        color:'black',
        fontSize: '15px',
      }

    };