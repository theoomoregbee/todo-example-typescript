/**
 * Created by SQ04 on 8/22/2016.
 * Theophilus Omoregbee
 */

export interface TodoItem {
        name:string;
        dateAdded:Date;
        completed:boolean;
}

export function dateFormatter(date:Date):string{
    let monthNames:string[] = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December" ];

    let monthIndex:number = date.getMonth();
    var year = date.getFullYear();

    return `${date.getDate()} ${monthNames[monthIndex].substring(0,3)} ${year}`;

}