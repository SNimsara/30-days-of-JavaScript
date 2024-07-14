/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

let x = prompt("What is the day  today? ")
if (x == "saturday" || x == "sunday")
{
    console.log(`${x} is a weekend.`)
}
else
{
    console.log(`${x} is a working day.`)
}

//monday is a working day.
//sunday is a weekend.
