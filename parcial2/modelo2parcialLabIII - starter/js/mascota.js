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
var Clases;
(function (Clases) {
    var Mascota = /** @class */ (function (_super) {
        __extends(Mascota, _super);
        function Mascota(id, nombre, edad, patas, tipo) {
            var _this = _super.call(this, nombre, patas, edad) || this;
            _this._id = id;
            _this._tipo = tipo;
            return _this;
        }
        Object.defineProperty(Mascota.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Mascota.prototype, "tipo", {
            get: function () {
                return this._tipo;
            },
            enumerable: true,
            configurable: true
        });
        return Mascota;
    }(Animal));
    Clases.Mascota = Mascota;
})(Clases || (Clases = {}));
