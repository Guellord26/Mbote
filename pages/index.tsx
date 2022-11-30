import * as React from 'react';
import {Box, Grid, Container, Typography} from "@mui/material"
import { TotalCustomers } from '../src/components/statistiques/total-customers';
import { TotalProfit } from '../src/components/statistiques/total-profit';
import { TrafficByDevice } from '../src/components/statistiques/traffic-by-device';
import { Budget } from '../src/components/statistiques/budget';
import { Sales } from '../src/components/statistiques/sales';
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
