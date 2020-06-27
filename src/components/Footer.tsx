import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from "@material-ui/core";
import { Facebook, Twitter, Instagram } from "@material-ui/icons";

// css style
const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: "250px",
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});
export const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer">
      <BottomNavigation style={{ backgroundColor: "#222" }}>
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<Facebook />}
          className={classes.root}
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<Twitter />}
          className={classes.root}
        />
        <BottomNavigationAction
          style={{ padding: 0 }}
          icon={<Instagram />}
          className={classes.root}
        />
      </BottomNavigation>
    </Box>
  );
};
