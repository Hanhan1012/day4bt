
const month = prompt("Enter a month :");
let numDays;

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    numDays = 31;
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    numDays = 30;
    break;
  case 'febuary':
    const year = prompt("Enter a year:");
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      numDays = 29;
    } else {
      numDays = 28;
    }
    break;
  default:
    console.log("Invalid month entered.");
    break;
}

console.log(`${month} has ${numDays} days `);

