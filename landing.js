// NOT IN USE
// let date = new Date();
// function renderCalendar(){
//   date.setDate(1);
//   const monthDays=document.getElementById('calendar-body');
//   const month = document.getElementById('month');
//   const daysElement = document.getElementById('days');
  
//   const lastDay = new Date(
//     date.getFullYear(),
//     date.getMonth()+1,
//     0
//   ).getDate();

//   const prevLastDay = new Date(
//     date.getFullYear(),
//     date.getMonth(),
//     0
//   ).getDate();

//   const firstDayIndex = date.getDay();

//   const lastDayIndex = new Date(
//     date.getFullYear(),
//     date.getMonth()+1,
//     0
//   ).getDay();

//   const nextDays = 7-lastDayIndex-1;

//   const months=[
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
//   const days = [
//     'S',
//     'M',
//     'T',
//     'W',
//     'TH',
//     'F',
//     'S'
//   ];
//   month.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
//   daysElement.innerHTML=days.map(day=> `<div>${day}</div>`).join('');
//   let dates = '';
  
//   for(let x = firstDayIndex; x > 0; x--){
//     days+=`<div class='prev-date'>${prevLastDay-x+1}</div>`;
//   }

//   for (let i = 1; i <= lastDay; i++) {
//     if (
//         i === new Date().getDate() &&
//         date.getMonth() === new Date().getMonth()
//     ) {
//         days += `<div class='today'>${i}</div>`;
//     } else {
//         days += `<div>${i}</div>`;
//     }
//   }
//   for(let j=1; j<=nextDays; j++){
//     days+=`<div class='next-date'>${j}</div>`;
//     monthDays.innerHTML = days;
//   }
// }

// document.getElementById('month-prev').addEventListener('click', ()=>{
//   document.getElementById('calendar-body').classList.add('fade-out');
//   setTimeout(()=>{
//     date.setMonth(date.getMonth()-1);
//     renderCalendar();
//     document.getElementById('calendar-body').classList.remove('fade-out');
//   }, 500);
// });

// document.getElementById('month-next').addEventListener('click', ()=>{
//   document.getElementById('calendar-body').classList.add('fade-out');
//   setTimeout(()=>{
//     date.setMonth(date.getMonth()+1);
//     renderCalendar;
//     document.getElementById('calendar-body').classList.remove('fade-out');
//   }, 500);
// });
// renderCalendar();