import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { Navbar } from "../components";
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#233",
    height: "100%",
    width: "100%",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50% , -50%)",
    position: "absolute",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));
export const Contacts = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.container}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            hire or contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="email"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <InputField
            fullWidth={true}
            label="compagny name"
            variant="outlined"
            margin="dense"
            size="medium"
            inputProps={{ style: { color: "white" } }}
          />
          <br />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            className={classes.button}>
            contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
