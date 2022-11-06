import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { articles } from "../../mock/imgesApi";
import Carousel from 'react-material-ui-carousel'

export default function ImageBanner() {
  return (
    // <ImageList sx={{ width: "100%", height: 450 }}>
     <Carousel animation="slide" navButtonsAlwaysVisible={true} indicators={false}>

    
      {articles.map((item) => (
        <ImageListItem key={item.id}>
          <img
            style={{height: 500}}
            src={`${item.media}?w=248&fit=crop&auto=format`}
            srcSet={`${item.media}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            // loading="lazy"
          />
          <ImageListItemBar
            sx={{height: 150}}
            title={
                <h1 className="text-2xl ">
                  {item.title}
                </h1>
            }
            subtitle={
                <h3 className='text-2xl' style={{width: 600}}>
                    {item.description}
                </h3>
            }    
          
          />
        </ImageListItem>
      ))}
       </Carousel>
    // </ImageList>
  );
}
