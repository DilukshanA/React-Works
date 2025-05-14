// Polymorphism in JavaScript
// Polymorphism is a concept in OOP that allows methods to do different things based on the object it is acting upon.
// Can use the same method name in different classes, but the implementation can be different.

class Animal {
    constructor(_name){
        this.name = _name;
        console.log("Animal constructor");
    }

    makeSound(){
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    constructor(){
        console.log("Dog constructor");
        super("Dog");
    }

    makeSound(){
        console.log("Bow bow");
    }
}

class Cat extends Animal {
    constructor(){
        console.log("Cat constructor");
        super("Cat");
    }

    makeSound(){
        console.log("Meow meow");
    }
}

const newAnimal =new Animal("Dog");
const newDog = new Dog();
newDog.makeSound();

const newCat = new Cat();
newCat.makeSound();