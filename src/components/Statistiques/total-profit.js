import { Avatar, Card, CardContent, Grid, Typography, Button, Box} from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useRouter } from 'next/router';
import AddIcon from '@mui/icons-material/Add';

export const TotalProfit = (props) => {


  const router = useRouter()

  return(
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            REVENU PUBLICITAIRE
          </Typography>

          <Typography
            color="textPrimary"
            variant="h4"
          >
            $23k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
          
        </Grid>
      </Grid>
      <Box  
        onClick={() => router.push('/publicite')}
        sx={{
          cursor: "pointer",
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <AddIcon color="success" />
       
        <Typography
       
          color="textSecondary"
          variant="caption"
        >
        Souscrire a une publicite
        </Typography>
      </Box>
    </CardContent>
  </Card>
)};
