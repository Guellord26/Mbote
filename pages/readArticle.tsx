import Head from 'next/head';
import { DashboardLayout } from '../src/Components/Dashboard/dashboard';
import { Lecture } from "../src/Components/Article/lecture"

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
