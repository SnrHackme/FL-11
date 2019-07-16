function getNumbers(string) {
    let arr = string.split('');
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}
function findTypes() {
    let res = {};
    for(let i = 0; i < arguments.length;i++) {
        if(res.hasOwnProperty(typeof arguments[i])) { 
            res[typeof arguments[i]]++;
        } else {
            res[typeof arguments[i]] = 1;
        }
    }
    return res;
}
function executeforEach (arr,funct) {
    for(let i = 0; i < arr.length;i++) {
        funct(arr[i]);
    }
}
function mapArray(arr,funct) {
    let newArr = [];
    executeforEach(arr,function(el) {
        newArr.push(funct(el));
    });
    return newArr;
}
function filterArray(arr,funct) {
    let newArr = [];
    executeforEach(arr,function(el){
        if(funct(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}
function showFormattedDate(date) {
    let substringValue = 4;
    return `Date: ${date.toDateString().substring(substringValue)}`;
}
function canConvertToDate(date) {
    date = new Date(date).toString();
    return date !== 'Invalid Date'
}
function daysBetween(date1,date2) {
    let msInDay = 86400000;
    return Math.abs(Math.round((date1.getTime()-date2.getTime()) / msInDay));
}
function getAmountOfAdultPeople(data) {
    let count = 0;
    let daysInAdult = 6570;
    filterArray(data, function(el) {
        if(daysBetween(new Date(el[' birthday ']), new Date()) > daysInAdult) {
            count++;
        }
    });
    return count;
}
function keys(obj) {
    let arr = [];
    for(let item in obj) {
        if({}.hasOwnProperty.call(obj, item)) {
        arr.push(item);
        }
    }
    return arr;
}
function values(obj) {
    let arr = [];
    for(let item in obj) {
        if({}.hasOwnProperty.call(obj, item)) {
        arr.push(obj[item]);
        }
    }
    return arr;
}