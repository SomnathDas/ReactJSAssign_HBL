import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";

function App() {
  // Table data -> Array of Objects
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  // Fetching Data from the API
  const getData = async () => {
    setIsLoading(true);
    const rand = Math.floor(Math.random() * 81) + 1;
    const res = await fetch(`https://swapi.dev/api/people/${rand}`);
    const data = await res.json();
    setTableData([
      ...tableData,
      { name: data.name === "" ? "Does not exist" : data.name, id: rand },
    ]);
    setIsLoading(false);
  };

  // Delete "this" element from tableData
  const onDelete = (e) => {
    let siblingData = e.target.parentElement.childNodes[0].data;
    let array = [...tableData];
    let index = array.findIndex((x) => x.name === siblingData);
    if (index !== -1) {
      array.splice(index, 1);
      setTableData([...array]);
    }
  };

  return (
    <div className="App">
      <button
        onClick={getData}
        className="primaryBtn"
        disabled={isLoading ? true : false}
      >
        {isLoading ? <Loader /> : "Add"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length !== 0 ? (
            tableData.map((elem) => {
              return (
                <tr key={Math.floor(Math.random() * 12457)}>
                  <td>
                    {elem.name}
                    <button onClick={onDelete} className="deleteBtn">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h2>Empty</h2>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
