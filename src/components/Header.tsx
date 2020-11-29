import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  // IconButton,
} from '@material-ui/core';
// import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 300,
    },
    boldTitle: {
      fontWeight: 'bold',
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            BAGI<span className={classes.boldTitle}>TUGAS</span>
          </Typography>
          <Button color="inherit" className={classes.margin}>
            Login
          </Button>
          <Button
            disableElevation
            color="inherit"
            variant="outlined"
            className={classes.margin}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
