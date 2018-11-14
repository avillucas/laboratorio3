"use strict";
/// <reference path="./mamifero.ts" />
class Animal extends Mamifero {
    constructor(patas, nombre, colorPelo) {
        super(colorPelo);
        this.patas = 4;
        this.patas = patas;
        this.nombre = nombre;
    }
    get cantidadPatas() {
        return this.patas;
    }
    set cantidadPatas(nuevaCantidadPatas) {
        this.patas = nuevaCantidadPatas;
    }
}
//# sourceMappingURL=animal.js.map