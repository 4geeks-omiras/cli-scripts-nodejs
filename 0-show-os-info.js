// Lee el README
// Include os module and create its object
const os = require('os');

// Obtener nombre del equipo
const hostname = os.hostname();
console.log(`Nombre del equipo: ${hostname}`);

// Obtener versión del sistema operativo
const osVersion = os.version();
console.log(`Edición/Versión del sistema operativo: ${osVersion}`);

// Obtener memoria RAM total en GB
const totalMemoryGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
console.log(`Memoria RAM total: ${totalMemoryGB} GB`);