//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTech = ['HTML' , 'Css' , 'JavaScript' , 'React']
let index = webTech.indexOf('Sass')
if (index === -1)
{
    webTech.push('Sass')
    console.log(webTech)
}
else
{
    console.log('Sass is a CSS preprocess')
}

//output:- ['HTML', 'Css', 'JavaScript', 'React', 'Sass']
