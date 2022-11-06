import Head from 'next/head';
import { Box, Container, Grid, Pagination, Divider, Button } from '@mui/material';
import { articles } from '../src/mock/imgesApi'
import { ArticleListToolbar } from '../src/Components/Article/article-list-toolbar';
import { ArticleCard } from '../src/Components/Article/article-card';
import { DashboardLayout } from '../src/Components/Dashboard/dashboard-layout';


const Articles = () => (
  
  <>
    <Head>
      <title>
        Article | Mbote
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <ArticleListToolbar />
        <Divider />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={1}
          >
            {articles.map((article) => (
              <Grid
                item
                key={article.id}
                lg={6}
                md={6}
                xs={12}
              >
                <ArticleCard article={article} />
                {/* <Button onClick={()=> alert("bonjour")}>click</Button> */}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);
Articles.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Articles;
