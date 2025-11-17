/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}

export default function BlogPost() {
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setLoadedData(data);
    });
  }, []);

  return (
    <ul>
      {loadedData.map((data: any) => {
        return <li key={data?.id}>{data?.title}</li>;
      })}
    </ul>
  );
}
