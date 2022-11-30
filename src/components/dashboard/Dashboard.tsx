import * as React from 'react';
import Box from '@mui/material/Box';
import {Drawer, Divider} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { Lock as LockIcon } from '../../icons/lock';
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { UserAdd as UserAddIcon } from '../../icons/user-add';
import { NavItem } from './nav-item';
import Image from 'next/image'

const items = [
    {
      href: '/',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Dashboard'
    },
    // {
    //   href: '/Test',
    //   icon: (<UserAddIcon fontSize="small" />),
    //   title: 'Test'
    // },
    {
      href: '/articles',
      icon: (<ShoppingBagIcon fontSize="small" />),
      title: 'Articles'
    },
    {
      href: '/publicite',
      icon: (<UserAddIcon fontSize="small" />),
      title: 'Publicite'
    },
    {
      href: '/editor',
      icon: "",
      title: 'Editeur'
    },
    // {
    //   href: '/settings',
    //   icon: (<CogIcon fontSize="small" />),
    //   title: 'Settings'
    // },
    {
      href: '/login',
      icon: (<LockIcon fontSize="small" />),
      title: 'Login'
    },
    {
      href: '/register',
      icon: (<UserAddIcon fontSize="small" />),
      title: 'Register'
    },
    // {
    //   href: '/404',
    //   icon: (<XCircleIcon fontSize="small" />),
    //   title: 'Error'
    // }
  ];

export default function Dashboard(props) {
    const { open, onClose } = props;
    const router = useRouter();

    const content = (
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
                        src="/images/logo.png"
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
 
  return (
    <div>    
          <Drawer
          anchor="left"
          PaperProps={{
            sx: {
              // backgroundColor: '#212121',
              backgroundColor: '#ffffff',
              color: '#212121',
              width: 280
            }
          }}
          variant="permanent">
            {content}
          </Drawer>       
    </div>
  );
}
