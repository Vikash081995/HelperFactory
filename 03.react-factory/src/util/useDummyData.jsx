import { useId } from "react";

export const useDummyData = () => {
  const id = useId();

  const Categories = [
    {
      id,
      name: "Fruits",
      items: ["Apple", "Banana", "Cherry"],
    },

    { id, name: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  ];

  const NestedCategories = [
    {
      name: "Electronics",
      subcategories: [
        { name: "Phones", subcategories: [] },
        {
          name: "Laptops",
          subcategories: [{ name: "Gaming Laptops", subcategories: [] }],
        },
      ],
    },
    {
      name: "Clothing",
      subcategories: [
        { name: "Men", subcategories: [] },
        { name: "Women", subcategories: [] },
      ],
    },
  ];

  const LoginFormData = [
    {
      id,
      label: "User Name",
      type: "text",
      name: "username",
      placeholder: "Enter UserName",
    },
    {
      id,
      label: "Email",
      type: "text",
      name: "email",
      placeholder: "Enter Email",
    },
    {
      id,
      label: "Password",
      type: "text",
      name: "password",
      placeholder: "Enter Password",
    },
  ];

  const usersData = [
    {
      name: "Alice Doe",
      email: "alice@example.com",
      tasks: ["Buy groceries", "Finish React project"],
      role: [],
    },
  ];
  const tasks = [
    {
      id,
      task: "1",
      status: "inprogess",
      duedate: "12.34.3030",
      assignedDate: "",
      assignedTo: "",
      assignedBy: "",
      user: "",
    },
    {
      id,
      task: "1",
      status: "inprogess",
      duedate: "12.34.3030",
      assignedDate: "",
      assignedTo: "",
      assignedBy: "",
      user: "",
    },
    {
      id,
      task: "1",
      progress: "inprogess",
      duedate: "12.34.3030",
      assignedDate: "",
      assignedTo: "",
      assignedBy: "",
      user: "",
    },
  ];
  return { Categories, NestedCategories, LoginFormData, usersData ,tasks};
};
