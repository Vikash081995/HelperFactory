// import UseEffectBasicsExample from "../CompleteDemos/Hooks/useEffect/1.UseeffectBasics";
// import SimpleForm from '../CompleteDemos/Forms/1.SimpleForm';
// import FormUsingRefs from '../CompleteDemos/Forms/2.FormUsingRefs';
// import MultiUseEffect from '../CompleteDemos/Hooks/useEffect/3.MultipleUseEffect';
import ConsoleToUi from "../components/ConsoleToUI/ConsoleToUi";
import classes from "./Playground.module.css";

// import CleanUpFunction from "../CompleteDemos/Hooks/useEffect/4.CleanUpFunction";
const Playground = () => {
  return (
    <div className={classes.playgroundContainer}>
      {/* <CleanUpFunction /> */}
      {/* <MultiUseEffect /> */}
      {/* <UseEffectBasicsExample /> */}
      {/* <SimpleForm /> */}
      {/* <FormUsingRefs /> */}
      <div className={classes.ConsoleToUi}>
        <ConsoleToUi />
      </div>
    </div>
  );
};

export default Playground;
