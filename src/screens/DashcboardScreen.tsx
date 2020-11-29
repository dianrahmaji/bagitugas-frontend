import React from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    padding: theme.spacing(8),
    }
  })
);

const cards = [1, 2, 3, 4, 5];

const DashcboardScreen: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container className={classes.root}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography>Username</Typography>
            <Typography>Email</Typography>
          </Grid>
          <Grid item>
            <Typography>Reward: 100</Typography>
            <Button fullWidth>Redeem</Button>
          </Grid>
        </Grid>
        <Typography
          component="h1"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          My Courses
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <CourseCard key={card} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DashcboardScreen;
