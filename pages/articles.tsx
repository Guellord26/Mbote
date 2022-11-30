import React from "react";
import Head from "next/head";
import Router from "next/router";
import {
  Box,
  Container,
  Grid,
  Pagination,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import { articles } from "../src/mock/imgesApi";
// import { ArticleListToolbar } from "../src/components/article/article-list-toolbar";
// import { ArticleCard } from "../src/components/article/article-card";
import { DashboardLayout } from "../src/components/dashboard/dashboard-layout";
// import { PaginatedItems } from "../src/components/pagnations/pagination";
import Image from "next/image";

const itemsPerPage = 4;
const Article = () => {
  // const [article, setArticle] = React.useState([])
  const [itemOffset, setItemOffset] = React.useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = articles.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(articles.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const lecture = (id) => {
    Router.push({
      pathname: "/readArticle",
      query: { id: id },
    });
  };
  return (
    <>
      <Head>
        <title>Article | Mbote</title>
      </Head>
      <Container>
        <div className="">
          {/* <ArticleListToolbar /> */}
        </div>

        <Divider />
        <form className="group relative">
          <svg
            width="25"
            height="25"
            fill="currentColor"
            className="absolute left-3 top-2 mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            type="text"
            aria-label="Filter projects"
            placeholder="Search..."
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          />
        </form>

        <div
          className="mt-10 bg-white rounded-lg "
          
        >
          <Container>
            {currentItems.map((item, index) => (
              <div key={index} 
                onClick={() => lecture(item.id)}
                className="pt-1 pb-4 divide-y divide-slate-500"
                style={{ cursor: "pointer" }}
              >
                <div className="flex flex-nowrap mt-2">
                  <div className="basis-3/12">
                    <div className="pr-4">
                      <img
                        src={item.media}
                        alt=""
                        style={{
                          marginBottom: "5px",
                          width: "200px",
                          height: "150px",
                          borderRadius: "10px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="basis-9/12 ">
                    <div className="ml-5" style={{ width: "700px" }}>
                      <p className="text-sm pb-2 text-gray-500">
                        Source: {item.redacteur}
                      </p>
                      <h2 className="text-lg font-bold font-serif text-gray-900">
                        {item.title}
                      </h2>

                      <p className="text-sm font-sans text-white text-gray-700">
                        {item.description}
                      </p>
                      <p className="text-sm pt-2 text-gray-500">
                        {item.nbVues} Lectures
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="divide-y divide-neutral-200 mt-5 mb-5">
               {item.id !== currentItems.length ? <Divider /> : null} 
              </div> */}
              </div>
            ))}
          </Container>
        </div>
        <div className="flex justify-center">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            {/* <PaginatedItems
              pageCount={pageCount}
              handlePageClick={handlePageClick}
            /> */}
          </Box>
        </div>
      </Container>
    </>
  );
};
Article.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Article;
