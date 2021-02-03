import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      // backgroundColor: "#37B9F1",
    },
  },
  paper: {
    borderRadius : "25px",
    padding: theme.spacing(2),
    backgroundColor: "#F7F7FE",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
    color: "#F7F7E",
    backgroundColor: "#6A26CD",
  },
  buttonClear: {
    color: "#6A26CD",
    backgroundColor: "#100F10",
  },
}));
