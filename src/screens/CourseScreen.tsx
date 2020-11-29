import React, { useState } from 'react';
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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import Header from '../components/Header';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);

const CourseScreen: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (
    e: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
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
                Course Title
              </Typography>
              <Typography variant="h5" color="textSecondary" paragraph>
                BagiTugas description -Something short and leading about the
                collection below—its contents, the creator, etc. Make it short
                and sweet, but not too short so folks don&apos;t simply skip
                over it entirely.
              </Typography>
              <Typography>Created By - A Lecturer</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>Here lies image</Typography>
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
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Course #0
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Introduction to Web Development
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  Course #0
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Introduction to Web Development
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CourseScreen;
