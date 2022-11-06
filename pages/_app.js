import React, {createContext} from 'react'
import './index.css'
import Head from 'next/head';
// import { CacheProvider } from '@emotion/react';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
import NavBar from '../src/Components/NavBar/NavBar'
import Footer from './footer'
 

const App = (props) => {
  const { Component, pageProps } = props;
  const [user, setUser] = React.useState("Guellord Mbiya");
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
   <>
      <Head>
        <title>
          Mbote
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>     
          <CssBaseline />
          {/* <NavBar /> */}
          {getLayout(<Component {...pageProps}/> )}
          {/* <Footer /> */}
    </> 
    ) 
};

export default App;
