import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    position: "bottom",
    display: "flex",
    justifyContent: "center",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.6),
    },
  },
}));
