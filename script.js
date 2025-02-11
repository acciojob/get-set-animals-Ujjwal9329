// Parent class Animal
class Animal {
  constructor(species) {
    this._species = species; // Using a private variable with underscore
  }

  // Getter method for species
  get species() {
    return this._species;
  }

  // Method to log the sound message
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Subclass Dog
class Dog extends Animal {
  // Method specific to Dog
  bark() {
    console.log("woof");
  }
}

// Subclass Cat
class Cat extends Animal {
  // Method specific to Cat
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
