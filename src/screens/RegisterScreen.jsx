import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons';
import { register } from '../actions/userActions';

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
  const userRegister = useSelector((state) => state.userRegister);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    console.log(userRegister);
  }, [userRegister]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(email, password, confirmPassword));
    history.push(`/register/${role}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                autoComplete="Current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                autoComplete="Current-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                required
                fullWidth
                margin="normal"
              >
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  label="Role"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'student'}>Student</MenuItem>
                  <MenuItem value={'teacher'}>Teacher</MenuItem>
                </Select>
              </FormControl>
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
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegisterScreen;
