class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
}

class Arbol {
    constructor() {
        this.raiz = null;
    }

    agregar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._agregarRecursivo(this.raiz, nuevoNodo);
        }
    }

    _agregarRecursivo(nodoActual, nuevoNodo) {
        if (nuevoNodo.dato < nodoActual.dato) {
            if (nodoActual.hijoIzquierdo === null) {
                nodoActual.hijoIzquierdo = nuevoNodo;
            } else {
                this._agregarRecursivo(nodoActual.hijoIzquierdo, nuevoNodo);
            }
        } else {
            if (nodoActual.hijoDerecho === null) {
                nodoActual.hijoDerecho = nuevoNodo;
            } else {
                this._agregarRecursivo(nodoActual.hijoDerecho, nuevoNodo);
            }
        }
    }

    obtenerAltura(nodo = this.raiz) {
        if (!nodo) {
            return 0; 
        }

        const alturaIzq = this.obtenerAltura(nodo.hijoIzquierdo);
        const alturaDer = this.obtenerAltura(nodo.hijoDerecho);

        return Math.max(alturaIzq, alturaDer) + 1;
    }
}

// Ejemplo de uso
const miArbol = new Arbol();
miArbol.agregar(10);
miArbol.agregar(5);
miArbol.agregar(15);
miArbol.agregar(3);
miArbol.agregar(7);
miArbol.agregar(13);
miArbol.agregar(17);

console.log("Altura del árbol:", miArbol.obtenerAltura());
class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    agregar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._agregarRecursivo(this.raiz, nuevoNodo);
        }
    }

    _agregarRecursivo(nodoActual, nuevoNodo) {
        if (nuevoNodo.dato < nodoActual.dato) {
            if (nodoActual.hijoIzquierdo === null) {
                nodoActual.hijoIzquierdo = nuevoNodo;
            } else {
                this._agregarRecursivo(nodoActual.hijoIzquierdo, nuevoNodo);
            }
        } else {
            if (nodoActual.hijoDerecho === null) {
                nodoActual.hijoDerecho = nuevoNodo;
            } else {
                this._agregarRecursivo(nodoActual.hijoDerecho, nuevoNodo);
            }
        }
    }

    obtenerAltura(nodo = this.raiz) {
        if (!nodo) {
            return 0;
        }

        const alturaIzquierda = this.obtenerAltura(nodo.hijoIzquierdo);
        const alturaDerecha = this.obtenerAltura(nodo.hijoDerecho);

        return Math.max(alturaIzquierda, alturaDerecha) + 1;
    }
}

// Ejemplo de uso
const arbol = new ArbolBinario();
arbol.agregar(10);
arbol.agregar(5);
arbol.agregar(15);
arbol.agregar(3);
arbol.agregar(7);
arbol.agregar(13);
arbol.agregar(17);

console.log("Altura del árbol:", arbol.obtenerAltura());
