
// Utility function to format the date into the same format as the
// returned JSON so I can filter.
export function formatAPIDate(dt){
let d =new Date(dt * 1000),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

return [year, month, day].join('-');
}

//A Unix timestamp is the number of seconds since 01/01/1970
//Add one day to the unix timestamp by adding
//24*60*60 which is the number of seconds in 24 hours
export function addOneDay(dt){
  return dt + 24*60*60;
}
//I am assuming that the current weather is day one
// Will get the next four days and filter the JSON returned from
// the API ("yyyy-mm-dd")
export function nextFourDays(currentDate){
let nextFourDays=[];
let formattedDate = "";

for (let i=0; i<4;i++){
    currentDate = addOneDay(currentDate);
    formattedDate = formatAPIDate(currentDate);
    nextFourDays.push(formattedDate);
}
return nextFourDays;
}

export function getDayfromDate(dt) {
//The date returned by the API is a UNIX timestamp so we have 
//to convert it
let date =new Date(dt * 1000);
let dayNumber = date.getDay();
let weekday=new Array(7);
    weekday[0]="SUN";
    weekday[1]="MON";
    weekday[2]="TUE";
    weekday[3]="WED";
    weekday[4]="THU";
    weekday[5]="FRI";
    weekday[6]="SAT";

return weekday[dayNumber];

}

// export function fiveDayFilter(data, nextFourDays) {
//     let nextFourDays = nextFourDays(data.list[0].dt);


//     let daysFiltered = data.filter(item => item.dt_txt.includes(nextFourDays[i]));  
// }

