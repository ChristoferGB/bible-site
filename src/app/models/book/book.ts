import { Abbrev } from "../abbrev/abbrev";

export class Book {
    abbrev: Abbrev = new Abbrev;
    author: string = "";
    chapters: number = 0;
    group: string = "";
    name: string = "";
    testament: string = "";
}
