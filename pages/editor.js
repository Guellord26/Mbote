import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Editeur } from'../src/Components/editor/Editeur';
import { DashboardLayout } from '../src/Components/Dashboard/dashboard-layout';
import React, { useEffect } from "react";


const Editor = () => (
  <>
    <Head>
      <title>
        Editeur| Mbote
      </title>
    </Head>
   <Box
      component="main"
       sx={{
        flexGrow: 1,
        py: 8
      }}
    >
<Editeur />
    </Box>
  </>
);
Editor.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Editor;
