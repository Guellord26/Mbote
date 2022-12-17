import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { Lock as LockIcon } from '../../icons/lock';
import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
import { UserAdd as UserAddIcon } from '../../icons/user-add';

 export const items = [
    {
      href: '/',
      icon: (<ChartBarIcon fontSize="small" />),
      title: 'Dashboard'
    },
    {
      href: '/editor',
      icon: (<UserAddIcon fontSize="small" />),
      title: 'Editeur'
    },
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
    // {
    //   href: '/account',
    //   icon: (<UserIcon fontSize="small" />),
    //   title: 'Account'
    // },
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