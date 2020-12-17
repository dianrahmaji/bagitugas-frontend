import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import { createCourse } from '../actions/courseActions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();


  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [link, setLink] = useState('');
  const [reward, setReward] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(judul, deskripsi, link, reward))
    history.push('/');
  };

  return (
    <>
    <Header />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Course
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Judul"
                label="Judul"
                name="judul"
                autoComplete="judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={3}
                id="deskripsi"
                label="Deskripsi"
                type="text"
                autoComplete="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="link"
                label="Link"
                type="text"
                autoComplete="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="reward"
                label="Reward"
                type="number"
                autoComplete="reward"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
              ></TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            className={classes.submit}
          >
            Create Course
          </Button>
        </form>
      </div>
    </Container>
    </>
  );
};

export default RegisterScreen;
