import { useState } from "react";

import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ContactForm from "./components/ContactForm";

import type { Product } from "./types";

import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 80,
    },
    {
      id: 3,
      name: "Mouse",
      price: 35,
    },
  ]);

  const handleAddProduct = (product: Product): void => {
    setProducts((prevProducts) => [
      ...prevProducts,
      product,
    ]);
  };

  const handleDeleteProduct = (id: number): void => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <main className="container">
      <h1>Products Manager</h1>

      <AddProduct onAdd={handleAddProduct} />

      <ProductList
        products={products}
        onDelete={handleDeleteProduct}
      />

      <ContactForm />
    </main>
  );
}

export default App;