class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    insertarOrdenado(valor) {
        const nuevoNodo = new Nodo(valor);

        if (!this.cabeza || this.cabeza.valor >= valor) {
            nuevoNodo.siguiente = this.cabeza;
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente && actual.siguiente.valor < valor) {
                actual = actual.siguiente;
            }
            nuevoNodo.siguiente = actual.siguiente;
            actual.siguiente = nuevoNodo;
        }
    }

    imprimir() {
        let actual = this.cabeza;
        let resultado = "";
        while (actual) {
            resultado += actual.valor + " -> ";
            actual = actual.siguiente;
        }
        resultado += "null";
        console.log(resultado);
    }
}

function unirListasOrdenadas(lista1, lista2) {
    const listaUnida = new ListaEnlazada();

    let nodo1 = lista1.cabeza;
    let nodo2 = lista2.cabeza;

    while (nodo1 || nodo2) {
        if (!nodo1) {
            listaUnida.insertarOrdenado(nodo2.valor);
            nodo2 = nodo2.siguiente;
        } else if (!nodo2) {
            listaUnida.insertarOrdenado(nodo1.valor);
            nodo1 = nodo1.siguiente;
        } else if (nodo1.valor <= nodo2.valor) {
            listaUnida.insertarOrdenado(nodo1.valor);
            nodo1 = nodo1.siguiente;
        } else {
            listaUnida.insertarOrdenado(nodo2.valor);
            nodo2 = nodo2.siguiente;
        }
    }

    return listaUnida;
}

const lista1 = new ListaEnlazada();
lista1.insertarOrdenado(15);
lista1.insertarOrdenado(10);
lista1.insertarOrdenado(5);

const lista2 = new ListaEnlazada();
lista2.insertarOrdenado(40);
lista2.insertarOrdenado(20);
lista2.insertarOrdenado(10);

console.log("Lista 1:");
lista1.imprimir(); 

console.log("Lista 2:");
lista2.imprimir(); 

const listaUnida = unirListasOrdenadas(lista1, lista2);
console.log("Lista Unida Ordenada:");
listaUnida.imprimir();
