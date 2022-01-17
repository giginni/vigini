function Room(numero, cama) {
  this.numero = numero;
  this.cama = cama;
  this.vacant = true;
  this.guest = "";
}

Room.prototype.liberar= function() {
      if (this.vacant === false) {
        this.vacant = true;
        this.guest = "";
        console.log("Room status changed to vacant");
      } else {
        console.log("Room is vacant");
      }
  };
  Room.prototype.ocupar= function(guest) {
      if (this.vacant) {
        this.vacant = false;
        this.guest = guest;
        console.log(`Room status changed to occupied by ${guest}`);
      } else {
        console.log(`room is occupied by ${this.guest}`);
      }
    };

const room1 = new Room(1, "dbl");
const room2 = new Room(2, "sgl");
const room3 = new Room(3, "trp");

function DblRoom(numero) {
  // Hereda de room
  Room.call(this,numero,"dbl");
  this.guest2 = "";
}

// Herencia de comportamiento
DblRoom.prototype = Object.create(Room.protoype);
DblRoom.protoype.constructor = DblRoom;
