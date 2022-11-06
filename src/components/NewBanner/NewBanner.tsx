import React, { useState, createContext } from "react";
import { Container, Grid, Box, BoxProps } from "@mui/material";
import { articles } from "../../mock/imgesApi";
import { useRouter } from "next/router";
import Carousel from 'react-material-ui-carousel'
import { loadComponents } from "next/dist/server/load-components";
import ImageBanner from "./ImageBanner"
import Image from 'next/image'


const images = [
  {media: '/images/wb_section_01.png'},
  {media: '/images/wb_section_02.png'},
  {media: '/images/wb_slide_02.png'},
  {media: '/images/wb_slide_03.png'},
  {media: '/images/wb_slide_04.png'}
 ] 

 

 

const NewBanner = () => {
  
  const [loading, setLoading] = React.useState(true);
 

  const [myArticle, setMyArticle] = React.useState([]);
  const router = useRouter();

  function loadSkeleton() {
    setLoading(false);
  }
  React.useEffect(() => {
    const timer = setTimeout(() => loadSkeleton, 3000);
  }, []);
  
 const lecture = (id) => {
    router.push({
      pathname: '/readArticle',
      query: { id: id },
  })
   }
  return (
    
    <div style={{ width: '100%' }}>
   <Grid container spacing={1} sx={{mt: 7}}>
      <Grid item xs={6} md={8}>
      <ImageBanner />
      {/* <Carousel animation="slide" navButtonsAlwaysVisible={true} indicators={false}>
            {images.map((img, index)=>(
                  <div key={index} className = "head-text">
                  <Image           
                    src={img.media}
                    alt="Picture of the author"
                    width="100%" height="40%" layout="responsive" objectFit="cover"
                  />
                   <div className='text-on-image'>
                      <h3> Welcome to my Blog </h3>
                      <p> FREEEEDOM </p>
                    </div>
                  </div>
               ))  
            }
        </Carousel>  */}
      </Grid>
      <Grid item xs={6} md={4}>
        <div>
        {articles.map((item, index)=>(
            <Grid container spacing={1} key={index} sx={{mt:1}}>
              <Grid item xs={6} md={4}>
              <Image           
                    src={item.media}
                    alt="Picture of the author"
                    width="40%" height="30%" layout="responsive" objectFit="cover"
                  />
              </Grid>
              <Grid item xs={6} md={8}>
              <h4 className="text-base">
                  {item.title}
                </h4>
              </Grid>
            </Grid>

        ))}    
        </div>
      </Grid>
   </Grid>
   </div>
 
);
}
export default NewBanner;