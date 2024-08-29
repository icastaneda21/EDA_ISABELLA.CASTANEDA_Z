
function crearTarea(titulo, descripcion) {
    return {
        titulo: titulo,
        descripcion: descripcion,
        siguiente: null
    };
}


function crearListaDeTareas() {
    return {
        cabeza: null, 

        
        agregarTarea(titulo, descripcion) {
            const nuevaTarea = crearTarea(titulo, descripcion);
            if (!this.cabeza) {
                this.cabeza = nuevaTarea;
            } else {
                let tareaActual = this.cabeza;
                while (tareaActual.siguiente) {
                    tareaActual = tareaActual.siguiente;
                }
                tareaActual.siguiente = nuevaTarea; // Agregar al final de la lista
            }
        },

        // Método para imprimir todas las tareas
        imprimirTareas() {
            let tareaActual = this.cabeza;
            while (tareaActual) {
                console.log(`Título: ${tareaActual.titulo}`);
                console.log(`Descripción: ${tareaActual.descripcion}`);
                console.log('--------------------');
                tareaActual = tareaActual.siguiente;
            }
        }
    };
}


const listaDeTareas = crearListaDeTareas();


listaDeTareas.agregarTarea('Hacer ejercicio', 'Pierna el miércoles');
listaDeTareas.agregarTarea('Hacer ejercicio', 'Espalda el martes');
listaDeTareas.agregarTarea('Hacer ejercicio', 'Brazo el miércoles');
listaDeTareas.agregarTarea('Leer libro', 'Orgullo y prejuicio');
listaDeTareas.agregarTarea('Estudio', 'Estudiar 6 horas semanales');


console.log('Lista de Tareas:');
listaDeTareas.imprimirTareas();
