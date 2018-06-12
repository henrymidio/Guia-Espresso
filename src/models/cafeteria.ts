export class Cafeteria {

    constructor(fields: any) {
        for (const f in fields) {
            this[f] = fields[f];
        }
    }

}

export interface Cafeteria {
    [prop: string]: any;
}