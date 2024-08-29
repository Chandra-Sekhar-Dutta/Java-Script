class Animal {
    constructor(Name, legs, sound) {
        this.Name = Name;
        this.legs = legs;
        this.sound = sound;
    }

    Show(Name, legs, sound) {
        console.log("Name of the animal is " + this.Name);
        console.log("Number of legs= " + this.legs);
        console.log("The sound of the animal is " + this.sound);
    }

    static AssociatedToClassAnimal() {
        console.log("static AssociatedToClassAnimal()-It is not associated to any object but can only be accessed with the class itself");
    }
}



let Dog = new Animal("Dog", 4, "Bark");
Dog.Show();

let Cat = new Animal("Cat", 4, "Meaw");
Cat.Show();

Animal.AssociatedToClassAnimal();