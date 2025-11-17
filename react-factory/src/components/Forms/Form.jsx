import React, { forwardRef } from "react";

const Form = forwardRef(
  (
    {
      onSubmit,
      label,
      type,
      placeholder,
      handleChange,
      SubmitButtonLabel,
      name,
    },
    ref
  ) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit && onSubmit();
    };

    const FormElem = () => {
      switch (type) {
        case "input":
          return (
            <>
              <label htmlFor={label} name={name}>
                {label}
              </label>
              <input
                id={label}
                name={name}
                type={type}
                ref={ref}
                placeholder={placeholder}
                handleChange={handleChange}
              />
              <button type="submit">{SubmitButtonLabel}</button>
            </>
          );
        default:
          return null;
      }
    };

    return <form onSubmit={handleSubmit}>{FormElem()}</form>;
  }
);

export default Form;
