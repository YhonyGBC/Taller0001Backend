// console.log("Hola Mundo");
// //AMBITO DE LAS VARIABLES

// // var kilometros = 100;
// // let kilometros = 100;
// // const kilometros = 100;
// let kilometros = 100;
// console.log(kilometros);

// if (1 == 1) {
//     let kilometros = 300;
//     console.log(kilometros);
// }

// console.log(kilometros);

// //ARREGLOS
// const arregloNumeros = [10,20,30];
// arregloNumeros.push(40);
// console.log(arregloNumeros);

// //OBJETOS
// const  persona = {
//     nombre: "Juan", 
//     apellido: "Díaz",
//     edad: 40,
// }

// console.log(persona);
// persona.apellido = "Aux";
// console.log(persona);

// //CLASES
// class Animal {
//     constructor(patas, tamanio) {
//         this.patas = patas;
//         this.tamanio = tamanio;
//     }
// }

// class Gato extends Animal {
//     constructor(patas, tamanio, pelaje) {
//         super(patas, tamanio);
//         this.pelaje = pelaje;
//     }
// }


// const perro = new Animal(4, "Mediano");
// console.log(perro);

// const felix = new Gato(4, "Pequeño", "Liso");
// console.log(felix);

// //FUNCIONES
// // function mensaje(nombre) {
// //     console.log("Hola el nombre es " + nombre);
// // }

// // mensaje("Anita");

// //FUNCIONES DE FLECHA / FUNCTION ARROW
// // const mensaje = (nombre, edad) => {
// //     console.log("Hola el nombre es " + nombre + " y tiene " + edad + " años");
// //     const saludo = "Hola el nombre es " + nombre + " y tiene " + edad + " años";
// //     return saludo;
// // }

// // const suma = (op1, op2) => {
// //     const resultado = op1 + op2;
// //     return resultado;
// // }

// // const resultado  = mensaje("Juanita");
// // console.log(resultado);

// // console.log(suma(5,4));

// //TEMPLATE STRING BACKTICK (``) 
// const mensaje = (nombre, edad) => {
//     console.log(`Hola el nombre es ${nombre} y tiene ${edad} años`);
//     const saludo = `Hola el nombre es ${nombre} y tiene ${edad} años`;
//     return saludo;
// }

// const resultado  = mensaje("Juanita", 30);
// console.log(resultado);

// //DESESTRUCTURACIÓN DE OBJETOS
// const web = {
//     nombre: "Udenar",
//     links: {
//         sitio: "www.udenar.edu.co",
//     },
//     redesSociales: {
//         youtube: {
//             enlace: "www.youtube.com/udenar",
//             nombre: "Youtube Udenar",
//         },
//         facebook: {
//             enlace: "www.facebook.com/udenar",
//             nombre: "Facebook Udenar",
//         },
//         instagram: {
//             enlace: "www.instagram.com/udenar",
//             nombre: "Instagram Udenar",
//         },
//     }
// }

// console.log(web);

// const { redesSociales } = web;

// console.log(redesSociales);

// //OPERADOR DE PROPAGACIÓN ...
// const frutas = ["Manzana", "Pera", "Mango", "Fresa"];

// const dulces = ["Mermelada", "Manjar", "Helado"];

// const postres = [...frutas, ...dulces];

// console.log(postres);

//TIPO MODULO 
import {PI, suma} from './modulo.js';

console.log(PI);
suma(5, 10);

//PROMESAS ASYNC 
//CALLBACK