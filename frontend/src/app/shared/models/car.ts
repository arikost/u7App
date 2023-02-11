import { Order } from "./order";

export class Car{
  id!:string;
  number!:string;
  type!:'big'|'small';
  manufacturer!:string;
  engineType!:'diesel'|'gasoline'|'hybrid';
  schedule?:Order[];
}
