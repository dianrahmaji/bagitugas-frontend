import {Link as RouterLink} from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
});

const CourseCard = ({course}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={0} variant="outlined" className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {course.judul}
          </Typography>
          <Typography>
            {course.deskripsi}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" component={RouterLink} to={`/course/${course.id}`}>
            Overview
          </Button>
          <Button
            disableElevation
            size="small"
            variant="contained"
            color="primary"
          >
            Enroll
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CourseCard;
