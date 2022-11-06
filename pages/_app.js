import React, {createContext} from 'react'
import './index.css'
import Head from 'next/head';
import { CssBaseline } from '@mui/material';

 

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
          
    </> 
    ) 
};

export default App;
