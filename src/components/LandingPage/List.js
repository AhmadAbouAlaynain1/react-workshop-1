import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const List = () => {
  const [todos, setTodos] = useState([]);
  // Get Request on render of component and assigning it to state
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        console.log(resp);
        setTodos(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="container">
      <DataTable value={todos}>
        <Column field="id" header="ID"></Column>
        <Column field="title" header="Title"></Column>
        <Column field="body" header="Body"></Column>
      </DataTable>
    </section>
  );
};

export default List;
