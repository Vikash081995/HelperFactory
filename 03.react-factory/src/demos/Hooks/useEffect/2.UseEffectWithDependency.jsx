import { useState, useEffect } from "react";

const DataFetchingExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const resData = response.json();
        setData(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>Data fetching demo</h3>
      <ul className="users">
        {data.map((user) => {
          const { d, login, image, url } = user;
          return (
            <li key={user.id}>
              <img src={url} />
              <div>
                <h5>{login}</h5>
                <a href={url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DataFetchingExample;
