import { useEffect, useState } from "react";

const Todo = () => {
  const [data, setData] = useState([]);

  const getTodo = async () => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10`
      );
      data = await data.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <h1> todo </h1>
      <button onClick={getTodo}>fetch</button>
      <div>
        {data.map((data) => (
          <div
            style={{ display: "flex", gap: "1rem", margin: "0.5rem" }}
            key={data.id}
          >
            <div> {data.id}</div>
            <div> {data.title}</div>
            <div>{data.status ? "done" : "not done"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Todo;
