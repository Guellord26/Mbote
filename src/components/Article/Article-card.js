import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/router";

export const ArticleCard = ({ article, ...rest }) => {
  const router = useRouter();
  const voir = (id) => {
    console.log("Bonjour");
    router.push({
      pathname: "/readArticle",
      query: { id: id },
    });
  };
  return (
    <Card
      sx={{ maxWidth: 345 }}
      // onClick={() => router.push('/editor')}
    >
      <CardActionArea>
        <CardMedia 
        component="img" 
        height="140" 
        image={article.media} 
        alt="Article" />
        <CardContent>
          <Typography gutterBottom 
          variant="h6" 
          component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" 
          color="text.secondary">
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" 
        color="primary">
          Vues {article.nbVues}
        </Button>
        <Button size="small"
         color="primary" 
         onClick={() => voir(article.id)}>
          Lire
        </Button>
      </CardActions>
    </Card>
  );
};
