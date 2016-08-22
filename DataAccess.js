/**
 * Created by SQ04 on 8/22/2016.
 *
 * Theophilus Omoregbee <theo4u@ymail.com>
 */
System.register(['./TodoServices'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoServices_1;
    var DataAccess;
    return {
        setters:[
            function (TodoServices_1_1) {
                TodoServices_1 = TodoServices_1_1;
            }],
        execute: function() {
            DataAccess = (function () {
                function DataAccess() {
                    this.identifier = "todo-theo";
                    //check if it was empty before just store [] inside first
                    if (window.localStorage.getItem(this.identifier) == null) {
                        this.reset();
                    }
                }
                DataAccess.prototype.addRecord = function (item) {
                    var obj = this.getRecords();
                    if (!TodoServices_1.isExist(obj, 'name', item.name))
                        obj.push(item);
                    else
                        throw new Error('Duplicate Of Record Found');
                    this.saveRecord(obj);
                };
                DataAccess.prototype.getRecords = function () {
                    return JSON.parse(window.localStorage.getItem(this.identifier));
                };
                DataAccess.prototype.saveRecord = function (obj) {
                    window.localStorage.setItem(this.identifier, JSON.stringify(obj));
                };
                DataAccess.prototype.reset = function () {
                    window.localStorage.setItem(this.identifier, "[]");
                };
                DataAccess.prototype.deleteItem = function (item) {
                    var obj = this.getRecords();
                    obj = obj.filter(function (value) {
                        return value != item;
                    });
                    this.saveRecord(obj);
                };
                DataAccess.prototype.deleteByIndex = function (index) {
                    var obj = this.getRecords();
                    obj.splice(index, 1);
                    this.saveRecord(obj);
                };
                DataAccess.prototype.getItem = function (index) {
                    return this.getRecords()[index];
                };
                return DataAccess;
            }());
            exports_1("DataAccess", DataAccess);
        }
    }
});
//# sourceMappingURL=DataAccess.js.map