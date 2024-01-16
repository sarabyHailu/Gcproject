// // // Sidebar.js
// // import React from 'react';
// // import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// // import { Link, useLocation } from 'react-router-dom';
// // import { Dashboard, People, EventNote, Person } from '@mui/icons-material';

// // const Sidebar = () => {
// //   const location = useLocation();

// //   const menuItems = [
// //     { text: 'Dashboard', icon: <Dashboard />, path: '/' },
// //     { text: 'Patients', icon: <People />, path: '/patients' },
// //     { text: 'Appointments', icon: <EventNote />, path: '/appointments' },
// //     { text: 'Users', icon: <Person />, path: '/users' },
// //   ];

// //   return (
// //     <Drawer variant="permanent" anchor="left">
// //       <List>
// //         {menuItems.map((item) => (
// //           <ListItem
// //             button
// //             key={item.text}
// //             component={Link}
// //             to={item.path}
// //             selected={location.pathname === item.path}
// //           >
// //             <ListItemIcon>{item.icon}</ListItemIcon>
// //             <ListItemText primary={item.text} />
// //           </ListItem>
// //         ))}
// //       </List>
// //     </Drawer>
// //   );
// // };

// // export default Sidebar;
// // import React from 'react';
// // import { makeStyles } from '@mui/styles';
// // import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
// // import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import { Dashboard, People, EventNote, Person } from '@mui/icons-material';


// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: 'flex',
// //     backgroundColor:'C5F1F6'
// //   },
// //   drawer: {
// //     width: drawerWidth,
// //     backgroundColor: '#C5F1F6',
// //   },
// //   drawerPaper: {
// //     width: drawerWidth,
// //   },
// //   profile: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: theme.spacing(5),

// //     // backgroundColor: theme.palette.primary.main,
// //   },
// //   avatar: {
// //     width: theme.spacing(7),
// //     height: theme.spacing(7),
// //   },
// //   active: {
// //     background: '#f4f4f4',
// //   },
// // }));
// // 11111111111111111111111111111111111
// // const drawerWidth = 240;

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     display: 'flex',
// //   },
// //   drawer: {
// //     width: drawerWidth,
// //     backgroundColor: '#C5F1F6',
// //   },
// //   drawerPaper: {
// //     width: drawerWidth,
// //   },
// //   profile: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     padding: theme.spacing(5),
// //     borderRadius: '50%',
// //   },
// //   avatar: {
// //     width: theme.spacing(20),
// //     height: theme.spacing(20),
// //   },
// //   active: {
// //     background: '#f4f4f4',
// //     borderLeft: `3px solid ${theme.palette.secondary.main}`, // Add a border
// //   },
// // }));


 


// // const Layout = ({ children }) => {
// //   const classes = useStyles();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// // //   const menuItems = [
// // //     {
// // //       text: 'My Notes',
// // //       icon: <SubjectOutlined color="secondary" />,
// // //       path: '/',
// // //     },
// // //     {
// // //       text: 'Create Note',
// // //       icon: <AddCircleOutlineOutlined color="secondary" />,
// // //       path: '/create',
// // //     },
// // //   ];
// // const menuItems = [
// //          { text: 'Dashboard', icon: <Dashboard />, path: '/' },
// //         { text: 'Patients', icon: <People />, path: '/patients' },
// //        { text: 'Appointments', icon: <EventNote />, path: '/appointments' },
// //       { text: 'Users', icon: <Person />, path: '/users' },
// //       ];

// //   return (
// //     <div className={classes.root}>
// //       <Drawer
// //         className={classes.drawer}
// //         variant="permanent"
// //         anchor="left"
// //         classes={{ paper: classes.drawerPaper }}
// //       >
// //         <div className={classes.profile}>
// //           <Avatar className={classes.avatar} src="/path/to/profile-image.jpg" alt="Profile" />
// //           <Typography variant="subtitle1">Your Name</Typography>
// //           <Typography variant="caption">Role: Administrator</Typography>
// //         </div>

// //         <List>
// //           {menuItems.map((item) => (
// //             <ListItem
// //               button
// //               key={item.text}
// //               onClick={() => navigate(item.path)}
// //               className={location.pathname === item.path ? classes.active : ''}
// //             >
// //               <ListItemIcon>{item.icon}</ListItemIcon>
// //               <ListItemText primary={item.text} />
// //             </ListItem>
// //           ))}
// //         </List>
// //       </Drawer>

// //       <div>{children}</div>
// //     </div>
// //   );
// // };

// // export default Layout;
// import React from 'react';
// import { makeStyles, useTheme } from '@mui/styles';
// import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
// import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
// import { Dashboard, People, EventNote, Person } from '@mui/icons-material';
// import { useLocation, useNavigate } from 'react-router-dom';
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {
//     width: drawerWidth,
//     backgroundColor: '#C5F1F6',
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   profile: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: theme.spacing(5),
//     borderRadius: '50%',
//   },
//   avatar: {
//     width: theme.spacing(14),
//     height: theme.spacing(14),
//   },
//   active: {
//     background: '#f4f4f4',
//     borderRight: `3px solid ${theme.palette.secondary.main}`,
//   },
//   listItemText: {
//     [theme.breakpoints.down('sm')]: {
//       display: 'none', // Hide text on small screens
//     },
//   },
// }));

// const Layout = ({ children }) => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const menuItems = [
//     { text: 'Dashboard', icon: <Dashboard />, path: '/' },
//     { text: 'Patients', icon: <People />, path: '/patients' },
//     { text: 'Appointments', icon: <EventNote />, path: '/appointments' },
//     { text: 'Users', icon: <Person />, path: '/users' },
//   ];

//   return (
//     <div className={classes.root}>
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         anchor="left"
//         classes={{ paper: classes.drawerPaper }}
//       >
//         <div className={classes.profile}>
//           <Avatar className={classes.avatar} src="/path/to/profile-image.jpg" alt="Profile" />
//           {!isSmallScreen && (
//             <>
//               <Typography variant="subtitle1">Your Name</Typography>
//               <Typography variant="caption">Role: Administrator</Typography>
//             </>
//           )}
//         </div>

//         <List>
//           {menuItems.map((item) => (
//             <ListItem
//               button
//               key={item.text}
//               onClick={() => navigate(item.path)}
//               className={location.pathname === item.path ? classes.active : null}
//             >
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText
//                 primary={item.text}
//                 className={classes.listItemText}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       <div>{children}</div>
//     </div>
//   );
// };

// export default Layout;
import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { Dashboard, People, EventNote, Person } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'auto', // Set width to auto on small screens
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: 'auto', // Set width to auto on small screens
    },
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(5),
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide the profile on small screens
    },
  },
  avatar: {
    width: theme.spacing(14),
    height: theme.spacing(14),
  },
  active: {
    background: '#f4f4f4',
    // borderRight: `3px solid red`
    borderRight: `3px solid ${theme.palette.secondary.main}`,
  },
  listItemText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide text on small screens
    },
    [theme.breakpoints.down('md')]:{
      fontSize:'1rem',
      
    }
  },
  
}));

const SideBar = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, path: '/' },
    { text: 'Patients', icon: <People />, path: '/patients' },
    { text: 'Appointments', icon: <EventNote />, path: '/appointments' },
    { text: 'Users', icon: <Person />, path: '/users' },
  ];

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.profile}>
          <Avatar className={classes.avatar} src="/path/to/profile-image.jpg" alt="Profile" />
          {!isSmallScreen && (
            <>
              <Typography variant="subtitle1">Your Name</Typography>
              <Typography variant="caption">Role: Administrator</Typography>
            </>
          )}
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                className={classes.listItemText}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div>{children}</div>
    </div>
  );
};

export default SideBar;
