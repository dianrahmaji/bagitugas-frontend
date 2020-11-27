import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
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

const RegisterScreen: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();

  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/register/${role}`)
    console.table({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      role,
    });
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastname"
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Grid>
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
                  onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                    setRole(e.target.value as string)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'student'}>Student</MenuItem>
                  <MenuItem value={'teacher'}>Teacher</MenuItem>
                  <MenuItem value={'admin'}>Admin</MenuItem>
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
