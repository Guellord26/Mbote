import * as React from 'react';
import Head from 'next/head';
import { Box, Container} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DashboardLayout } from '../src/components/dashboard/dashboard-layout';
import {publicites} from "../src/mock/PubApis"

function Publicite(){
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
 return( 
  <div className="mb-10">
    <Head>
      <title>
        Publicité| Mbote
      </title>
    </Head>
    <Container > 
    <h2 className=" tracking-tight text-gray-900 sm:text-4xl">
      <span className="text-xl font-bold block">Gérer les publicités</span>
    </h2>
    <h2 className=" tracking-tight text-gray-600 sm:text-4xl mb-4">
         <span className="text-base font-bold block text-grey">Consultez les pblicités qui peuvent passé ou pas sur votre media</span>
    </h2>
    <div className='rounded-lg bg-white p-8'>
    <div className="flex flex-row-reverse">
  
    {
      publicites.map((item, index)=>(
                 
            <div key={index} className="mr-4">
                <img src={item.media} className="space-x-4" style={{height:'300px', width: '300px'}}/>
                <h1 className=" px-2  py-0.5">{item.title}</h1>
                <h1 className=" px-2  py-0.5">{item.categorie}</h1>
                <LoadingButton
                  size="small"
                  onClick={handleClick}
                  loading={loading}
                  // loadingIndicator="Loading…"
                  variant="outlined"
                >
                  SOUSCRIRE A LA PUBICITE
                </LoadingButton>
            </div>
           
     
      ))
    }  
    </div>
    </div> 
    </Container> 
  </div>
 )
};
Publicite.getLayout = (page) => (
  <DashboardLayout >
    {page}
  </DashboardLayout >
);

export default Publicite;
