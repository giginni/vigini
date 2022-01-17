var room101 = {
  number: 101,
  bed: "single",
  bathtub: true,
  vacant: true,
  guest: "",
  ocupar: function(guest) {
    if (this.vacant) {
      this.vacant = false;
      this.guest = guest;
      console.log(`Room status changed to occupied by ${guest}`);
    } else {
      console.log(`room is occupied by ${this.guest}`);
    }
  } ,
  liberar: function() {
      if (this.vacant === false) {
        this.vacant = true;
        this.guest = "";
        console.log("Room status changed to vacant");
      } else {
        console.log("Room is vacant");
      }
  }
}

//imprimir todas las claves de room101
for (var clave in room101) {
  console.log(`La clave ${clave} vale ${room101[clave]}`);
}
