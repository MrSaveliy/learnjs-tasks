let date = new Date(2012, 0, 3);
let list_day = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','ВС'];
function getWeekDay(date) {
    let day = date.getDay();
    return list_day[day-1];
}

console.log(  getWeekDay(date) )