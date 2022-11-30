import Head from 'next/head';
import { Box, Container, Grid, Pagination, Divider, Button } from '@mui/material';
import { DashboardLayout } from '../src/components/dashboard/dashboard-layout';
import Lecture from "../src/components/article/Lecture"


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
