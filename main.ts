// by adding import and export ts treat this a module rather than a file module will have its own scope while file will have global scope

export {}


let message = "Welcome back "

const isBegginer: boolean  = true
let total: number = 2

total = 3

const sentence: string = `iam vishwas ${total}`

// console.log(sentence)


const list1: number[] = [1,2,3]
const list2:Array<string> = ['a','b']

let person:[string,number] = ['kholi',23]

enum color {white=2 ,green=3,orange=4}

let clr = color.white

console.log(clr,'hii')

let myVar: any = 10
myVar = 'mkejfke'


console.log(myVar())
myVar.toUpperCase()

let mykv: unknown = 22

// we have a user defined type guard when we uses the unkown type

console.log((mykv as string).toLocaleUpperCase() )


// union type
let multiType: number | boolean;

multiType=23
multiType=true






// console.log(message)


// funcyions in ts


// optional parameter

function add (num1: number,num2?: number): number {
    
    if(num2) return num1+num2; else return num1 
   
}

// default parameter


function add2 (num1: number,num2: number = 10): number {
    
    if(num2) return num1+num2; else return num1 
   
}

console.log(add(1))

// intreface

interface person {
    firstName:string,
    lastName?:string
     
}

function fullName (person:{firstName:string,lastName:string}) {
    console.log(`${person.firstName} ${person.lastName}`)
}
function fullName2 (person:person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

fullName({
    firstName:'wd',
    lastName:'dc'
})

fullName2({firstName:'ede',lastName:'wsdwe'})


