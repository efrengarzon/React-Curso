const persona = {
    nombre: 'Tony',
    apellido: 'Hernandez',
    edad: 45,
    direcion: {
        ciudad: 'New York',
        zip: 55155,
        lat: 14.323,
        lng: 34.2342342
    }
}
// console.table(persona);


const persona2 = {...persona};
persona2.nombre = 'Petter';

console.log(persona);
console.log(persona2);