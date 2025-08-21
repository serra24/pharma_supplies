import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import MobileDrawer from "./../components/MobileDrawer/MobileDrawer";

import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useLang } from "../context/LanguageContext";
import { useEffect } from "react";

const MainLayout = () => {
  const { lang } = useLang();
  const isLargeScreen = useMediaQuery("(min-width:1024px)");
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
  });
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const html = document.documentElement;
    const isRTL = lang === "ar";

    html.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Optional: force font-family if needed (usually handled by your global CSS)
    html.style.fontFamily = isRTL
      ? '"Almarai", sans-serif'
      : '"Montserrat", sans-serif';
  }, [lang]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          minHeight: "100vh",
        }}
      >
        {isLargeScreen ? <Sidebar /> : <MobileDrawer />}

        <Box
          sx={{
            flex: 1,
            padding: { xs: "0px", md: "20px" },
            marginTop: { xs: "40px", md: 0 },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainLayout;
