/**
 * Created by SQ04 on 8/22/2016.
 * Theophilus Omoregbee <theo4u@ymail.com>
 */

import  {TodoItem,dateFormatter} from './TodoServices';
import {DataAccess} from './DataAccess';

class App extends DataAccess{

    totalBadge:HTMLSpanElement;
    input:HTMLInputElement;
    addBtn:HTMLButtonElement;
    deleteBtn:HTMLButtonElement ;
    list:HTMLUListElement;

    constructor (){
        super();
        this.totalBadge =  <HTMLSpanElement> document.getElementById('totalBadge');
        this.input = <HTMLInputElement> document.getElementById('input');
        this.addBtn =  <HTMLButtonElement>  document.getElementById('addBtn');
        this.deleteBtn =  <HTMLButtonElement> document.getElementById('deleteBtn');
        this.list =  <HTMLUListElement>  document.getElementById('items');

        //bind events
         this.bindEvents();

        //fetch Record
        this.fetch();
    }


    bindEvents() : void {
       //()=>{} helps us to access our this of the parent class
        this.addBtn.addEventListener('click', ()=>{this.addTodo()});
        this.deleteBtn.addEventListener('click', ()=>{ this.deleteTodo()});
       }


    addTodo(): void {
         if(this.input.value=="")
             throw new Error('Input Is Required');
        this.addRecord({name:this.input.value, completed:false, dateAdded:new Date()});
        this.fetch();
    }

    deleteTodo(): void {
        console.log('DELETE TODO',this.input);
    }

    fetch() : void {
        let record : TodoItem[] = this.getRecords();
        let UI = "";
        for(let value of record)
             UI +=`<li class="list-group-item">
                      <input type="checkbox" class="check"> ${value.name} <span class="badge">${dateFormatter(new Date(value.dateAdded.toString()))}</span>
                   </li>`;

        this.list.innerHTML = UI;
    }

}

new App();