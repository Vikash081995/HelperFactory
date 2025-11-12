import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import DarkMode from "../Darkmode/DarkMode";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Vj Code Factory</h1>
      <DarkMode />
      <Navbar />
    </div>
  );
};

export default Header;
