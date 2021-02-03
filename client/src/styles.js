import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    fontFamily: "Poppins, sansSerif",
    backgroundColor: "#C0C0C0",
    borderRadius: 50,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    position: "bottom",
    display: "flex",
    justifyContent: "center",
    
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.6),
    },
  },
  
  heading: {
    color: "black",
  },
  image: {
    marginLeft: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
