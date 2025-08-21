import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { useLang } from "../../context/LanguageContext";

const SuccessPopup = ({ message = "تم الإرسال بنجاح", onClose }) => {
  const { t, dir, lang } = useLang();

  return (
     <>
      {/* Overlay for blur effect */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Slight dark overlay
          backdropFilter: "blur(4px)", // Apply blur effect
          zIndex: 9998, // Behind popup
        }}
        onClick={onClose} // Close on overlay click
      />
    <Box
      sx={{
        width: {
          xs: 280, // Extra small screens (mobile)
          sm: 320, // Small screens
          md: 361, // Medium screens and up
        },
        height: {
          xs: 150, // Shorter height on mobile
          sm: "auto", // Original height on larger screens
        },
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 56,
          background: " linear-gradient(90deg, #003366 0%, #001F4D 100%)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      >
        <CheckCircleRoundedIcon sx={{ color: "#fff", fontSize: 28 }} />
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 4,
            left: 4,
            color: "#fff",
            "& .css-q7mezt": {
              fill: "#fff !important",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ px: 2, py: 2, textAlign: "center" }}>
        <Typography
          sx={{
            display: "block",
            fontWeight: "bold",
            fontSize: {
              xs: "15px", // Smaller text on mobile
              sm: "18px", // Original size
            },
            color: "#000000",
            marginBottom: "8px",
          }}
        >
          {t.successMessagesgeneric}
        </Typography>
        <Typography
          sx={{
            display: "block",
            fontSize: {
              xs: "12px", // Smaller text on mobile
              sm: "14px", // Original size
            },
            color: "#333",
            wordWrap: "break-word",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default SuccessPopup;
