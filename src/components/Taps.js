import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tables from './Tables';


function createData(of, to, currency, interest) {
  return { of, to, currency, interest };
}

const occidente = [
  createData('500.00', '50,000.00', 'HNL', '3.50%'),
  createData('50,000.01', '100,000.00', 'HNL', '4.50%'),
  createData('100,000.01', '200,000.00', 'HNL', '5.00%'),
  createData('200,000.01', '500,000.00', 'HNL', '5.75%'),
  createData('500,000.01', '1,000,000.00', 'HNL', '6.50%'),
  createData('1,000,000.01', '2,000,000.00', 'HNL', '6.75%'),
  createData('2,000,000.01', '5,000,000.00', 'HNL', '7.25%'),
  createData('5,000,000.01', '10,000,000.00', 'HNL', '7.50%'),
  createData('10,000,000.01', 'en adelante', 'HNL', '8.00%'),
  createData('250.00', '10,000.00', 'USD', '1.20%'),
  createData('10,000.01', '50,000.00', 'USD', '1.90%'),
  createData('50,000.01', '150,000.00', 'USD', '2.75%'),
  createData('150,000.01', 'en adelante', 'USD', '3.50%'),
];

const atlantida = [ 
  createData('0.01', '250.00', 'HNL', '0.10%'),
  createData('250.01', '1,000.00', 'HNL', '0.15%'),
  createData('1,000.01', '5,000.00', 'HNL', '0.25%'),
  createData('5,000.01', '20,000.00', 'HNL', '0.75%'),
  createData('20,000.01', '50,000.00', 'HNL', '1.75%'),
  createData('50,000.01', '100,000.00', 'HNL', '2.75%'),
  createData('100,000.01', '200,000.00', 'HNL', '3.25%'),
  createData('200,000.01', '500,000.00', 'HNL', '4.00%'),
  createData('500,000.01', '1,000,000.00', 'HNL', '5.00%'),
  createData('1,000,000.01', 'en adelante', 'HNL', '5.25%'),
  createData('0.01', '100.00', 'USD', '0.10%'),
  createData('100.01', '3,000.00', 'USD', '0.15%'),
  createData('3,000.01', '10,000.00', 'USD', '0.65%'),
  createData('10,000.01', '25,000.00', 'USD', '1.15%'),
  createData('25,000.01', '50,000.00', 'USD', '1.40%'),
  createData('50,000.01', '100,000.00', 'USD', '2.00%'),
  createData('100,000.01', 'en adelante', 'USD', '2.25%'),
];

const bac = [
  createData('0.00', '1,000.00', 'HNL', '0.00%'),
  createData('1,000.01', '30,000.00', 'HNL', '0.50%'),
  createData('30,000.01', '300,000.00', 'HNL', '1.25%'),
  createData('300,000.01', '600,000.00', 'HNL', '3.00%'),
  createData('600,000.01', '1,000,000.00', 'HNL', '3.50%'),
  createData('1,000,000.01', 'en adelante', 'HNL', '4.00%'),
  createData('0.01', '200.0', 'USD', '0.00%'),
  createData('200.01', '25,000.00', 'USD', '0.25%'),
  createData('25,000.01', '50,000.00', 'USD', '0.90%'),
  createData('50,000.01', '100,000.00', 'USD', '1.40%'),
  createData('100,000.01', '250,000.00', 'USD', '1.65%'),
  createData('250,000.01', 'en adelante', 'USD', '2.00%'),
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="BAC" {...a11yProps(0)} />
          <Tab label="Banco Atlantida" {...a11yProps(1)} />
          <Tab label="Banco Occidente" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Tables data={bac}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Tables data={atlantida}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Tables data={occidente}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}