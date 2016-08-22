/**
 * Created by SQ04 on 8/22/2016.
 * Theophilus Omoregbee
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function dateFormatter(date) {
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"];
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        return date.getHours() + ":" + date.getMinutes() + ", " + date.getDate() + " " + monthNames[monthIndex].substring(0, 3) + " " + year;
    }
    exports_1("dateFormatter", dateFormatter);
    /**
     * Checks for the existence of a property with a value inside our array of object
     * @param obj
     * @param element
     * @param value
     */
    function isExist(obj, element, value) {
        for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
            var o = obj_1[_i];
            if (o[element] == value)
                return true;
        }
        return false;
    }
    exports_1("isExist", isExist);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=TodoServices.js.map