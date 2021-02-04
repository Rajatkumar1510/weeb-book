import React from "react";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import useStyles from "./style";
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <a
        href="https://github.com/Rajatkumar1510"
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes.root}>
          <Chip
            className={classes.chip}
            icon={<FaceIcon />}
            label="My GitHub"
            clickable
            style={{
              color: "purple",
              backGroundColor: "black",
              textDecoration: "null",
            }}
          />
        </div>
      </a>
    </>
  );
};

export default Header;
