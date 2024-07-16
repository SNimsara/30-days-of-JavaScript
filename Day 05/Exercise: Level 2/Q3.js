/*
In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
1) add 'Meat' in the beginning of your shopping cart if it has not been already added
2) add Sugar at the end of you shopping cart if it has not been already added
3) remove 'Honey' if you are allergic to honey
4) modify Tea to 'Green Tea'
*/

onst shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// 1)
shoppingCart.unshift('Meat')
console.log(shoppingCart)
// output:-  ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey']


// 2)
shoppingCart.push('Sugar')
console.log(shoppingCart)
//output:- ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar']


// 3)
shoppingCart.splice(4,1)
console.log(shoppingCart)
//output:- ['Milk', 'Coffee', 'Tea', 'Honey']


// 4)
shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)
//output:- ['Milk', 'Coffee', 'Green Tea', 'Honey']
