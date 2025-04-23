// ¡Buena suerte!

// leer el argumento que nos va a pasar el usuario
const topNumber = process.argv[2];

// Generar un número aleatorio entre 1 y topNumber
const randomNumber = Math.floor(Math.random() * topNumber) + 1;

console.log(randomNumber);
