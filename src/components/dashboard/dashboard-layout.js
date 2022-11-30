import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import  Dashboard  from './Dashboard';
// import  DashboardSidebar  from './dashboard-sidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-amber-100">
      <DashboardLayoutRoot>
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
      </DashboardLayoutRoot>
      {/* <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} /> */}
      {/* <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      /> */}
      <Dashboard  onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}/>
    </div>
  );
};
