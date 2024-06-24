class Car {
  #brand;
  #model;
  speed = 0;
  istrunkOpen = false;

  constructor(carProperties) {
    this.#brand = carProperties.brand;
    this.#model = carProperties.model;
  }

 displayInfo() {
    const trunkStatus = this.istrunkOpen ? "Open" : "Close";
    console.log(
      `${this.#brand} ${this.#model} speed :${this.speed}km/h trunk :${trunkStatus}`
    );
 
  }

  go() {
    if (!this.istrunkOpen) {
      this.speed += 5;
    }

    if (this.speed > 200) {
      this.speed = 200;
    }
  }

  brake() {
    this.speed -= 5;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.istrunkOpen = true;
    } 
  }

  closetrunk() {
    this.istrunkOpen = false;
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(carProperties){
    super(carProperties)
    this.acceleration = carProperties.acceleration;
  }

  go(){
    this.speed+= this.acceleration;

    if(this.speed > 300){
      this.speed = 300;
    }
  }

}
const car1 = new Car({ brand: "Toyota", model: "Corolla" });
const car2 = new Car({ brand: "Tesla", model: "Model 3" });

const raceCar = new RaceCar({brand: 'McLaren', model: 'F1', acceleration: 20})

console.log(car1);
console.log(car2);

car1.go();
car1.brake();
car1.brake();
car1.brake();
car1.go();
car1.go();

car2.go();
car2.go();
car2.go();
car2.go();
car2.brake();

console.log(car1);
console.log(car2);

car1.displayInfo();
car2.displayInfo();

car1.openTrunk();

car1.displayInfo();
car1.brake();
car1.brake();
car1.displayInfo();
car1.openTrunk();
car1.displayInfo();
car1.closetrunk();
car1.displayInfo();

console.log(raceCar);
raceCar.go();
raceCar.brake();
console.log(raceCar);
//raceCar.#brand = 'Nissan';
console.log(raceCar);
