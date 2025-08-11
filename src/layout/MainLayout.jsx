import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { useLang } from '../context/LanguageContext';
import { useState } from 'react';
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MainLayout = () => {
  const { t, dir } = useLang();
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {isLargeScreen ? (
        // Show sidebar normally
        <Sidebar />
      ) : (
        <>
          {/* Toggle button for small screens */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            style={{
              position: 'fixed',
              top: 10,
              [dir === 'rtl' ? 'right' : 'left']: 10,
              zIndex: 2000
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer for mobile */}
          <Drawer
            anchor={dir === 'rtl' ? 'right' : 'left'}
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Sidebar />
          </Drawer>
        </>
      )}

      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
