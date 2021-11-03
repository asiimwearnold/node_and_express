/* 
working with modules in node involves 
creating it
exporting it
using it.
*/

const Name = "John"
const Name2 = "Poul"

// writing a function that greats a person

const sayHi = (name) =>
{
    console.log(`hello there Mr ${name}`)
}
//sayHi(Name)
//sayHi("arnold")
//sayHi(Name2)

// in order to share the variables to other parts of the project we can use the following

module.exports={Name, Name2}