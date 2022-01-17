const array1= [5, 21, 16, 7, 75, 8];
const array2= ["juani", "caro", "gini", "dinu"];

//imprimir todos los elementos del array

array1.map(function(num) {
  return num * 2;
}).forEach(function(num)  {
  console.log("El numero es:" + num);
});

array2.forEach(function(nombre) {
    console.log("El nombre es:" + nombre);
});

// sumar elementos

console.log(array1.reduce(function(acc, num) {
    return acc + num;
  }));

// encontrar el minimo

console.log(array1.reduce(function(acc, num) {
    if (acc < num) {
      return acc;
  } else {
      return num;
  }
}));

//palabra mas corta

console.log(array2.reduce(function(acc, nombre) {
    if (acc.length < nombre.length) {
      return acc;
  } else {
      return nombre;
  }
}));
