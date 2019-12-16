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
import Button from '@material-ui/core/Button';

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
    /* height: 300, */
    height: 'auto',
    background: 'none',
    paddingLeft: 10,
    paddingRight: 10,
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

  const [state, setState] = React.useState({
    saveMonth: 0,
    saveMonthD: 0,
    years: 0,
    occidente: {
      futuresL: [],
      futuresD: [],
    },
    atlantida: {
      futuresL: [],
      futuresD: [], 
    },
    bac: {
      futuresL: [],
      futuresD: [],
    }
  });

  const handlerSaveMonth = event => {
    setState({ ...state, saveMonth: parseFloat(event.target.value, 2) });
  }

  const handlerSaveMonthD = event => {
    setState({ ...state, saveMonthD: parseFloat(event.target.value, 2) });
  }

  const handlerYears = event => {
    setState({ ...state, years: parseFloat(event.target.value, 2) * 12 });
  }



  const math = (addSaveMonth, saveMonthInitial, i, ti) => {
    const rate = parseFloat((ti / 360).toFixed(8), 8); //tasa nominal diaria
    if (i === 1) {
      const interest = parseFloat((addSaveMonth * rate * 30).toFixed(2), 2); //intereses
      const newSaveMonth = parseFloat((addSaveMonth + interest).toFixed(2), 2); //nuevo capital
      addSaveMonth = newSaveMonth;
    }
    else {
      const interest = parseFloat(((addSaveMonth + saveMonthInitial) * rate * 30).toFixed(2), 2); //intereses
      const newSaveMonth = parseFloat((addSaveMonth + interest).toFixed(2), 2); //nuevo capital
      addSaveMonth = parseFloat((newSaveMonth + saveMonthInitial).toFixed(2));
    }
    return addSaveMonth;
  }

  const bankOccidente = () => {
    var future = [];
    var addSaveMonth = state.saveMonth; //ahorro por mes, entrada del usuario
    var saveMonthInitial =  state.saveMonth;

    for (var i = 1; i <= state.years; i ++) { //numero de anos del ahorro
      if (saveMonthInitial >= 500 && saveMonthInitial <= 50000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.035);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 50000.01 && saveMonthInitial <= 100000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.045);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 100000.01 && saveMonthInitial <= 200000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.05);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 200000.01 && saveMonthInitial <= 500000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0575);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 500000.01 && saveMonthInitial <= 1000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0650);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 1000000.01 && saveMonthInitial <= 2000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0675);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 2000000.01 && saveMonthInitial <= 5000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0725);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 5000000.01 && saveMonthInitial <= 10000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0750);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (state.saveMonth >= 10000000.01) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.08);
        addSaveMonth = aSM;
        future.push(aSM);

      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 250 && saveMonthInitialD <= 1000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.012);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 1000.01 && saveMonthInitialD <= 50000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.0190);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 50000.01 && saveMonthInitialD <= 150000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.0275);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 150000.01) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.035);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      }
    }

    return {
      future,
      futureD
    }
  }

  const bankAtlantida = () => {
    var future = [];
    var addSaveMonth = state.saveMonth; //ahorro por mes, entrada del usuario
    var saveMonthInitial =  state.saveMonth;

    for (var i = 1; i <= state.years; i ++) { //numero de anos del ahorro
      if (saveMonthInitial >= 5000 && saveMonthInitial <= 10000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0025);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 10000.01 && saveMonthInitial <= 50000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0375);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 50000.01 && saveMonthInitial <= 100000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.045);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 100000.01 && saveMonthInitial <= 500000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.05);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 500000.01 && saveMonthInitial <= 1000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.06);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 1000000.01) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.07);
        addSaveMonth = aSM;
        future.push(aSM);

      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 5000 && saveMonthInitialD <= 15000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.005);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 15000.01 && saveMonthInitialD <= 50000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.01);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 50000.01) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.015);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      }
    }
    return {
      future,
      futureD
    }
  }

  const bankBac = () => {
    var future = [];
    var addSaveMonth = state.saveMonth; //ahorro por mes, entrada del usuario
    var saveMonthInitial =  state.saveMonth;

    for (var i = 1; i <= state.years; i ++) { //numero de anos del ahorro
      if (saveMonthInitial >= 5000 && saveMonthInitial <= 10000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0025);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 10000.01 && saveMonthInitial <= 50000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.0375);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 50000.01 && saveMonthInitial <= 100000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.045);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 100000.01 && saveMonthInitial <= 500000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.05);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 500000.01 && saveMonthInitial <= 1000000) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.06);
        addSaveMonth = aSM;
        future.push(aSM);

      } else if (saveMonthInitial >= 1000000.01) {
        
        const aSM = math(addSaveMonth, saveMonthInitial, i, 0.07);
        addSaveMonth = aSM;
        future.push(aSM);

      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 5000 && saveMonthInitialD <= 15000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.005);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 15000.01 && saveMonthInitialD <= 50000) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.01);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      } else if (saveMonthInitialD >= 50000.01) {
        
        const aSM = math(addSaveMonthD, saveMonthInitialD, j, 0.015);
        addSaveMonthD = aSM;
        futureD.push(aSM);

      }
    }
    return {
      future,
      futureD
    }
  }

  const calculator = () => {
    const atlantida = bankAtlantida();
    const occidente = bankOccidente();
    setState({ 
      ...state,
      occidente: {  futuresL: occidente.future, futuresD: occidente.futureD },
      atlantida: { futuresL: atlantida.future, futuresD: atlantida.futureD }
    });
  }

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
          <TextField
            fullWidth
            id="saveMonth"
            label="Cantidad ahorro mensual en lempiras"
            variant="outlined"
            type="number"
            defaultValue={0}
            onChange={handlerSaveMonth}
          />
          <TextField
            fullWidth
            id="saveMonthD"
            label="Cantidad ahorro mensual en dolares"
            variant="outlined"
            type="number"
            defaultValue={0}
            onChange={handlerSaveMonthD}
          />
          <TextField
            fullWidth
            id="years"
            label="A;os"
            variant="outlined"
            type="number"
            defaultValue={0}
            onChange={handlerYears}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={calculator}
          >
            Calcular
          </Button>
        </FormControl>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.container}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Bac</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco Atlantida</Typography>
                  <Typography variant="body1" align="left">Cuenta de ahorro en lempiras</Typography>
                  {
                    state.atlantida.futuresL.map((value, index) => (
                      <Typography key={value} variant="body2" align="left">{index + 1}. Interes mas ahorro mensual: {String(value)} LPS.</Typography>
                    ))
                  }
                  <Typography variant="body1" align="left">Cuenta de ahorro en Dolares</Typography>
                  {
                    state.atlantida.futuresD.map((value, index) => (
                      <Typography key={value} variant="body2" align="left">{index + 1}. Interes mas ahorro mensual: {String(value)} USD.</Typography>
                    ))
                  }
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco Occidente</Typography>
                  <Typography variant="body1" align="left">Cuenta de ahorro en lempiras</Typography>
                  {
                    state.occidente.futuresL.map((value, index) => (
                      <Typography key={value} variant="body2" align="left">{index + 1}. Interes mas ahorro mensual: {String(value)} LPS.</Typography>
                    ))
                  }
                  <Typography variant="body1" align="left">Cuenta de ahorro en Dolares</Typography>
                  {
                    state.occidente.futuresD.map((value, index) => (
                      <Typography key={value} variant="body2" align="left">{index + 1}. Interes mas ahorro mensual: {String(value)} USD.</Typography>
                    ))
                  }
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