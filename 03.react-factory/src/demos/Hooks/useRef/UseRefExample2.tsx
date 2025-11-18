import { useRef, useState } from "react";

function UseRefExample2() {
  const imgRef = useRef(null);
  const mouseOverCnt = useRef(0);

  return (
    <div>
      <img
        src=""
        ref={imgRef}
        style={{ filter: "greyscale(100%)" }}
        onMouseOver={() => {
          imgRef?.current?.style?.filter = "grayscale(0%)";
          mouseOverCnt.current++;
        }}
        onMouseOut={() => {
          imgRef?.current?.filter = "grayscale(100%)";
        }}
      />
      <hr />
      <button onClick={() => alert("Registered!" + mouseOverCnt.current)}>
        Register
      </button>
    </div>
  );
}

export default UseRefExample2;
