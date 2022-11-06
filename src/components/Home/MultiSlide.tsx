import React, { Component } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Divider, Typography, Container, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
// import { article } from "../../__mock__/Actions";
import Router from "next/router";
import Image from "next/image"
import Skeleton from '@mui/material/Skeleton';
import {articles} from "../../mock/imgesApi"

const url = "https://newsapi.org/v2/everything";

const MAX_LENGTH = 50;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

export default function MultiSlide() {
  const theme = useTheme();
  const [myArticle, setMyArticle] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  
  // const useStyles = makeStyles((theme) => ({
  //   divider: {
  //       // Theme Color, or use css color in quote
  //       background: theme.palette.divider,
  //   },
  // }));
  
  const lecture = (id) => {
    Router.push({
      pathname: "/readArticle",
      query: { id: id },
    });
  };
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false),5000);
    
  }, []);
  return (
    <div>
      <Container sx={{ mt: 10 }}>
      <div style={{marginTop: "10px", marginBottom: "10px",}}>
      <Divider><div style={{backgroundColor: "#212121"}}><h1 className="text-3xl font-bold" style={{ color: "#ffff00", marginLeft: 10, marginRight: 10}}>A la une</h1></div></Divider>
      </div>
        <Slider {...settings} >
        
          {(loading ? Array.from(new Array(3)) : articles).map((item, index) => (
            
            <Card onClick={() => lecture(item.id)} sx={{ maxWidth: 345, heigth: 500}} key={index} >
            <CardActionArea>
            {item ? (                   
              <Image src={item.media} alt={item.title} height="200" width="345"/>                  
             
              ) : (
                <Skeleton variant="rectangular" height={118} />
            )}
            {item ? (
              <CardContent sx={{height: 100}}>
                <Typography gutterBottom component="div">
                 {item.title}
                </Typography>
               
              </CardContent>
               ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </CardActionArea>

          </Card>
           
         ))} 
        </Slider>
        <div style={{marginTop: "10px", marginBottom: "10px"}}>
          <Divider />
        </div>
      </Container>
    </div>
  );
}
