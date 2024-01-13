import { useEffect, useState } from "react";
import axios from "axios";


import { Create } from "./components/create";
import { Table } from "./components/table";

function App() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(response => {
        setProdutos(response.data);
        // setProdutos(produto => [...produto.map(pro => pro.edit = false)]);
      })
      .catch(error => console.log(error));
    let editProdutos = produtos;
    editProdutos.map(produto => {
      produto.edit = false;
    });
    setProdutos(editProdutos);
  }, []);

  return (
    <>
      <br />
      <Create produtos={produtos} setProdutos={setProdutos} />
      <br />
      <Table produtos={produtos} setProdutos={setProdutos} />
    </>
  );
}

export default App;
