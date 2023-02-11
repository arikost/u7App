import { Time } from "@angular/common";

export class Order{
  username!:string;
  dateStart!:string;
  timeStart!:number;
  dateEnd!:string;
  timeEnd!:number;
  carSize!: 'big'|'small';
  isProvided?:boolean;
}
