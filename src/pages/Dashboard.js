import React from 'react';
import { makeStyles } from '@mui/styles';
import { CardActions,Button,Grid, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import MyPieChart from '../components/common/PieChart';
import Sidebar from '../components/common/SideBar';
// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  //  marginLeft:-230
  },
  card: {
    margin: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      // Adjust the minWidth for extra small screens
      minWidth: 150,
    },
    [theme.breakpoints.up('sm')]: {
      // Adjust the minWidth for small screens
      minWidth: 200,
    },
    [theme.breakpoints.up('md')]: {
      // Adjust the minWidth for medium screens
      minWidth: 250,
    },
    [theme.breakpoints.up('lg')]: {
      // Adjust the minWidth for large screens
      minWidth: 300,
    },
  },
  chart: {
    height: 300,
    margin: theme.spacing(1),
  },
  list: {
    marginTop: theme.spacing(2),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
  {/* Sidebar */}
  <Sidebar />

  {/* Main content */}
  <div className={classes.content}>
    {/* Header */}
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* Your logo component or image */}
      </Grid>
    </Grid>

    {/* Cards */}
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Card 1</Typography>
            {/* Add your card content */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Card 2</Typography>
            {/* Add your card content */}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Card 3</Typography>
            {/* Add your card content */}
          </CardContent>
        </Card>
      </Grid>
    </Grid>

    {/* Pie Chart and Cards */}
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        {/* Pie Chart */}
        <div className={classes.chart}>
          <MyPieChart />
          {/* Replace with the actual pie chart component or image */}
        </div>
      </Grid>
      <Grid item xs={12} sm={4}>
        {/* Card at the right of the pie chart */}
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Card at the Right</Typography>
            {/* Add your card content */}
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={4}>
        {/* Card at the left of the list */}
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h6">Card at the Left</Typography>
            {/* Add your card content */}
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
          </CardContent>
        </Card>
      </Grid>
    {/* List and Card at the Left */}
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        {/* List */}
        <List className={classes.list}>
          <ListItem>
            <ListItemText primary="Item 1" secondary="Description 1" />
            <ListItemText primary="Item 2" secondary="Description 2" />
            <ListItemText primary="Item 3" secondary="Description 3" />
          </ListItem>
        </List>
      </Grid>
      
    </Grid>
  </div>
</div>

  );
};

export default Dashboard;