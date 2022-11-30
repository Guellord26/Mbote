import * as React from 'react';
import {Box, Grid, Container, Typography} from "@mui/material"
import { DashboardLayout } from '../src/components/dashboard/dashboard-layout';
// ======================
import {Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import { Chart } from 'react-chartjs-2';
// import { Chart as ChartJS, registerables } from 'chart.js';
// ChartJS.register(...registerables);
import { Chart as ChartJS, LineController, BarElement, LineElement, PointElement, LinearScale, CategoryScale, Title } from 'chart.js';

ChartJS.register(LineController, BarElement, LineElement, PointElement, LinearScale, CategoryScale, Title);
// ======================
import { Avatar } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';
export default function  Mbote () {

  const router = useRouter()
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20, 25, 22, 28, 40, 33, 29 ],
        label: 'Cette année',
        maxBarThickness: 10
      },
      {
        backgroundColor: '#EEEEEE',
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [11, 20, 12, 29, 30, 25, 13, 21, 22, 24, 12, 26, 27],
        label: "L'année passée",
        maxBarThickness: 10
      }
    ],
    labels: ['1 Jan', '2 Fev', '3 Mar', '4 Avr', '5 Mai', '6 Jui', '7 Juil', '8 Aou', '9 Sep', '10 Oct', '11 Nov', '12 Dec']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };
 
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
            {/* <Budget /> */}
            <Card
    sx={{ height: '100%' }}
    
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            ARTICLES PUBLIER
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            50
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
      </Box>
    </CardContent>
  </Card>
          </Grid>
          <Grid
            item
            xl={3}
            lg={4}
            sm={6}
            xs={12}
          >
            {/* <TotalCustomers /> */}
            <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL DES LECTURES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1,6k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <VisibilityIcon  />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
        Depuis le mois dernier
        </Typography>
      </Box>
    </CardContent>
  </Card>
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
            {/* <TotalProfit sx={{ height: '100%' }} /> */}
            <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            REVENU PUBLICITAIRE
          </Typography>

          <Typography
            color="textPrimary"
            variant="h4"
          >
            $23k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
          
        </Grid>
      </Grid>
      <Box  
        onClick={() => router.push('/publicite')}
        sx={{
          cursor: "pointer",
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <AddIcon color="success" />
       
        <Typography
       
          color="textSecondary"
          variant="caption"
        >
        Souscrire a une publicite
        </Typography>
      </Box>
    </CardContent>
  </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
            {/* <Card>
      <CardHeader
        
        title="Statistique des visite sur le media"
      />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
         
           <Chart type='bar' data={data} />
        </Box>
       
      </CardContent>
     
    </Card> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice /> */}
          </Grid>
        
        </Grid>
      </Container>
    </Box>
        </>
    )
}

Mbote.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
