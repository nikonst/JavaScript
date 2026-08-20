import { useEffect, useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Keyboard', selected: false },
  { id: 2, name: 'Mouse', selected: false },
  { id: 3, name: 'Monitor', selected: false },
]

export default function ProductList() {

  const [products, setProducts] = useState(initialProducts)
  const [selectedCount, setSelectedCount] = useState(0)

  useEffect(() => {
    setSelectedCount(
      products.filter(product => product.selected.length)
    )
  }, [selectedCount])

  function selectProduct(id) {
    const product = products.find(product => product.id === id)

    product.selected = !product.selected

    setProducts(prev => ({ ...prev, product }));
  }

  function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id)

    products.splice(index, 1)

    setProducts(prev => [
      ...prev,
      products,
    ])
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          <span onClick={selectProduct(product.id)}>
            {product.name}
          </span>

          <button onClick={deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}

      <p>Selected: {selectedCount}</p>
    </div>
  )
}