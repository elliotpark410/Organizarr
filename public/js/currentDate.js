// const dateElement = document.getElementById('currentDate').innerText

// dateElement.dayjs().format('MMMM D, YYYY');
// console.log(dayjs().format());


var currentDate = dayjs().format('MMMM D, YYYY');
  document.getElementById('currentDate').textContent(currentDate);