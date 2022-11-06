import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image'
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import ContextTest from './ContextTest'


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
 {label:'ACCUEL', href:"/"},
 {label:'APROPOS DE NOUS', href:"/apropos"},
 {label:'NOS ARTICLES', href:"/rubrique"},
 {label:'CONTACT', href:"/contact"}
];


export const MyContext = React.createContext("user")

export default function NavBar(props: Props) {
  const [user, setUser] = React.useState('Guellord Mbiya')
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item ,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<MyContext.Provider value={user}>
      <AppBar component="nav" style={{backgroundColor: '#fff'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/images/Logo.png"
            alt="logo world business"
            width={200}
            height={50}
            />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
         <ContextTest />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (           
              <NextLink key={index}
              href={item.href}
              // passHref 
              >
              <Button sx={{ color: 'black' }}>
              {item.label}
              </Button> 
              
            </NextLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </MyContext.Provider> 
  );
}
