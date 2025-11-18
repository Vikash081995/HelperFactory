/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const CheckOutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newErrors = {
      name: "",
      email: "",
      address: "",
    };
    if (!formData.name.trim()) newErrors.name = "name is required";
    if (!formData.email.trim()) newErrors.email = "email is required";
    if (!formData.address.trim()) newErrors.address = "address is required";
    setErrors(newErrors);
    console.log(formData.name, formData.email, formData.address);
  };

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      {errors.name && <p>{errors.name}</p>}
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <label>Address:</label>
      <input
        type="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter your address"
      />
      {errors.address && <p>{errors.address}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckOutForm;
