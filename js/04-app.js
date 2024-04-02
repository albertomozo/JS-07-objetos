titulo.innerHTML='04 destructuring II';
// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const curso = {
    nombre: "FrontEnd",
    horas: 210,
    disponible: true,
    informacion : {
        tipo: 'presencial',
        horario : '15:00 a 19:00'
    }
}



console.log(nombre); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

console.log(nombre.informacion);
console.log(nombre.informacion.tipo);
console.log(nombre.informacion.horario);
