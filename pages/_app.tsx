import '@/styles/globals.css'
import { darkTheme, lightTheme, customTheme } from '@/themes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
    )
}
