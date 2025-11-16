/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useEffect } from "react";

const UseRefExample = () => {
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = refContainer?.current?.value;
    console.log(name);
  };
  useEffect(() => {
    refContainer.current.focus();
  });

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = false;
      return;
    }
  }, [value]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={refContainer} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
