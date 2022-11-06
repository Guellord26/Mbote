import React from "react";
import Slider from "react-slick";
import { Container, Divider, Box} from "@mui/material";
import { articles } from "../../mock/imgesApi";
import Router from "next/router";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";
import TopArticles from "./TopArticles"
import HomeArticle from "./HomeArticles"


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

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  const lecture = (id) => {
    Router.push({
      pathname: "/readArticle",
      query: { id: id },
    });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <>
    <TopArticles/>
    <Container>
     {/* <Slider {...settings} > */}
      <div className="grid gap-4 grid-cols-2">
      
      {(loading ? Array.from(new Array(2)) : articles).map((item, index) => (
        <div  onClick={() => lecture(item.id)} key={index} className="mt-20 grid gap-4 grid-cols-2 border-2 border-grey-200 w-full space-x-2">
 {item ? (                   
              <div className=" pl-2 pt-2 pb-2 ">
              <Image
                src={item.media}
                alt="Picture of the author"
                width="40%"
                height="50%"
                layout="responsive"
                objectFit="cover"
              />
            </div>                 
             
              ) : (
                <Skeleton variant="rectangular" height={300} />
            )}
           {item ? (
              <div className="pl-2 pt-2 pb-2 pr-3">
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-sm mt-5 pb-5">{item.description}</p>
              <a
                href="#"
                className="w-full pt-4 rounded-full border border-transparent md:py-4 md:px-10 md:text-lg bg-amber-400"
              >
                Lire le Magasine
              </a>
            </div>
               ) : (
                <Box sx={{ pt: 0.5, pr: 1}}>
                  <Skeleton />
                  <Skeleton width="60%" />
                  <Skeleton width="60%" />
                  <Skeleton width="60%" />
                </Box>
              )}
         
        </div>
      ))}
      
      </div>
      {/* </Slider> */}
      <Divider/>
    </Container>
    <div className="mt-5">
        <Divider/>
    </div>
    <HomeArticle />
    </>
  );
}
