import Head from 'next/head';
import { Box, Container, Grid, Pagination, Divider, Button } from '@mui/material';
import { PageLayout } from "../src/Components/PageLayout/PageLayout"
import Contacts from "../src/Components/Contact/Contact"


function Contact(){

 return( 
  <>
    <Head>
      <title>
        Contact | World-Business
      </title>
    </Head>
    
      <Container maxWidth={false}>      
        <Contacts />
      </Container>
  </>
 )
};
Contact.getLayout = (page) => (
  <PageLayout>
    {page}
  </PageLayout>
);

export default Contact;
