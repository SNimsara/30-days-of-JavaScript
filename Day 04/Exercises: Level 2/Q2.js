/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer
*/

let x = prompt("Enter month: ")
if (x == "September" || x=="October" || x=="November")
{
    console.log("The season is Autumn.");
}
else if (x == "December" || x=="January" || x=="February")
{
    console.log("The season is Winter.");
}
else if (x == "March" || x=="April" || x=="May")
{
    console.log("The season is Spring.");
}
else
{
    console.log("The season is Summer.");
}

//The season is Spring. (month = April)
