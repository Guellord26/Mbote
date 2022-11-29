import React from "react";
import Head from "next/head";
import Router from 'next/router'
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
import { ArticleListToolbar } from "../src/Components/Article/article-list-toolbar";
import { ArticleCard } from "../src/Components/Article/article-card";
import { DashboardLayout } from "../src/Components/Dashboard/dashboard-layout";
import { PaginatedItems } from "../src/Components/Pagnations/Pagination";
import Image from "next/image";

const itemsPerPage = 4;
const Test = () => {
 
  return (
    <>
    </>
  );
};
Test.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Test;
