import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rootGrid: {
    flexGrow: 1,
    marginTop: 1,
  },
  container: {
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
    paddingBottom: 5,
  },
  paper: {
    marginLeft: 5,
    marginRight: 5,
    height: 300,
    background: 'none',
  },
  title: {
    color: 'Black',
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Proyecto Teoria de la simulacion</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <Box>
        <FormControl fullWidth className={classes.root} noValidate autoComplete="off">
          <TextField fullWidth id="outlined-basic" label="Ingrese valor" variant="outlined" />
        </FormControl>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.container}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco 1</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco 2</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco 3</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}