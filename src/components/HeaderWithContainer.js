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
import Taps from './Taps';

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
  choices: {
    paddingLeft: 5,
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
    },
    choiceD: [],
    choiceL: [],
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
    let inter = 0;
    if (i === 1) {
      const interest = parseFloat((addSaveMonth * rate * 30).toFixed(2), 2); //intereses
      const newSaveMonth = parseFloat((addSaveMonth + interest).toFixed(2), 2); //nuevo capital
      addSaveMonth = newSaveMonth;
      inter = interest
    }
    else {
      const interest = parseFloat(((addSaveMonth + saveMonthInitial) * rate * 30).toFixed(2), 2); //intereses
      const newSaveMonth = parseFloat((addSaveMonth + interest).toFixed(2), 2); //nuevo capital
      addSaveMonth = parseFloat((newSaveMonth + saveMonthInitial).toFixed(2));
      inter = interest
    }
    return { 
      addSaveMonth,
      inter
    };
  }

  const bankOccidente = () => {
    var future = [];
    var addSaveMonth = state.saveMonth; //ahorro por mes, entrada del usuario
    var saveMonthInitial =  state.saveMonth;

    for (var i = 1; i <= state.years; i ++) { //numero de anos del ahorro
      if (saveMonthInitial >= 500 && saveMonthInitial <= 50000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.035);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 50000.01 && saveMonthInitial <= 100000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.045);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 100000.01 && saveMonthInitial <= 200000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.05);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 200000.01 && saveMonthInitial <= 500000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0575);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 500000.01 && saveMonthInitial <= 1000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0650);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 1000000.01 && saveMonthInitial <= 2000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0675);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 2000000.01 && saveMonthInitial <= 5000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0725);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 5000000.01 && saveMonthInitial <= 10000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0750);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (state.saveMonth >= 10000000.01) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.08);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else {
        future.push({ saveMonthInitial, aSM: saveMonthInitial, inter: 0 });
      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 250 && saveMonthInitialD <= 1000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.012);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 1000.01 && saveMonthInitialD <= 50000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0190);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 50000.01 && saveMonthInitialD <= 150000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0275);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 150000.01) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.035);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else {
        futureD.push({ saveMonthInitialD, aSM: saveMonthInitialD, inter: 0 });
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
      if (saveMonthInitial >= 0.01 && saveMonthInitial <= 250) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.001);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 250.01 && saveMonthInitial <= 1000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0015);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 1000.01 && saveMonthInitial <= 5000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0025);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 5000.01 && saveMonthInitial <= 20000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0075);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 20000.01 && saveMonthInitial <= 50000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0175);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 50000.01 && saveMonthInitial <= 100000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0275);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 100000.01 && saveMonthInitial <= 200000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0325);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter }); 
      
      } else if (saveMonthInitial >= 200000.01 && saveMonthInitial <= 500000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.04);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });  
      
      } else if (saveMonthInitial >= 500000.01 && saveMonthInitial <= 1000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.05);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 1000000.01) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0525);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      }  else {
        future.push({ saveMonthInitial, aSM: saveMonthInitial, inter: 0 });
      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 0.01 && saveMonthInitialD <= 100) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.001);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 100.01 && saveMonthInitialD <= 3000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0015);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });
      
      } else if (saveMonthInitialD >= 3000.01 && saveMonthInitialD <= 10000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0065);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });
      
      } else if (saveMonthInitialD >= 10000.01 && saveMonthInitialD <= 25000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0115);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });
      
      } else if (saveMonthInitialD >= 25000.01 && saveMonthInitialD <= 50000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0140);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 50000.01 && saveMonthInitialD <= 100000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.02);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });  

      } else if (saveMonthInitialD >= 100000.01) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.025);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else {
        futureD.push({ saveMonthInitialD, aSM: saveMonthInitialD, inter: 0 });
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
      if (saveMonthInitial >= 0.00 && saveMonthInitial <= 1000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.00);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 1000.01 && saveMonthInitial <= 30000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.005);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 30000.01 && saveMonthInitial <= 300000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0125);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 300000.01 && saveMonthInitial <= 600000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.03);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 600000.01 && saveMonthInitial <= 1000000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.0350);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      } else if (saveMonthInitial >= 1000000.01) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonth, saveMonthInitial, i, 0.04);
        addSaveMonth = aSM;
        future.push({ saveMonthInitial, aSM, inter });

      }  else {
        future.push({ saveMonthInitial, aSM: saveMonthInitial, inter: 0 });
      }
    }

    var futureD = [];
    var addSaveMonthD = state.saveMonthD; 
    var saveMonthInitialD =  state.saveMonthD;

    for (var j = 1; j <= state.years; j++) { //numero de anos del ahorro
      if (saveMonthInitialD >= 0.01 && saveMonthInitialD <= 200) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.00);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 200.01 && saveMonthInitialD <= 25000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0025);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 25000.01 && saveMonthInitialD <= 50000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.009);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 50000.01 && saveMonthInitialD <= 100000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.014);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 100000.01 && saveMonthInitialD <= 250000) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.0165);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else if (saveMonthInitialD >= 250000.01 ) {
        
        const { addSaveMonth: aSM, inter } = math(addSaveMonthD, saveMonthInitialD, j, 0.02);
        addSaveMonthD = aSM;
        futureD.push({ saveMonthInitialD, aSM, inter });

      } else {
        futureD.push({ saveMonthInitialD, aSM: saveMonthInitialD, inter: 0 });
      }
    }
    return {
      future,
      futureD
    }
  }

  const ord = (a, b) => {
    return b.interest - a.interest;
  }

  const calculator = (e) => {
    e.preventDefault();
    const occidente = bankOccidente();
    const atlantida = bankAtlantida();
    const bac = bankBac();

    const ordenL = [
      { name: 'Occidente', interest:  occidente.future[occidente.future.length - 1].inter},
      { name: 'Atlantida', interest:  atlantida.future[atlantida.future.length - 1].inter},
      { name: 'BAC', interest:  bac.future[bac.future.length - 1].inter},
    ];

    const ordenD = [
      { name: 'Occidente', interest:  occidente.futureD[occidente.futureD.length - 1].inter},
      { name: 'Atlantida', interest:  atlantida.futureD[atlantida.futureD.length - 1].inter},
      { name: 'BAC', interest:  bac.future[bac.futureD.length - 1].inter},
    ];

    setState({ 
      ...state,
      occidente: {  futuresL: occidente.future, futuresD: occidente.futureD },
      atlantida: { futuresL: atlantida.future, futuresD: atlantida.futureD },
      bac: { futuresL: bac.future, futuresD: bac.futureD },
      choiceL: ordenL.sort(ord),
      choiceD: ordenD.sort(ord),
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
        <Taps />
        <Paper className={classes.choices}>
          <Typography variant="body1" align="left">Opciones ordenadas de mejor opcion a opciones menos factible de ahorro.</Typography>
          <Typography variant="body1" align="left">Cuenta de ahorros en lempiras intereses capitalizables.</Typography>
          {
            state.choiceL.map(value => (
              <Typography key={value.interest} variant="body1" align="left">{`${value.name}: ${value.interest} HND.`}</Typography>
            ))
          }
          <Typography variant="body1" align="left">Cuenta de ahorros en Dolares intereses capitalizables.</Typography>
          {
            state.choiceD.map(value => (
              <Typography key={value.name} variant="body1" align="left">{`${value.name}: ${value.interest} USD.`}</Typography>
            ))
          }
        </Paper>
        <Grid container className={classes.rootGrid}>
          <Grid item xs={12}>
            <Grid container justify="center" className={classes.container}>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>BAC</Typography>
                  <Typography variant="body1" align="left">Cuenta de ahorro en lempiras</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.rows}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.bac.futuresL.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitial}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ))
                  }
                  <Typography variant="body1" align="left">Cuenta de ahorro en Dolares</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.bac.futuresD.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitialD}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ))
                  }
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco Atlantida</Typography>
                  <Typography variant="body1" align="left">Cuenta de ahorro en lempiras</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.rows}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.atlantida.futuresL.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitial}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ))
                  }
                  <Typography variant="body1" align="left">Cuenta de ahorro en Dolares</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.atlantida.futuresD.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitialD}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ))
                  }
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <Typography variant="h5" align="center" className={classes.title}>Banco Occidente</Typography>
                  <Typography variant="body1" align="left">Cuenta de ahorro en lempiras</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4} className={classes.rows}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.occidente.futuresL.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitial}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
                    ))
                  }
                  <Typography variant="body1" align="left">Cuenta de ahorro en Dolares</Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Intereses</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2" align="center">Ahorro mensual acumulado</Typography>
                    </Grid>
                  </Grid>
                  {
                    state.occidente.futuresD.map((value, index) => (
                      <Grid container key={index + value.aSM} spacing={3}>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.saveMonthInitialD}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.inter}</Typography>
                          </Paper>
                        </Grid>
                        <Grid item xs={4}>
                          <Paper>
                            <Typography variant="body2" align="center">{value.aSM}</Typography>
                          </Paper>
                        </Grid>
                      </Grid>
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