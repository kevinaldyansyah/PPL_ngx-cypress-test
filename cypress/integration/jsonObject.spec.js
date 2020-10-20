/// <reference types="cypress" />

describe('JSON objects', () => {

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = {"key": "value", "key2": "value2"}

        const simpleArrayOfValues = ["one", "two", "three"]

        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

        const typesOfData = {"string": "this is a string", "number": 10}

        const mix = {
            "FirstName": "Artem",
            "LastName": "Bondar", 
            "Age": 35,
            "Students": [
                {
                    "firstName": "Sara",
                    "lastName": "Conor"
                },
                {
                    "firstName": "Bruce",
                    "lastName": "Willis"
                }
            ]
        }
        //gives the same thing
        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        //from the array
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[1].lastName)

        const lastNameOfSecondStudent = mix.Students[1].lastName
    })
})
