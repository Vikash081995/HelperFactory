import React, { useState } from "react";

const TextAreaForm = () => {
  const [text, setText] = useState("");

  return (
    <>
      <div>TextAreaForm</div>
      <label>Write here:</label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </>
  );
};

export default TextAreaForm;
