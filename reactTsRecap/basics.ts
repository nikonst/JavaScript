// ========================================
// 1. BASIC TYPES
// ========================================

const username: string = "Nikos";
const age: number = 40;
const active: boolean = true;

console.log(username, age, active);


// ========================================
// 2. TYPE INFERENCE
// ========================================

const city = "Athens";

// TypeScript understands:
// city: string

// city = 123; // ERROR


// ========================================
// 3. ARRAYS
// ========================================

const numbers: number[] = [1, 2, 3, 4];

const names: string[] = [
  "John",
  "Maria",
  "Alex",
];

console.log(numbers);
console.log(names);


// ========================================
// 4. OBJECT TYPES
// ========================================

const user: {
  id: number;
  name: string;
  active: boolean;
} = {
  id: 1,
  name: "John",
  active: true,
};

console.log(user);


// ========================================
// 5. INTERFACE
// ========================================

interface Product {
  id: number;
  name: string;
  price: number;
  available?: boolean;
}

const laptop: Product = {
  id: 1,
  name: "Laptop",
  price: 1200,
};

const mouse: Product = {
  id: 2,
  name: "Mouse",
  price: 30,
  available: true,
};

console.log(laptop);
console.log(mouse);


// ========================================
// 6. FUNCTIONS
// ========================================

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));


// Function returning nothing useful:

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Hello TypeScript");


// ========================================
// 7. ARROW FUNCTIONS
// ========================================

const multiply = (
  a: number,
  b: number
): number => {
  return a * b;
};

console.log(multiply(4, 5));


// ========================================
// 8. OPTIONAL PARAMETERS
// ========================================

function greet(
  name: string,
  title?: string
): string {

  if (title) {
    return `Hello ${title} ${name}`;
  }

  return `Hello ${name}`;
}

console.log(greet("Nikos"));
console.log(greet("Nikos", "Mr"));


// ========================================
// 9. DEFAULT PARAMETERS
// ========================================

function calculatePrice(
  price: number,
  tax: number = 0.24
): number {
  return price + price * tax;
}

console.log(calculatePrice(100));


// ========================================
// 10. UNION TYPES
// ========================================

let id: number | string;

id = 100;
id = "ABC-100";

console.log(id);


// ========================================
// 11. TYPE ALIAS
// ========================================

type Status =
  | "loading"
  | "success"
  | "error";

let status: Status = "loading";

status = "success";

// status = "banana"; // ERROR

console.log(status);


// ========================================
// 12. ARRAY OF OBJECTS
// ========================================

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
  {
    id: 2,
    name: "Mouse",
    price: 35,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 80,
  },
];

console.log(products);


// ========================================
// 13. MAP
// ========================================

const productNames: string[] =
  products.map((product) => product.name);

console.log(productNames);


// ========================================
// 14. FILTER
// ========================================

const expensiveProducts: Product[] =
  products.filter(
    (product) => product.price > 50
  );

console.log(expensiveProducts);


// ========================================
// 15. FIND
// ========================================

const foundProduct: Product | undefined =
  products.find(
    (product) => product.id === 2
  );

console.log(foundProduct);


// ========================================
// 16. GENERICS
// ========================================

function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = getFirst<number>([
  10,
  20,
  30,
]);

const firstName = getFirst<string>([
  "John",
  "Maria",
]);

console.log(firstNumber);
console.log(firstName);


// ========================================
// 17. ENUM
// ========================================

enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const role: UserRole = UserRole.Admin;

console.log(role);


// ========================================
// 18. NULL
// ========================================

let selectedProduct: Product | null = null;

selectedProduct = laptop;

console.log(selectedProduct);


// ========================================
// 19. UNKNOWN
// ========================================

let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


// ========================================
// 20. DESTRUCTURING
// ========================================

const {
  name,
  price,
}: Product = laptop;

console.log(name, price);


// ========================================
// 21. SPREAD
// ========================================

const updatedLaptop: Product = {
  ...laptop,
  price: 999,
};

console.log(updatedLaptop);


// ========================================
// 22. TYPED CALLBACK
// ========================================

function processProducts(
  items: Product[],
  callback: (product: Product) => void
): void {

  items.forEach(callback);
}

processProducts(
  products,
  (product) => {
    console.log(product.name);
  }
);