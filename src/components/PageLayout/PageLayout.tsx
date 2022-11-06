import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';



const PageLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  // paddingTop: 64,
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: 280
  // }
}));

export const PageLayout = (props) => {
  const { children } = props;
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
     
      <PageLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </PageLayoutRoot>

    </>
  );
};
