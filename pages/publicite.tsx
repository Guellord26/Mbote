import * as React from 'react';
import Head from 'next/head';
import { Box, Container, Grid} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { DashboardLayout } from '../src/Components/Dashboard/dashboard-layout';
import {publicites} from "../src/mock/PubApis"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Publicite(){
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }
 return( 
  <div className="mb-10">
    <Head>
      <title>
        Publicité| Mbote
      </title>
    </Head>
    <Container > 
    <h2 className=" tracking-tight text-gray-900 sm:text-4xl">
      <span className="text-xl font-bold block">Gérer les publicités</span>
    </h2>
    <h2 className=" tracking-tight text-gray-600 sm:text-4xl mb-10">
         <span className="text-base font-bold block text-grey">Consultez les pblicités qui peuvent passé ou pas sur votre media</span>
    </h2>
   
    <Grid
            container
            spacing={3}
          >
    {
      publicites.map((item, index)=>(
                 
          
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
            <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.media}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.categorie}
        </Typography>
      </CardContent>
      <CardActions>
      <LoadingButton
                  size="small"
                  onClick={handleClick}
                  loading={loading}
                  // loadingIndicator="Loading…"
                  variant="outlined"
                >
                  SOUSCRIRE A LA PUBICITE
                </LoadingButton>
      </CardActions>
    </Card>
     </Grid>      
           
     
      ))
    } 
    </Grid>  
    {/* </div> */}
    {/* </div>  */}
    </Container> 
  </div>
 )
};
Publicite.getLayout = (page) => (
  <DashboardLayout >
    {page}
  </DashboardLayout >
);

export default Publicite;
