import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [inputData, setInputData] = useState("");
  const baseUrl = "https://dummyjson.com/products";

  const fetchData = async () => {
    await fetch(baseUrl)
      .then((data) => data.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    fetchData();
  }, [baseUrl]);

  let filteredProducts = products.filter((product) => {
    return product.title.startsWith(inputData);
  });
  if (filteredProducts.length == 0) {
    return (
      <div>
        <input type="text" onChange={(e) => setInputData(e.target.value)} />
        <div>No data available</div>
      </div>
    );
  }
  return (
    <div>
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <div>
        {filteredProducts.map((filteredProduct) => {
          return <div>{filteredProduct.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
