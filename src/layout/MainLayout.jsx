import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import MobileDrawer from "./../components/MobileDrawer/MobileDrawer";

import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useLang } from '../context/LanguageContext';
import { useEffect } from 'react';

const MainLayout = () => {
  const { dir,lang } = useLang();
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
 const theme = createTheme({
    typography: {
      fontFamily: 'inherit', 
    },
  });
const isSmallScreen = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const html = document.documentElement;
    const isRTL = lang === 'ar';
 
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Optional: force font-family if needed (usually handled by your global CSS)
    html.style.fontFamily = isRTL ? '"Almarai", sans-serif' : '"Montserrat", sans-serif';
  }, [lang]);
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {isLargeScreen ? (
        <Sidebar />
      ) : (
        <MobileDrawer />
      )}

      <main style={{ 
        flex: 1, 
       padding: isSmallScreen ? '0px' : '20px', 
    marginTop: isSmallScreen ? '40px' : 0 
      }}>
        <Outlet />
      </main>
    </div>
       </ThemeProvider>
  );
};

export default MainLayout;