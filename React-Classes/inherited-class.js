class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;

        console.log("Person constructor");
    }

    getName(){
        return `Person name is ${this.name}`;
    }

}

class Programmer extends Person{
    constructor(_name, _age, _language){
        super(_name, _age);
        this.language = _language;
    }

    getInfo(){
        return `${this.name} is ${this.age} years old and knows ${this.language}`;
    }
}

const newPerson = new Person("Dilu", 30);
const newProgrammer = new Programmer("Sanu", 25, "JavaScript");

console.log(newProgrammer.getInfo());

console.log(newPerson.getName());
console.log(newProgrammer.getName());