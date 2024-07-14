/*
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

let y = prompt("Enter a month: ").toLowerCase()
switch (y){
    case 'january':
        console.log(`${y} has 31 days.`); break; 
    case 'february':
        console.log(`${y} has 28 days.`) ; break; 
    case 'march':
        console.log(`${y} has 31 days.`); break;  
    case 'april':
        console.log(`${y} has 30 days.`); break;  
    case 'may':
        console.log(`${y} has 31 days.`); break;  
    case 'june':
        console.log(`${y} has 30 days.`); break;  
    case 'july':
        console.log(`${y} has 31 days.`); break;  
    case 'august':
        console.log(`${y} has 31 days.`); break;  
    case 'september':
        console.log(`${y} has 30 days.`); break;  
    case 'october':
        console.log(`${y} has 31 days.`); break; 
    case 'november':
        console.log(`${y} has 30 days.`); break; 
    case 'december':
        console.log(`${y} has 31 days.`); break; 
    default:
        console.log("Invalid month"); break; 
}

//march has 31 days. (month = march)
//april has 30 days. (month = april)
//february has 28 days. (month = february)
