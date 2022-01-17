class Room {
  constructor(numero, cama) {
  this.numero = numero;
  this.cama = cama;
  this.vacant = true;
  this.guest = "";
  }

  liberar() {
    if (this.vacant === false) {
      this.vacant = true;
      this.guest = "";
      console.log("Room status changed to vacant");
    } else {
      console.log("Room is vacant");
    }
  }

  ocupar(guest) {
    if (this.vacant) {
      this.vacant = false;
      this.guest = guest;
      console.log(`Room status changed to occupied by ${guest}`);
    } else {
      console.log(`room is occupied by ${this.guest}`);
    }
  }
}


var room1 = new Room(1, "dbl");
var room2 = new Room(2, "sgl");
var room3 = new Room(3, "trp");


class DblRoom extends Room {

constructor(numero) {
  super(numero,"dbl");
  this.guest2 = "";
  }

  ocupar(guest1, guest2) {
    if (this.vacant) {
      super.ocupar(guest1);
      this.guest2 = guest2;
      console.log(`Accompany is ${this.guest2}`);
    } else {
      super.ocupar(guest1);
      console.log(`and ${guest2}`);
    }
  }

  liberar() {
    super.liberar();
    this.guest2 = "";
  }
}

room1 = new DblRoom(1);
