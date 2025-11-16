/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const useToggle = (defaultValue:any) => {
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    setShow(!show);
  };

  return { show, toggle };
};

export default useToggle;
