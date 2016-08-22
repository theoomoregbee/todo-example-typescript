/**
 * Created by SQ04 on 8/22/2016.
 *
 * Theophilus Omoregbee <theo4u@ymail.com>
 */
var DataAccess = (function () {
    function DataAccess() {
        this.identifier = "todo-theo";
    }
    DataAccess.prototype.addRecord = function (item) {
        this.records.push(item);
        this.saveRecord();
    };
    DataAccess.prototype.getRecords = function () {
        var record = this.window.localStorage.getItem(this.identifier);
        this.records = JSON.parse(record);
        return this.records;
    };
    DataAccess.prototype.saveRecord = function () {
        var record = JSON.stringify(this.records);
        this.window.localStorage.setItem(this.identifier, record);
    };
    DataAccess.prototype.deleteItem = function (item) {
        this.records = this.records.filter(function (value) {
            return value != item;
        });
        this.saveRecord();
    };
    DataAccess.prototype.deleteByIndex = function (index) {
        this.records.splice(index, 1);
        this.saveRecord();
    };
    DataAccess.prototype.getItem = function (index) {
        return this.records[index];
    };
    return DataAccess;
}());
//# sourceMappingURL=DataAccess.js.map