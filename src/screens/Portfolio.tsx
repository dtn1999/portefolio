import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import reactRedux from "../images/react-redux.jpeg";
import reactNative from "../images/react-native.png";
import matlab from "../images/matlab.jpg";
import springBoot from "../images/spring-boot.jpg";

import { Navbar } from "../components";

const useStyles = makeStyles({
  mainContainer: {
    background: "#2333",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
});
export const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* project one */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="image gallery app"
              height="140"
              image={reactRedux}
            />
            <CardContent>
              <CardActionArea>
                <Typography gutterBottom variant="h5">
                  Image Gallery
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is a small Image gallery app , wich use and
                  unsplash api to fetch images and display them in a grid, the
                  user can also search for images and the result will be display
                  as a Grid , the app is responsive and was build with mobile
                  first approch. The technology use here is react and redux for
                  state management , the redux-saga was used as redux middleware
                </Typography>
              </CardActionArea>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 2 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="expense tracker app"
              height="140"
              image={reactNative}
            />
            <CardContent>
              <CardActionArea>
                <Typography gutterBottom variant="h5">
                  Expense Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is a small Expense Tracker app , developpe with
                  react-native, It help the user to keep track on all their
                  expenses, the user can keep all their bills , can view the
                  historique of the expenses, and can also schedule and on
                  Comming expense or income, the use App use and serverless
                  approch for the backend logic and database operations are take
                  care by firebase functions and real time database, The
                  authentication is make using Expo authentication
                </Typography>
              </CardActionArea>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* project 3 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardMedia
              component="img"
              alt="secured rest api"
              height="140"
              image={springBoot}
            />
            <CardContent>
              <CardActionArea>
                <Typography gutterBottom variant="h5">
                  Secured REST API
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is a Secured RestAPI . The Api can be used to
                  authentication and finally to post and retrieved data . The
                  API is really sinple and just allow user to Authenticate
                  theirself , to post Todos , to fetch todos, to update their
                  Todos,
                </Typography>
              </CardActionArea>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="matlab extraction tools"
                height="140"
                image={matlab}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Work (extraction tools)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This project is not public. It a Project for work. I Build and
                  small matlab Application to help me automate the Extraction
                  Process of Capacity test and QOCV data. the Project also
                  Present a part for DVA analysis and Plot generation
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
