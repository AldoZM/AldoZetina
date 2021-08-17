import React, { Fragment, useEffect, useState } from "react";



const Table = () => {
  const [prods, setTable] = useState([]);

  const getTable = async () => {
    try {
      const response = await fetch("http://localhost:3000/inventario");
      //console.log(response);
      const jsonData = await response.json();
      //console.log("hola");
      setTable(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTable();
  }, []);

  console.log(prods);

  return (
    <Fragment>
      {" "}
      <table className="table table-bordered table-dark mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Código de barras</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Utilidad</th>
          </tr>
        </thead>
        <tbody>
          {prods.map(prod => (
            <tr key={prod.prod_id}>
                <td>{prod.id_producto}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.codigo_barras}</td>
                <td>{prod.marca}</td>
                <td>{prod.precio}</td>
                <td>{prod.utilidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;
