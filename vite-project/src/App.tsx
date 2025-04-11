import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from './theme/Darktheme';
import Homepage from './customer/pages/Homepage/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Homepage/>
      </ThemeProvider>
    </>
  )
}

export default App
