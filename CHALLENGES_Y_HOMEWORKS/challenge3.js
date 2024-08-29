function crearPersona(nombre, horaLlegada) {
    return {
        nombre: nombre,
        horaLlegada: horaLlegada
    };
}

function crearCola() {
    const cola = {
        personas: [], 

       
        agregarPersona(nombre, horaLlegada) {
            const nuevaPersona = crearPersona(nombre, horaLlegada);
            this.personas.push(nuevaPersona); 
        },

        
        procesarPersona() {
            if (this.personas.length > 0) {
                return this.personas.shift(); 
            } else {
                console.log('La cola está vacía.');
                return null;
            }
        },

       
        imprimirCola() {
            if (this.personas.length === 0) {
                console.log('La cola está vacía.');
            } else {
                this.personas.forEach(persona => {
                    console.log(`Nombre: ${persona.nombre}, Hora de Llegada: ${persona.horaLlegada}`);
                });
            }
        }
    };
    return cola;
}


const colaDeATM = crearCola();


colaDeATM.agregarPersona('Pedro Sánchez', '09:00');
colaDeATM.agregarPersona('Lucía Fernández', '09:10');
colaDeATM.agregarPersona('Jorge Castro', '09:20');
colaDeATM.agregarPersona('Elena Morales', '09:30');


console.log('Estado de la Cola de Personas:');
colaDeATM.imprimirCola();


console.log('\nProcesando persona:');
const personaProcesada = colaDeATM.procesarPersona();
if (personaProcesada) {
    console.log(`Nombre: ${personaProcesada.nombre}, Hora de Llegada: ${personaProcesada.horaLlegada}`);
}


console.log('\nEstado Actual de la Cola de Personas:');
colaDeATM.imprimirCola();
