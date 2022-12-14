import {
    Box,
    Button,
    Typography
  } from '@mui/material';
  import NextLink from 'next/link';
  import { useRouter } from 'next/router';
  import { Download as DownloadIcon } from '../../icons/download';
  import { Search as SearchIcon } from '../../icons/search';
  import { Upload as UploadIcon } from '../../icons/upload';
  
 
  export const ArticleListToolbar = (props) => {
    const router = useRouter()
    return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Articles
        </Typography>
        <Box sx={{ m: 1 }}>
          
          <Button
            style={{backgroundColor: '#212121'}}
            variant="contained"
            onClick={() => router.push('/editor')}
          >
            Ajouter Articles
          </Button>
          
            
        </Box>
      </Box>
      
    </Box>
  )
};
  