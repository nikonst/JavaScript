import { useState } from 'react'

const initialProducts = [
  { id: 1, name: 'Keyboard', selected: false },
  { id: 2, name: 'Mouse', selected: false },
  { id: 3, name: 'Monitor', selected: false },
]

export default function ProductListFixed() {
  const [products, setProducts] = useState(initialProducts)

  const selectedCount = products.filter(
    (product) => product.selected
  ).length

  function selectProduct(id) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, selected: !product.selected }
          : product
      )
    )
  }

  function deleteProduct(id) {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    )
  }

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <span onClick={() => selectProduct(product.id)}>
            {product.name}
          </span>

          <button onClick={() => deleteProduct(product.id)}>
            Delete
          </button>
        </div>
      ))}

      <p>Selected: {selectedCount}</p>
    </div>
  )
}

// 1. Υπάρχει mutation;
// 2. Υπάρχει redundant state;
// 3. Χρειάζεται όντως useEffect;
// 4. Το dependency array είναι σωστό;
// 5. Το onClick περνά function ή την εκτελεί τώρα;
// 6. Για add/delete/update χρησιμοποιώ το σωστό pattern;


// Function / Hooks              Class

// props                         this.props
// useState                      this.state
// setState hook                 this.setState()

// useEffect([], ...)            componentDidMount
// useEffect([x], ...)           componentDidUpdate
// effect cleanup                componentWillUnmount

// useRef                        React.createRef()
// ref.current                   this.ref.current

// Κανόνας:

// χωρίς argument → onClick={fn}
// με argument    → onClick={() => fn(arg)}

// Κανόνας:

// χωρίς argument → onClick={fn}
// με argument    → onClick={() => fn(arg)}

// ADD
// setItems(prev => [...prev, newItem])

// DELETE
// setItems(prev => prev.filter(item => item.id !== id))

// UPDATE
// setItems(prev =>
//   prev.map(item =>
//     item.id === id
//       ? { ...item, changed: value }
//       : item
//   )
// )


