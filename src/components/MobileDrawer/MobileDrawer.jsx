import { NavLink } from 'react-router-dom';
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ArticleIcon from '@mui/icons-material/Article';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLang } from '../../context/LanguageContext';
import { useState } from 'react';

const MobileDrawer = () => {
  const { t, dir } = useLang();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpen(state);
  };

  const navLinks = [
    { to: "/", icon: <HomeIcon />, text: t.home },
    { to: "/AddNew", icon: <PostAddIcon />, text: t.addFax },
    { to: "/Show", icon: <ArticleIcon />, text: t.showFax },
    { to: "/NewPass", icon: <LockIcon />, text: t.changePassword },
    { to: "/Login", icon: <LogoutIcon />, text: t.logout, className: "logout" }
  ];

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{
          position: 'fixed',
          top: 10,
          [dir === 'rtl' ? 'right' : 'left']: 10,
          zIndex: 1200,
          color: '#043A74',
          backgroundColor: 'white',
          border: '1px solid #043A74',
          '&:hover': {
            backgroundColor: '#043A74',
            color: 'white'
          }
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={dir === 'rtl' ? 'right' : 'left'}
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: '#043A74', // main color
            color: '#fff',
            direction: dir,
            
          }
        }}
      >
        <div style={{ padding: '16px' }}>
          <IconButton 
            onClick={toggleDrawer(false)} 
            sx={{ color: 'white', mb: 1 }}
          >
            <CloseIcon />
          </IconButton>
          
          <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
          
          <List>
            {navLinks.map((link, index) => (
              <NavLink 
                key={index}
                to={link.to}
                end
                className={({ isActive }) => 
                  isActive ? "active-mobile-link" : "mobile-link"
                }
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={toggleDrawer(false)}
              >
                <ListItem button sx={{ py: 1.2 }}>
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={link.text} 
                    primaryTypographyProps={{
                      sx: { textAlign: dir === 'rtl' ? 'right' : 'left' }
                    }} 
                  />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
