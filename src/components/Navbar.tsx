import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import avatar from "../images/avatar.png";
import { Footer } from "./Footer";

// css styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 259,
    backgroundColor: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: 100,
    height: 100,
  },
  listItem: {
    color: "tan",
  },
}));

type BtnProps = {
  listIcon: any;
  listText: string;
  path: string;
};
const menuItems: BtnProps[] = [
  {
    listIcon: <Home />,
    listText: "Home",
    path: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    path: "/resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    path: "/portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    path: "/contacts",
  },
];

interface State {
  right: boolean;
}
export const Navbar = () => {
  const classes = useStyles();
  const [state, setState] = useState<State>({
    right: false,
  });
  const toggleSlider = (slider: "right", open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider: "right") => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}>
      <Avatar className={classes.avatar} src={avatar} alt="avatar-image" />
      <Divider />
      <List>
        {menuItems.map((item, index) => {
          return (
            <ListItem button key={index} component={Link} to={item.path}>
              <ListItemIcon className={classes.listItem}>
                {item.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={item.listText}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" style={{ backgroundColor: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "tomato" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "tan" }}>
              Portfolio
            </Typography>
            <Typography variant="h5" style={{ color: "red" }}>
              {"<-- currently in developpment -->"}
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}>
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
