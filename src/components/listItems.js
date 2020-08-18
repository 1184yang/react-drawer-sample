import React from 'react';
import {
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  Assignment as AssignmentIcon
} from '@material-ui/icons';

import Dashboard from './Dashboard';
import Orders from './Orders';
import Deposits from './Deposits';
import ProTip from './ProTip';

const listItems = {
  mainListItems: {
    Dashboard: {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      component: <Dashboard />,
    },
    Orders: {
      text: 'Orders',
      icon: <ShoppingCartIcon />,
      component: <Orders />,
    },
    Customers: {
      text: 'Customers',
      icon: <PeopleIcon />,
      component: <Deposits />
    },
    Reports: {
      text: 'Reports',
      icon: <BarChartIcon />,
      component: <ProTip />
    },
    Integrations: {
      text: 'Integrations',
      icon: <LayersIcon />,
      component: <Deposits />
    }
  },
  secondaryListItems: {
    'Current month': {
      text: 'Current month',
      icon: <AssignmentIcon />,
      component: <Deposits />
    },
    'Last quarter': {
      text: 'Last quarter',
      icon: <AssignmentIcon />,
      component: <Deposits />
    },
    'Year-end sale': {
      text: 'Year-end sale',
      icon: <AssignmentIcon />,
      component: <Deposits />
    }
  }
};

export const { mainListItems, secondaryListItems} = listItems;