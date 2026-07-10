// Pre-Entrega 1: Módulo 1 - Primeros pasos con JavaScript

// 1. SOLICITAR DATOS AL USUARIO (mínimo 3 datos distintos)

const nombre = prompt('¿Cuál es tu nombre?');
const anioNacimientoTexto = prompt('¿En qué año naciste?');
const ciudad = prompt('¿En qué ciudad naciste?');

// 2. PROCESAR INFORMACIÓN

const anioNacimiento = parseInt(anioNacimientoTexto);

//Calculo de edad actual

const anioActual = new Date().getFullYear();
let edad = anioActual - anioNacimiento;

// Transformación de texto: concatenar variables con strings
const mensajeBienvenida = "Hola " + nombre + ", ¡Bienvenido/a!";
const mensajeEdad = "Según el año " + anioNacimiento + ", tienes aproximadamente " + edad + " años.";
const mensajeCiudad = nombre + " nació en " + ciudad + ".";

// 3. COMUNICAR RESULTADOS

console.log(mensajeBienvenida);
console.log(mensajeEdad);
console.log(mensajeCiudad);

alert(mensajeBienvenida + "\n" + mensajeEdad + "\n" + mensajeCiudad);