import React from "react";
import { useRouter } from "next/router";
import { useNavigate, createSearchParams } from "react-router-dom";
import { LoremIpsum } from 'react-lorem-ipsum';
import { articles } from "../../mock/imgesApi";
import { Box, Container} from '@mui/material';
import { loadComponents } from "next/dist/server/load-components";
import { publicites } from "../../../src/mock/PubApis"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const url = "https://newsapi.org/v2/everything";

export default function Lecture() {
  
  const [loading, setLoading] = React.useState(true);
  const [myArticle, setMyArticle] = React.useState([]);

  const router = useRouter();
  const { id } = router.query;
  var idArticle = Number(id)

  console.log(typeof idArticle);

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
    <Container>
      <div className="2xl:mx-auto xl:px-20 lg:px-10 px-6 py-2  rounded-lg bg-white p-8">
        <div className="lg:flex justify-center">
          {/* ======================================================= */}
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            {articles.map((item, index) => (
              <div key={index}>
                {idArticle == item.id && (
                  <>
                    <img
                      src={item.media}
                      alt="fingerprint recognition"
                      className="lg:w-full w-auto"
                    />
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <p className="text-base leading-4 text-gray-500">
                            {item.createdAt}
                          </p>
                          <p className="text-base leading-none text-gray-500 ml-12">
                            {item.nbVues} Lecture
                          </p>
                        </div>
                        <div className="flex items-center">
                          {/* <svg
                            width={64}
                            height={2}
                            viewBox="0 0 64 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M64 1H0" stroke="#6B7280" />
                          </svg> */}
                          <p className="text-base leading-none text-gray-500 ml-2">
                          <a href="">
                             <FacebookIcon /> Facebook
                          </a> {'  '}
                          <a href="">
                             <TwitterIcon /> Twitter
                          </a>
                          </p>
                          
                        </div>
                      </div>
                      <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                        {item.title}
                      </h1>
                      <h3 className=" font-semibold mt-4 text-gray-700">
                        {item.description}
                      </h3>
                      <p className="text-base leading-6 text-gray-600 mt-2"><LoremIpsum p={item.contents} /></p>
                      {/* <div className="text-wrapper">
                           <LoremIpsum p={item.contents} />
                      </div>  */}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          {/* ======================================================= */}
          <div className="lg:ml-6 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center">
            {publicites.map((item, index) => (
              <div key={index} style={{marginBottom: "10px"}} >
                {idArticle != item.id && (
                  <div className="lg:w-auto sm:w-1/2">
                    <img
                      src={item.media}
                      alt="flying letters"
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </Container>
  );
}
