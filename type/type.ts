// 1. string type alias
type Name = string;

const personName: Name = "John Doe";  // Works fine
// const invalidName: Name = 123; // Error: Type 'number' is not assignable to type 'string'.

// 2. number type alias
type Age = number;

const userAge: Age = 25;  // Works fine
// const invalidAge: Age = "25"; // Error: Type 'string' is not assignable to type 'number'.

// 3. boolean type alias
type IsActive = boolean;

const isUserActive: IsActive = true;  // Works fine
// const invalidActiveStatus: IsActive = "yes"; // Error: Type 'string' is not assignable to type 'boolean'.

// 4. null type alias
type NullableString = string | null;

const name: NullableString = "John";  // Works fine
const nothing: NullableString = null;  // Works fine
// const invalidValue: NullableString = 123; // Error: Type 'number' is not assignable to type 'string | null'.

// 5. undefined type alias
type OptionalNumber = number | undefined;

const num: OptionalNumber = 5; // Works fine
const noNum: OptionalNumber = undefined; // Works fine
// const invalidNum: OptionalNumber = "test"; // Error: Type 'string' is not assignable to type 'number | undefined'.

// 6. any type alias
type Anything = any;

const anythingValue: Anything = "string";  // Works fine
const anotherValue: Anything = 123;  // Works fine
const yetAnother: Anything = { key: "value" };  // Works fine

// 7. void type alias for functions that don't return anything
type VoidFunction = () => void;

const logMessage: VoidFunction = () => {
  console.log("Hello World");
};

logMessage();  // Works fine

// 8. never type alias for functions that never return (e.g., always throw errors)
type ThrowError = () => never;

const throwError: ThrowError = () => {
  throw new Error("This is an error");
};

throwError();  // This will throw an error

// 9. bigint type alias for large integers
type LargeNumber = bigint;

const bigNumber: LargeNumber = 1234567890123456789012345678901234567890n;  // Works fine
// const smallNumber: LargeNumber = 100; // Error: Type 'number' is not assignable to type 'bigint'.

// 10. Union Types (accepting multiple types)
type StringOrNumber = string | number;

const value1: StringOrNumber = "Hello";  // Works fine
const value2: StringOrNumber = 100;  // Works fine
// const value3: StringOrNumber = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

// 11. Literal Types (restricting to specific values)
type Direction = "north" | "south" | "east" | "west";

const myDirection: Direction = "north";  // Works fine
// const invalidDirection: Direction = "up"; // Error: Type '"up"' is not assignable to type 'Direction'.

// 12. Tuple Types (fixed length and types for arrays)
type Point = [number, number];

const point1: Point = [10, 20];  // Works fine
// const invalidPoint: Point = [10, "20"]; // Error: Type 'string' is not assignable to type 'number'.

// 13. Intersection Types (combining multiple types)
type NameAndAge = { name: string } & { age: number };

const person: NameAndAge = { name: "John", age: 30 };  // Works fine

// 14. Function Types (defining a function signature)
type Greet = (name: string) => string;

const greetUser: Greet = (name) => `Hello, ${name}!`;  // Works fine
// const invalidGreet: Greet = (age) => `Hello, ${age}!`; // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

