import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CreditCard from "../payment-part/Credit-debit-part/CreditCard";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51I22cQCaWFGsvtdEfb2CufX4hsg8FIpQ5vONQm1YJMckHcuXeWk7tCQqqIF2nCHthPc15ruvVtdRxOPqeeqvCflL00nS8WYcTk"
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    marginTop: 100,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 170,
  },
  tab1: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tab2: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tab3: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tab4: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tab5: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tab6: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  tabPanel: {
    flexGrow: 1,
  },

}));

export default function VerticalTabs({ handleNext, handleBack }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className={`${classes.root} `}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab className={`${classes.tab1} tab1`} label="Credit/Debit Card" {...a11yProps(0)} />
          <Tab className={`${classes.tab1} tab1`} label="Bank Transfer" {...a11yProps(1)} />
          <Tab className={`${classes.tab1} tab1`} label="ATM" {...a11yProps(2)} />
          <Tab className={`${classes.tab1} tab1`} label="BKASH" {...a11yProps(3)} />
          <Tab className={`${classes.tab1} tab1`} label="Nogod" {...a11yProps(4)} />
          <Tab className={`${classes.tab1} tab1`} label="Rocket" {...a11yProps(5)} />
        </Tabs>
        <div >
          <TabPanel value={value} index={0}>
            <Elements stripe={stripePromise}>
              <CreditCard handleBack={handleBack} handleNext={handleNext} />
            </Elements>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Coming soon
          </TabPanel>
          <TabPanel value={value} index={2}>
            Coming soon
          </TabPanel>
          <TabPanel value={value} index={3}>
            Coming soon
          </TabPanel>
          <TabPanel value={value} index={4}>
            Coming soon
          </TabPanel>
          <TabPanel value={value} index={5}>
            Coming soon
          </TabPanel>
          <TabPanel value={value} index={6}>
            Coming soon
          </TabPanel>
        </div>
      </div>
    </React.Fragment>
  );
}
