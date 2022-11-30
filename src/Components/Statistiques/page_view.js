import * as React from 'react';
import {Box, Grid, Container, Typography} from "@mui/material"
import { TotalCustomers } from './total-customers';
import { TotalProfit } from './total-profit';
import { TrafficByDevice } from './traffic-by-device';
import { Budget } from './budget';
import { Sales } from './sales';



export default function  PageView() {
 
    return (
      <>
       <Box
              sx={{
                // p: 1,
                textAlign: 'center'
              }}
            >
               <h1 className="text-2xl">
                NOM DU MEDIA
              </h1>
        </Box>
 <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4
      }}
    >
      <Container maxWidth={false}>
     
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          {/* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid> */}
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid>
         
        </Grid>
      </Container>
    </Box>
        </>
    )
}

