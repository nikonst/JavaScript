import type { Product } from "../types";

interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

function ProductList({ products, onDelete }: ProductListProps) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div className="product" key={product.id}>
          <div>
            <strong>{product.name}</strong>
            <p>€{product.price.toFixed(2)}</p>
          </div>

          <button onClick={() => onDelete(product.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;