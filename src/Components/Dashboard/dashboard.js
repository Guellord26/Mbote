import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { items } from './hrefIink'
import NextLink from 'next/link';
import { NavItem } from './navItem';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  // [theme.breakpoints.up('lg')]: {
  //   paddingLeft: 280
  // }
}));

export function DashboardLayout(props) {
  const { window, children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <div>
        <Box sx={{ p: 3 }}>
          <NextLink
            href="/"
            passHref
          >
            <a>
              {/* <Logo
                sx={{
                  height: 42,
                  width: 42
                }}
              /> */}
              {/* <img style={{height: 42, width: 100}} src="../../public/images/logo.PNG" alt="logo" /> */}
              <Image
                  src="/images/logo.PNG"
                  alt="logo"
                  width={350}
                  height={90}
                />
            </a>
          </NextLink>
        </Box>
       
      </div>
      <Divider
        sx={{
          borderColor: '#2D3748',
          my: 3
        }}
      />
      <Box sx={{ flexGrow: 1 }}>
        {items.map((item) => (
          <NavItem
            key={item.title}
            icon={item.icon}
            href={item.href}
            title={item.title}
          />
        ))}
      </Box>
      {/* <Divider sx={{ borderColor: '#2D3748' }} /> */}
      <Box
        sx={{
          px: 2,
          py: 3
        }}
      >
       
      </Box>
    </Box>
  </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
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
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};


