/**
 * Created by SQ04 on 8/22/2016.
 *
 * Theophilus Omoregbee <theo4u@ymail.com>
 */

interface  window{
    localStorage:any;
}

class DataAccess {
      private  records : TodoItem[];
      private identifier:string = "todo-theo";
      private  window : window;

    addRecord(item:TodoItem):void{
      this.records.push(item);
      this.saveRecord();
    }

    getRecords():TodoItem[] {
        let record = this.window.localStorage.getItem(this.identifier);
        this.records = <TodoItem[]> JSON.parse(record);
        return this.records;
    }

    saveRecord(): void {
        let record:string =  JSON.stringify(this.records);
        this.window.localStorage.setItem(this.identifier, record);
    }


    deleteItem(item:TodoItem):void {
        this.records =  this.records.filter(function (value:TodoItem):boolean {
           return value != item;
       });
       this.saveRecord();
    }

    deleteByIndex(index:number): void {
     this.records.splice(index,1);
        this.saveRecord();
    }

    getItem(index:number):TodoItem {
        return this.records[index];
    }

}