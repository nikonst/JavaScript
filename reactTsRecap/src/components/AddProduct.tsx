import { useState } from "react";
import type { FormEvent } from "react";
import type { Product } from "../types";

interface AddProductProps {
  onAdd: (product: Product) => void;
}

function AddProduct({ onAdd }: AddProductProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !price) {
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
    };

    onAdd(newProduct);

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Product</h2>

      <label>
        Product name
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>

      <button type="submit">Add product</button>
    </form>
  );
}

export default AddProduct;