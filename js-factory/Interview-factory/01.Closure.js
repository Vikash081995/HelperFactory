function Outer() {
  const outer = "I am outer";

  return () => {
    console.log(outer);
  };
}

const fn = Outer();
fn();
//I am outer
