// interface.ts
/*
The first part of will require that you build an interface and a type. Inside a file named interface.ts:

Create a type RowID and set it equal to number
Create an interface RowElement that contains these 3 fields:
firstName: string
lastName: string
age?: number
*/

type RowID = number;

interface RowElement {
firstName: string;
lastName: string;
age?: number;
}

export {RowElement, RowID};