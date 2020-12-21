export class Car {
    id?:number;
    name?:string;
    brand?:string;
    price?:any;
    year?:string;
    description?:string;
    constructor (args: Car={}){
        this.name=args.name;
        this.brand=args.brand;
        this.price=args.price;
        this.year=args.year;
        this.description=args.description;
    }

}
