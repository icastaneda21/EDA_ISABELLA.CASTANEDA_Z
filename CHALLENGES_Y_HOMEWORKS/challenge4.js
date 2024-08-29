function crearPersona(nombre, edad, ciudad) {
    return {
        nombre,
        edad,
        ciudad
    };
}

function crearCiudad(nombre) {
    return {
        nombre,
        personas: []
    };
}

function crearGrafico() {
    const personas = [];
    const ciudades = {};

    function agregarPersona(nombre, edad, nombreCiudad) {
        if (!ciudades[nombreCiudad]) {
            ciudades[nombreCiudad] = crearCiudad(nombreCiudad);
        }

        const nuevaPersona = crearPersona(nombre, edad, nombreCiudad);
        personas.push(nuevaPersona);
        ciudades[nombreCiudad].personas.push(nuevaPersona);
    }

    function imprimirPersonasEnCiudad(nombreCiudad) {
        const ciudad = ciudades[nombreCiudad];
        if (ciudad) {
            console.log(`Personas que viven en ${nombreCiudad}:`);
            ciudad.personas.forEach(persona => {
                console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
            });
        } else {
            console.log(`La ciudad ${nombreCiudad} no existe en el gráfico.`);
        }
    }

    return {
        agregarPersona,
        imprimirPersonasEnCiudad
    };
}

const grafico = crearGrafico();

grafico.agregarPersona('Luis Fernández', 32, 'Bogotá');
grafico.agregarPersona('Sofía Morales', 27, 'Medellín');
grafico.agregarPersona('Andrés Ramírez', 41, 'Bogotá');
grafico.agregarPersona('Valentina Díaz', 30, 'Cali');
grafico.agregarPersona('Felipe Gómez', 35, 'Medellín');

console.log('Listado de personas:');
grafico.imprimirPersonasEnCiudad('Bogotá');
grafico.imprimirPersonasEnCiudad('Medellín');
grafico.imprimirPersonasEnCiudad('Cali');
grafico.imprimirPersonasEnCiudad('Cartagena');
