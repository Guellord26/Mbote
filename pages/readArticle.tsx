import Head from 'next/head';
import { Box, Container, Grid, Pagination, Divider, Button } from '@mui/material';
import { DashboardLayout } from '../src/Components/Dashboard/dashboard-layout';
import Lecture from "../src/Components/Article/Lecture"


function ReadArticle(){

 return( 
  <>
    <Head>
      <title>
        Article | Mbote
      </title>
    </Head>     
        <Lecture/>   
  </>
 )
};
ReadArticle.getLayout = (page) => (
  <DashboardLayout >
    {page}
  </DashboardLayout >
);

export default ReadArticle;
