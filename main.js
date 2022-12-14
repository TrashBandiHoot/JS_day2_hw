//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// ! Need to log data within each array on seperate lines

for(let i = 0; i < Object.keys(person3).length; i++)
{
    if(Array.isArray(Object.values(person3)[i]))
    {
        for(let j = 0; j < Object.values(person3)[i].length; j++)
        {
            // console.log(typeof Object.values(person3)[i][j])
            if(Array.isArray(Object.keys(person3)[i][j]))
            // This if check never evaluates to true
            {
                for(let k = 0; k < Object.values(person3)[i][j].length; k++)
                {
                // console.log("if check passed")
                console.log(Object.values(person3)[i][j][k])
                }
            }
            else 
            {
                console.log(Object.values(person3)[i][j])
            }
        }
    }
    else 
    {
        console.log(Object.values(person3)[i])
        // console.log("else")
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;


    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return `This persons name is ${name} and they are ${age} years old`
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.addAge = () => {
        age++
    }

}

let dom = new Person('Dom', 25)
dom.addAge()
dom.addAge()
dom.addAge()
console.log(dom.printInfo())

let benny = new Person('Benny', 3)
console.log(benny.printInfo())





// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterThanTen = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10){
            resolve('Big Word')
        } else {
            reject('Small Word')
        }
    })
}

greaterThanTen("THIS IS A BIG WORD")


.then((result) => {
    console.log(result)
})

.catch((error) => {
    console.log(error)
})
