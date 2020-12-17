import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  // IconButton,
} from '@material-ui/core';
import { logout } from '../actions/userActions';
// import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 300,
    color: '#FFF',
    textDecoration: 'none'
  },
  boldTitle: {
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={RouterLink} to="/">
            BAGI<span className={classes.boldTitle}>TUGAS</span>
          </Typography>
          {!userInfo ? (
            <div>
              <Button
                color="inherit"
                className={classes.margin}
                component={RouterLink}
                to="/login"
              >
                Login
              </Button>
              <Button
                disableElevation
                color="inherit"
                variant="outlined"
                className={classes.margin}
                component={RouterLink}
                to="/register"
              >
                Register
              </Button>
            </div>
          ) : (
            <div>
              <Button
                color="inherit"
                className={classes.margin}
                component={RouterLink}
                to="/dashboard"
              >
                Dashboard
              </Button>
              <Button
                color="inherit"
                className={classes.margin}
                component={RouterLink}
                to="/profile"
              >
                Profile
              </Button>
              <Button
                color="inherit"
                className={classes.margin}
                component={RouterLink}
                to="/create"
              >
                Create Course
              </Button>
              <Button
                color="inherit"
                className={classes.margin}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
