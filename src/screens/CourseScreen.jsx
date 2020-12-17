import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import Header from '../components/Header';
import { getCourseDetails } from '../actions/courseActions';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  accordion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const CourseScreen = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courseDetails);
  const { details } = courseDetails;
  const courseMaterials = useSelector((state) => state.courseMaterials);
  const { materials } = courseMaterials;

  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, [dispatch, id]);

  const handleChange = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <div className={classes.mainContent}>
        <Container component="main">
          <Grid container justify="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="textPrimary"
                gutterBottom
              >
                {details && details.judul}
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                {details && details.deskripsi}
              </Typography>
              <Typography>Created By - {details && details.teacher}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button>Enroll</Button>
              <Button>Share</Button>
            </Grid>
          </Grid>
          <Typography
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
          >
            Course Content
          </Typography>
          <div className={classes.accordion}>
            {materials &&
              materials.map((material) => (
                <Accordion
                  expanded={expanded === material.id}
                  onChange={handleChange(material.id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      Course #{material.id}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      {material.pertemuan}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid xs={12}>
                        <Typography className={classes.heading}>
                          Link Material
                        </Typography>
                        <iframe
                          title={material.judul}
                          width="100%"
                          height="720"
                          src={material.link}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </Grid>
                      <Grid>
                        <Typography className={classes.heading}>
                          Link Modul:{' '}
                          <a href={material.modul}> {material.modul}</a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseScreen;
