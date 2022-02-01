// Desestructuración
//Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave} = persona;

// console.log( persona.nombre);
// console.log( persona.edad);
// console.log( persona.clave);

const usandoContext = ( {clave, nombre, edad, rango = 'Capitan'} )=>{

    // console.log( nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 13.214,
            lng: -11.324
        }
    }
}

// const avenger = useContext( persona);
const {nombreClave, anios, latlng:{lat, lng} } = usandoContext( persona); // usandoContext == useContext

console.log(nombreClave, anios);
console.log(lat, lng);