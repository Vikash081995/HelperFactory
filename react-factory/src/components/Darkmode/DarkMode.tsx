import classes from "./DarkMode.module.css";
import { useTheme } from "../../demos/ThemeContext";

const DarkMode = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default DarkMode;
