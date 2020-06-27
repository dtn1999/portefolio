import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Typed from "react-typed";
import avatar from "../images/avatar.png";

// css style
const useStyles = makeStyles({
  avatar: {
    width: 100,
    height: 100,
    margin: 10,
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    margin: "1rem",
  },
  typedContainrer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
});
export const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainrer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Tchekambou Danyls"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "mobile developpment",
            "web developpment",
            "basic spring developpment",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};
