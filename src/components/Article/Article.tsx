import * as React from 'react';
import { useNavigate, createSearchParams} from "react-router-dom";
import {Grid, Divider, Typography, Container, Box} from "@mui/material" 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Router from 'next/router'
import Skeleton from '@mui/material/Skeleton';
import ReactPaginate from 'react-paginate';
import {articles} from "../../mock/imgesApi"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const url = "https://newsapi.org/v2/everything"

const MAX_LENGTH = 200;
function Article () {
  const [loading, setLoading] = React.useState(true)
  

 const lecture = (id) => {
  Router.push({
    pathname: '/readArticle',
    query: { id: id },
})
 }
 function loadSkeleton (){
  // setLoading(false)
  alert("Bonjour")
}
React.useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 5000);
  
}, []);
  return (
      <Container sx={{mt: 15}}>
       
        {/* <Grid container spacing={2} sx={{mt:5}}> */}
      {/* {myArticle.map((item, index)=>( */}
      {(loading ? Array.from(new Array(3)) : articles).map((item, index) => (
        
<Card onClick={() => lecture(item.id)} key={index} sx={{ display: 'flex', mb: "15px"}}>
{item ? ( 
     <CardMedia
        component="img"
        sx={{ width: "30%" }}
        image={item.media}
        alt="Live from space album cover"
      />
):(
<Skeleton variant="rectangular" width={300} height={200} />
) }
     {item ? ( 
     <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {item.description}
          </Typography>
        </CardContent>
       
      </Box>
       ) : (
                <Box sx={{mt: 5, ml: 10}}>
                  <Skeleton />
                  <Skeleton width={700} height={20}/>
                  <Skeleton width={600} />
                </Box>
              )}
      
    </Card>

     
      ))} 
      
    </Container>
  );
}
export default Article
