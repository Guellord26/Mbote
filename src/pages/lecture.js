import Head from 'next/head';
import { Box, Container, Grid, Pagination, Divider } from '@mui/material';

import { ReaderPage } from '../components/ReaderPage/Reader-page';
import { DashboardLayout } from '../components/dashboard-layout';

const Lecture = () => (
  <>
    <Head>
      <title>
        Lecture | Mbote
      </title>
    </Head>
   <ReaderPage />
  </>
);
Lecture.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Lecture;
