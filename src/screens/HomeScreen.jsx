import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getCourseList } from '../actions/courseActions';

import Header from '../components/Header';
import CourseCard from '../components/CourseCard';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const HomeScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const courseList = useSelector((state) => state.courseList);
  const { courses } = courseList;

  useEffect(() => {
    dispatch(getCourseList());
  }, [dispatch]);

  useEffect(() => {
    console.log(courseList)
  })

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              BagiTugas
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              BagiTugas adalah platform bagi guru atau dosen untuk membagikan materi dan tugas
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Most Recent Courses
          </Typography>
          <Grid container spacing={4}>
            {courses && courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
};

export default HomeScreen;
