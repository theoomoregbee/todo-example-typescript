/**
 * Created by SQ04 on 8/22/2016.
 * Theophilus Omoregbee <theo4u@ymail.com>
 */
System.register(['./DataAccess'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var DataAccess_1;
    var App;
    return {
        setters:[
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }],
        execute: function() {
            App = (function (_super) {
                __extends(App, _super);
                function App() {
                    _super.call(this);
                    this.totalBadge = document.getElementById('totalBadge');
                    this.input = document.getElementById('input');
                    this.addBtn = document.getElementById('addBtn');
                    this.deleteBtn = document.getElementById('deleteBtn');
                    this.list = document.getElementById('list');
                    //bind events
                    this.bindEvents();
                    //fetch Record
                    this.fetch();
                }
                App.prototype.bindEvents = function () {
                    var _this = this;
                    //()=>{} helps us to access our this of the parent class
                    this.addBtn.addEventListener('click', function () { _this.addTodo(); });
                    this.deleteBtn.addEventListener('click', function () { _this.deleteTodo(); });
                };
                App.prototype.addTodo = function () {
                    console.log('Add TODO', this.input.value);
                    this.addRecord({ name: this.input.value, completed: false, dateAdded: new Date() });
                    this.fetch();
                };
                App.prototype.deleteTodo = function () {
                    console.log('DELETE TODO', this.input);
                };
                App.prototype.fetch = function () {
                    var record = this.getRecords();
                    console.log("Record", this.getRecords());
                    /*
                          let UI ="";
                  
                          for(let value of record){
                               UI +=`<li class="list-group-item">
                                          <input type="checkbox" class="check"> ${value.name} <span class="badge">${value.dateAdded}</span>
                                       </li>`;
                           }
                        this.list.innerHTML = UI;*/
                };
                return App;
            }(DataAccess_1.DataAccess));
            new App();
        }
    }
});
//# sourceMappingURL=app.js.map