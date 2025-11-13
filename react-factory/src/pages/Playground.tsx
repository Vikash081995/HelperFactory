// import UseEffectBasicsExample from "../CompleteDemos/Hooks/useEffect/1.UseeffectBasics";
// import SimpleForm from '../CompleteDemos/Forms/1.SimpleForm';
import FormUsingRefs from '../CompleteDemos/Forms/2.FormUsingRefs';
import ConsoleToUi from '../components/ConsoleToUI/ConsoleToUi';
import classes from "./Playground.module.css"

const Playground = () => {
  return (
    <div className={classes.playgroundContainer}>
      {/* <UseEffectBasicsExample /> */}
      {/* <SimpleForm /> */}
      <FormUsingRefs />
      <div className={classes.ConsoleToUi}>
      <ConsoleToUi />
      </div>
    </div>
  );
};

export default Playground;
