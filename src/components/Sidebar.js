import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import logo from '../assets/logo (1).png';
import {FaArrowAltCircleLeft, FaHome, FaChartBar, FaTicketAlt, FaCogs, FaCrosshairs, FaBook, FaUserCircle, FaSignOutAlt, FaMapSigns, FaUser} from 'react-icons/fa';


const Header = () => {
  const [isMenuOpen, setIsMenuActive] = useState(false);
  const toggleMenu = () => {
    setIsMenuActive(!isMenuOpen);
  }
  const closeMenu = () => {
    setIsMenuActive(false);
  }

  // Collapse da sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sideBarWidth = isCollapsed ? '80px' : '270px';

  return (
    <div style={styles.headerContainer}>
      <Sidebar
        backgroundColor='#0D1117'
        collapsed={isCollapsed}
        width='270px'
        collapsedWidth='80px'
        style={{
          borderRight: '2px solid #ff6b35',
          transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out'
        }}>
        <div style={{padding: '0 24px, marginBottom: 20px'}}>
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px', margin: '10px' }} />
        </div>
        <Menu
          menuItemStyles={{button: ({ level, active }) => {
            return {
              padding:'8px 20px',
              borderRight: active ? '2px solid #ff6b35':'none',
              color: active ? '#ffffff' : '#b3b3b3',
              backgroundColor: active ? '#161b22' : 'transparent',
              '&:hover': {
                backgroundColor: '#161b22',
                color: '#ffffffff',
              },
            };
          },
          subMenuContent: () => {
            return {
              backgroundColor: '#161b22',
              };
            },
          }}>
          <MenuItem
            onClick={toggleCollapse}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FaArrowAltCircleLeft
              size={20}
              style={{
              transition:'transform 0.3s ease-in-out',
              transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
              }} 

              />
            </div>
          </MenuItem>
          <MenuItem disabled style={{ ...styles.menuTitle, margin: '15px 0 5px 0' }}>Geral</MenuItem>

          <MenuItem component={<NavLink to ='/Home'/>} icon={<FaHome/>}>Home</MenuItem>

          <SubMenu icon={<FaChartBar/>} label="Indicadores">
            <MenuItem component={<NavLink to ="/Indicadores"/>}> Movidesk </MenuItem>
            <MenuItem> Em produção </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaMapSigns/>}> Roadmap </MenuItem>
          <MenuItem icon={<FaCrosshairs/>}> Mapa Tático </MenuItem>

          <MenuItem disabled style={{ ...styles.menuTitle, margin: '15px 0 5px 0' }}>Ajuda</MenuItem>

          <MenuItem icon={<FaBook/>}> Documentação </MenuItem>

          <MenuItem disabled style={{ ...styles.menuTitle, margin: '15px 0 5px 0' }}>Configurações</MenuItem>

          <MenuItem icon={<FaUserCircle/>}> Perfil</MenuItem>
          <MenuItem icon={<FaSignOutAlt/>}> Sair </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
};

export default Header;
 /** @type {{ [key: string]: React.CSSProperties }} */
    const styles = {

      headerContainer: {
        backgroundColor: '#161b22',
      },

      // sideBarMenu: {
      //   backgroundColor: '#0d1117',
      // },

      menuTitle:{
        color:'#ff6b35',
        fontSize: '15px',
      }

    };