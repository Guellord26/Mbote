import React from "react";
import Slider from "react-slick";
import { Container, Divider, Box} from "@mui/material";
import Router from "next/router";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";


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

const articles = [
    {
        id: 1,
        createdAt: '27/08/2022',      
        title: 'Virginie Delalande, une femme qui sait se faire entendre',
        nbVues: '2k',
        redacteur: "World business",
        categorie: "Divertissement"
      },
      {
        id: 2,
        createdAt: '27/08/2022',        
        title: 'Virginie Delalande, une femme qui sait se faire entendre',
        nbVues: '12k',
        redacteur: "World business",
        categorie: "Divertissement"
      },
      {
        id: 3,
        createdAt: '27/08/2022',       
        title: 'Virginie Delalande, une femme qui sait se faire entendre',
        nbVues: '5k',
        redacteur: "World business",
        categorie: "Divertissement"
      },
]

export default function TopArticles() {
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
    <Container>
    <h2 className="mt-5 text-md font-bold text-gray-400">
           LES TOP DES ARTICLES
        </h2>
      <div className="grid gap-2 grid-cols-3">
            
      {(loading ? Array.from(new Array(3)) : articles).map((item, index) => (
        <div key={index} className="mt-3  w-full space-x-2">
 {item ? (                   
              <div className=" pl-2 pt-2 pb-2 ">
              <p className="text-sm text-gray-500">Source: {item.redacteur}</p>
              <p className="text-lg font-bold">{item.title}</p>
              <p className="text-sm text-gray-400">{item.nbVues} Lectures</p>
            </div>                 
             
              ) : (
                <Box>                 
                  <Skeleton width="60%" />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
            )}
           
         
        </div>
      ))}
      
      </div>
     
    </Container>
    <div className="mt-5">
        <Divider/>
    </div>
    </>
  );
}
