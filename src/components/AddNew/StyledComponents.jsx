import { styled, TableContainer, TableHead, TableRow, TextField } from "@mui/material";

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  marginBottom: theme.spacing(3),
}));

export const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#0c2f67",
  "& .MuiTableCell-head": {
    color: "white",
    fontWeight: 400,
    fontSize: "1.1rem",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const InputTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  "& .MuiTextField-root": {
    margin: theme.spacing(0.5),
    "& .MuiInputBase-input": {
      padding: theme.spacing(1),
    },
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    border: "1px solid #fff",
    background: "#f5f5f5",
    width: { xs: "100%", sm: "150px", md: "190px" },
    borderRadius: "20px",
    fontSize: "15px",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#1976d2",
        borderWidth: "1px",
      },
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "& .MuiInputBase-input": {
    fontSize: "15px",
    padding: 0,
  },
  "& .MuiFormHelperText-root": {
    marginLeft: "12px",
    marginTop: "4px",
  },
}));
