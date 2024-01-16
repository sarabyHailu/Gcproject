import React from 'react';
import { makeStyles } from '@mui/styles';
import Sidebar from '../common/SideBar'; // Replace with the actual path to your Sidebar component
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    backgroundColor: '#C5F1F6',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    borderRadius: '50%',
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  active: {
    background: '#f4f4f4',
    borderRight: `3px solid ${theme.palette.secondary.main}`,
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    // marginLeft: drawerWidth,
    // padding: theme.spacing(3),
  },

  // Media query for screens smaller than a certain width
  '@media (max-width: 960px)': {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    page: {
      marginLeft: drawerWidth,
    },
  },

  // Media query for screens smaller than a certain width
  '@media (max-width: 600px)': {
    drawer: {
      width: '100%', // Make the drawer take full width on smaller screens
    },
    drawerPaper: {
      width: '100%',
    },
    page: {
      marginLeft: 0, // Remove margin for smaller screens
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;