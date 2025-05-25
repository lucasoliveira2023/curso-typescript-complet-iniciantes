
//let age: number = 5;
const firstName: string = "John";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["John", "Jane"];

//tuple

const person: [number, string, boolean] = [1, "John", true];

//lista de tuplas

const people: [number, string][] = [
    [1, "John"],
    [2, "Jane"],
    [3, "Doe"],
]

//instersections
const productId: string | number = 123;

// Enum

enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Left;

const productName: any = 'Boné'

//let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);