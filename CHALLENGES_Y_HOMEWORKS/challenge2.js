function crearPersona(nombreCompleto, fechaNacimiento) {
    return {
        nombreCompleto: nombreCompleto,
        fechaNacimiento: fechaNacimiento,
        hijos: [],
        agregarHijo(hijo) {
            this.hijos.push(hijo);
        }
    };
}


function imprimirPreOrden(persona) {
    if (persona) {
        console.log(`Nombre: ${persona.nombreCompleto}, Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        persona.hijos.forEach(hijo => imprimirPreOrden(hijo));
    }
}


function imprimirInOrden(persona) {
    if (persona) {
        const numeroHijos = persona.hijos.length;
        if (numeroHijos > 0) {
            imprimirInOrden(persona.hijos[0]); 
            console.log(`Nombre: ${persona.nombreCompleto}, Fecha de Nacimiento: ${persona.fechaNacimiento}`);

            for (let i = 1; i < numeroHijos; i++) {
                imprimirInOrden(persona.hijos[i]); // Imprimir los demás hijos
            }
        } else {
            console.log(`Nombre: ${persona.nombreCompleto}, Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        }
    }
}


function imprimirPostOrden(persona) {
    if (persona) {
        persona.hijos.forEach(hijo => imprimirPostOrden(hijo));
        console.log(`Nombre: ${persona.nombreCompleto}, Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    }
}


const bisabueloMaterno = crearPersona('Juan Pérez', '1920-05-15');
const bisabuelaMaterna = crearPersona('María López', '1922-07-25');
const abueloMaterno = crearPersona('Carlos Pérez', '1945-09-10');
const abuelaMaterna = crearPersona('Ana Gómez', '1947-11-05');
const madre = crearPersona('Laura Pérez', '1970-01-20');
const padre = crearPersona('José Martínez', '1968-03-12');
const yo = crearPersona('Isabella Martínez Pérez', '1996-08-15');


bisabueloMaterno.agregarHijo(abueloMaterno);
bisabuelaMaterna.agregarHijo(abueloMaterno);
abueloMaterno.agregarHijo(madre);
abuelaMaterna.agregarHijo(madre);
madre.agregarHijo(yo);
padre.agregarHijo(yo);


console.log('Pre-orden:');
imprimirPreOrden(bisabueloMaterno);

console.log('\nIn-orden:');
imprimirInOrden(bisabueloMaterno);

console.log('\nPost-orden:');
imprimirPostOrden(bisabueloMaterno);
