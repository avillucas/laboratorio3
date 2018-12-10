var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//realizar codigo de la clase "Heroe". el metodo toJSON es parte de la clase y es provisto en el starter
///<reference path="personaje.ts"/>
var Clases;
(function (Clases) {
    var Heroe = /** @class */ (function (_super) {
        __extends(Heroe, _super);
        function Heroe(id, tipo, nombre, edad, poder_principal) {
            var _this = _super.call(this, nombre, edad) || this;
            _this.id = id;
            _this.tipo = tipo;
            _this.poder_principal = poder_principal;
            return _this;
        }
        Heroe.prototype.toJSON = function () {
            var cad = _super.prototype.toJSON.call(this).replace('}', '');
            var json = cad + (", \"id\":" + this.id + ", \"tipo\":" + this.tipo.toString() + ", \"poder_principal\":\"" + this.poder_principal + "\"}");
            return json;
        };
        return Heroe;
    }(Clases.Personaje));
    Clases.Heroe = Heroe;
})(Clases || (Clases = {}));
