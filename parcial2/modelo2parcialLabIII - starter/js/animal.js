///<reference path="enumerados.ts"/>
var Clases;
(function (Clases) {
    var Animal = /** @class */ (function () {
        function Animal(nombre, patas, edad) {
            this._nombre = nombre;
            this._patas = patas;
            this._edad = edad;
        }
        Animal.prototype.toJSON = function () {
            var json = "{\"nombre\":\"" + this._nombre + "\", \"edad\":" + this._edad + ",\"patas\":" + this._patas + "}";
            return json;
        };
        Object.defineProperty(Animal.prototype, "patas", {
            get: function () {
                return this._patas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "edad", {
            get: function () {
                return this._edad;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animal.prototype, "nombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        return Animal;
    }());
    Clases.Animal = Animal;
})(Clases || (Clases = {}));
