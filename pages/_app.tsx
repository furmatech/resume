import {createTheme, globalCss, NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

import {AppProps} from 'next/app'

const globalStyles = globalCss({
  '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap')",
  body: {
    margin: '1rem',
    padding: 0
  },
  '.text-gradient': {
    display: "inline-block",
    textGradient: "112deg, $blue300 -25%, $blue400 0%, $blue700 80%",
  },
  '.col-responsive-7, .col-responsive-5': {
    '@smMax': {
      width: '100% !important',
      margin: 0
    }
  },
  '@page': {
    size: "A4",
    margin: '12mm 5mm'
  },
  '@media print': {
    'body *': {
      visibility: "hidden"
    },
    'html, body': {
      margin: 0,
      padding: 0,
      width: "210mm",
      height: "297mm"
    },
    '::-webkit-scrollbar': {
      display: 'none'
    },
    '.printarea, .printarea *': {
      visibility: "visible"
    },
    '.printarea': {
      margin: "0 !important",
      padding: "0 !important",
    },
    '.printarea-hide, .printarea-hide *': {
      display: "none !important"
    },
    '.col-responsive-7': {
      '@smMax': {
        width: '58.3333% !important'
      }
    },
    '.col-responsive-5': {
      '@smMax': {
        width: '41.6667% !important'
      }
    }
  }
});

const theme = {
  letterSpacings: {
    tighter: "-.025rem"
  },
  fonts: {
    sans: "'Montserrat', sans-serif"
  }
}

const lightTheme = createTheme({
  type: 'light',
  theme: {
    ...theme, ...{
      colors: {
        gradient: 'linear-gradient(112deg, $blue300 -25%, $blue400 0%, $blue700 80%)',
        card: '#FAFAFA'
      }
    }
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    ...theme, ...{
      colors: {
        gradient: 'linear-gradient(112deg, $blue300 -25%, $blue400 0%, $blue700 80%)',
        card: '#000000'
      }
    }
  }
})

export default function App({Component, pageProps}: AppProps) {
  globalStyles();

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}