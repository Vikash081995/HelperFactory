import Table from "./Table";

function DataTable() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 5 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => fruit.color,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} key={keyFn} />
    </div>
  );
}

export default DataTable;
