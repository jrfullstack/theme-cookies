import { useEffect, useState } from 'react';
import type { AppContext, AppProps } from 'next/app';

import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme, lightTheme, customTheme } from '@/themes';
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme }: Props) {

  // console.log({theme})  

  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  
  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';
    const selectedTheme = cookieTheme === 'light'
      ? lightTheme
      : (cookieTheme === 'dark')
        ? darkTheme
        : customTheme;
    setCurrentTheme(selectedTheme);
  }, [])
  


  return (
      <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
  );
}