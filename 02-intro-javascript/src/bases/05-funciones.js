// const saludar = function(nombre){
//     return `Hola, ${ nombre}`;
// }

const saludar2 = ( nombre) => {
    return `Hola, ${ nombre}`;
}
const saludar3 = ( nombre) => `Hola, ${ nombre}`;
const saludar4 = () => `Hola Mundo`;
// console.log( saludar('Efren'));
console.log(saludar2('Ramiro'));
console.log(saludar3('Pedro'));
console.log(saludar4());


const getUser = () =>({
        uid: 'ABC123',
        username: 'Juancho'
    });

const user = getUser(); 
console.log(user);

// Tarea 
// 1.Transformar a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas 
//****************************************** */
// function getUsuarioActivo ( nombre){
//     return {
//         uid: 'ABC567',
//         username: nombre 
//     }
// }

const getUsuarioActivo = ( nombre) =>({
        uid: 'ABC567',
        username: nombre 
    });


// const usuarioActivo = getUsuarioActivo('Pacho');
// console.log(usuarioActivo);

const usuarioActivo = getUsuarioActivo('Pacho');
console.log(usuarioActivo);