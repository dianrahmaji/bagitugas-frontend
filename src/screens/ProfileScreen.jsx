import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [institution, setInstitution] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

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
          Profile
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
                id="institution"
                label="Institution"
                name="institution"
                autoComplete="institution"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="registrationNumber"
                label={`${role === 'student' ? 'Student' : 'Teacher'} Number`}
                type="registrationNumber"
                autoComplete="registrationNumber"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                type="tel"
                autoComplete="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={3}
                id="address"
                label="Address"
                type="text"
                autoComplete="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                rows={3}
                id="description"
                label="Self Description"
                type="text"
                autoComplete="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            Edit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterScreen;
