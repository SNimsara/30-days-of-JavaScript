/*
Create a human readable time format using the Date time object

1) YYYY-MM-DD HH:mm
2) DD-MM-YYYY HH:mm
3) DD/MM/YYYY HH:mm
*/

const now = new Date()
const years = now.getFullYear()
const month = now.getMonth() + 1 
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${years}-${month}-${date} ${hours}:${minutes}`)
console.log(`${date}-${month}-${years} ${hours}:${minutes}`)
console.log(`${date}/${month}/${years} ${hours}:${minutes}`)

//1) 2024-7-14 21:18
//2) 14-7-2024 21:18
//3) 14/7/2024 21:18
