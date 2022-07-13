import { createTheme } from "@mui/material";

const  darkBlue = "#3A5BA0";
const lightBlue="#92B4EC"
const darkYellow = "#FFCC1D";
const lightgray="#F1EEE9"


export default createTheme({
  palette: {
    common: {
      darkblue: `${darkBlue}`,
      lightblue: `${lightBlue}`,
      darkyellow:`${darkYellow}`,
    },
    primary: {
      main: `${darkBlue}`,
    },
    secondary: {
      main: `${darkYellow}`,
    },
  },
  typography: {
    fontWeight: 700,
    fontFamily:"sans-serif",
    fontSize: 14,
    },
});