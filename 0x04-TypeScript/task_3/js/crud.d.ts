// crud.d.ts
/*
Write an ambient file within task_3/js, 
named crud.d.ts 
containing the type declarations for each crud function.
At the top of the file import RowID and RowElement from interface.ts
*/

/// <reference path="./interface.ts" />

import {RowID, RowElement} from interface.ts

declare module './crud.js'{
    function insertRow(row: RowElement): RowID;
    function deleteRow(rowID: RowID): void;
    function updateRow(rowID: RowID, row:RowElement): RowID;
}

