import CheckOutForm from "../demos/Forms/8.CheckOutForm";
import CheckBoxForm from "../demos/Forms/9.CheckBoxForm";
import ConsoleToUi from "../components/ConsoleToUI/ConsoleToUi";
import classes from "./Playground.module.css";
// import MultiInputForm from "../CompleteDemos/Forms/6.MultiInputForm"

const Playground = () => {
  return (
    <div className={classes.playgroundContainer}>
      {/* <MultiInputForm /> */}
      {/* <CheckOutForm /> */}
      <CheckBoxForm />
      <div className={classes.ConsoleToUi}>
        <ConsoleToUi />
      </div>
    </div>
  );
};

export default Playground;
