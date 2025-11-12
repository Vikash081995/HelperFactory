import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Link className={classes.playground} to="/playground">
      {" "}
      Go to PlayGround
    </Link>
  );
};

export default Navbar;
