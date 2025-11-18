/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeferredValue, useState, useMemo } from "react";

const items = Array.from({ length: 5000 }, (_, i) => `Item ${i}`);

export default function DefferedSearchExample() {
  const [search, setSearch] = useState("");
  const defferedSearch = useDeferredValue(search);
  const filteredItems = useMemo(() => {
    console.log("Filterinng.....");
    return items.filter((item) =>
      item.toLowerCase().includes(defferedSearch.toLowerCase())
    );
  }, [defferedSearch]);

  return (
    <div>
      <h2>Search </h2>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
      />
      <p>Immediate value :{search}</p>
      <p>Deffered value: {defferedSearch}</p>
      <ul style={{ maxHeight: 300, overflow: "auto" }}>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
