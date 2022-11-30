import * as React from 'react';
import { DashboardLayout } from '../src/components/dashboard/dashboard-layout';
import PageView from '../src/components/statistiques/page_view'


export default function  Mbote () {
 
    return (
      <>
       <PageView />
      </>
    )
}

Mbote.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
