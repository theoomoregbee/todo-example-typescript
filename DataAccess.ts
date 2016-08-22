/**
 * Created by SQ04 on 8/22/2016.
 *
 * Theophilus Omoregbee <theo4u@ymail.com>
 */

import  {TodoItem,isExist} from './TodoServices';


export class DataAccess {

      private identifier:string = "todo-theo";


    constructor () {
        //check if it was empty before just store [] inside first
        if(window.localStorage.getItem(this.identifier) == null){
           this.reset();
        }
    }

    addRecord(item:TodoItem): void {
       let obj:TodoItem[] = this.getRecords();
        if(!isExist(obj,'name',item.name)) //don't allow dublicate
           obj.push(item);
        else
            throw  new Error('Duplicate Of Record Found');
        this.saveRecord(obj);
    }

    getRecords():TodoItem[] {
        return  <TodoItem[]> JSON.parse(window.localStorage.getItem(this.identifier));
    }

    saveRecord(obj : TodoItem[]) : void{
        window.localStorage.setItem(this.identifier, JSON.stringify(obj));
      }

      reset():void{
          window.localStorage.setItem(this.identifier,"[]");
      }

    deleteItem(item:TodoItem):void {
        let obj:TodoItem[] = this.getRecords();
        obj =  obj.filter(function (value:TodoItem):boolean {
           return value != item;
       });
       this.saveRecord(obj);
    }

    deleteByIndex(index:number): void {
        let obj:TodoItem[] = this.getRecords();
        obj.splice(index,1);
        this.saveRecord(obj);
    }

    getItem(index:number):TodoItem {
        return this.getRecords()[index];
    }

}