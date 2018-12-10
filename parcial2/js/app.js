///<reference path="heroe.ts"/>
$(function () {
    cargarTipos();
    mostrarHeroes();
    $('#cmbFiltro').change(function () {
        filtrarHeroes(Number($(this).val()));
    });
    $('#cmbFiltro').change(function () {
        filtrarHeroes(Number($(this).val()));
    });
    //agregar al evento change de los 4 checkbox, el manejador "mapearCampos"
    $('#chkId, #chkName, #chkEdad, #chkPoder').change(function () {
        mapearCampos();
    });
    $('#btnAgregar').click(function (e) {
        agregarHeroe();
    });
    $('#btnModificar').click(function (e) {
        modificarHeroe();
    });
});
function modificarHeroe() {
}
function agregarHeroe() {
    var id = Number($('#txtId').val());
    var tipo = Number($('#selectTipo').val());
    var nombre = String($('#txtNombre').val());
    var edad = Number($('#txtEdad').val());
    var poder_principal = String($('#txtPoder').val());
    //crear heroe(nuevoHeroe) en base a los datos del DOM
    var nuevoHeroe = new Clases.Heroe(id, tipo, nombre, edad, poder_principal);
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    //console.log(nuevoHeroe.toJSON());
    //agregar el nuevo heroe a HeroesJSON
    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    //guardar HeroesJSON en localStorage con el nombre "Heroes"
    localStorage.setItem("Heroes", JSON.stringify(HeroesJSON));
    alert("Heroe guardado!!!");
    mostrarHeroes();
    limpiarCampos();
}
function limpiarCampos() {
    $('#txtNombre').val("");
    $('#txtId').val("");
    $('#txtEdad').val("");
    $('#txtPoder').val("");
    $('#selectTipo').val(0);
    $('#txtId').focus();
}
function mostrarHeroes() {
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";
    for (var i = 0; i < HeroesJSON.length; i++) {
        tabla += "<tr><td>" + HeroesJSON[i].id + "</td><td>" + HeroesJSON[i].nombre + "</td><td>" + HeroesJSON[i].edad + "</td><td>" + Clases.tipoHeroe[HeroesJSON[i].tipo] + "</td><td>" + HeroesJSON[i].poder_principal + "</td></tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
function cargarTipos() {
    for (var i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
    for (var i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#selectTipo").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
}
function filtrarHeroes(tipo) {
    var heroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    //en "heroesFiltrados", aplicar el filtro por tipo.
    heroesFiltrados = HeroesJSON.filter(function (heroe) {
        //AYUDA. Usar el siguiente codigo: Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo]    
        return Clases.tipoHeroe[heroe.tipo] === Clases.tipoHeroe[tipo];
    });
    mostrarHeroesPorTipo(heroesFiltrados);
}
function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}
function mostrarHeroesPorTipo(lista) {
    //en caso de disponer de tiempo. arreglar la linea de abajo para que responda a los checkbox
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";
    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay heroes que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].edad + "</td><td>" + Clases.tipoHeroe[lista[i].tipo] + "</td><td>" + lista[i].poder_principal + "</td></tr>";
        }
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
function calcularPromedio() {
    var promedio = 0;
    var totalEdades;
    var cantidad;
    var tipo = Number($('#cmbFiltro').val());
    var heroesFiltrados;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    //filtrar heroes por tipo
    heroesFiltrados = HeroesJSON.filter(function (heroe) {
        return Clases.tipoHeroe[heroe.tipo] === Clases.tipoHeroe[tipo];
    });
    //calcular suma de edades
    totalEdades = heroesFiltrados.reduce(function (anterior, actual) {
        return anterior += actual.edad;
    }, 0);
    console.log(totalEdades);
    cantidad = heroesFiltrados.length;
    console.log(cantidad);
    //se calcula el promedio
    if (cantidad != 0) {
        promedio = totalEdades / cantidad;
    }
    //asignar promedio  al valor de txtPromedio, usando jQuery
    $('#txtPromedio').val(promedio);
}
function mapearCampos() {
    var chkId = $('#chkId')[0].checked;
    var chkName = $('#chkName')[0].checked;
    var chkEdad = $('#chkEdad')[0].checked;
    var chkPoder = $('#chkPoder')[0].checked;
    var HeroesString = localStorage.getItem("Heroes");
    var HeroesJSON = HeroesString == null ? [] : JSON.parse(HeroesString);
    //hacer la logica para crear la tabla en base a los valores de los checkbox                                  
    var tabla = "<table class='table'><thead><tr>";
    if (chkId)
        tabla += "<th>Id</th>";
    if (chkName)
        tabla += "<th>Nombre</th>";
    if (chkEdad)
        tabla += "<th>Edad</th>";
    tabla += "<th>Tipo</th>";
    if (chkPoder)
        tabla += "<th>Poder</th>";
    tabla += "</tr></thead><tbody>";
    if (HeroesJSON.length == 0) {
        tabla += "<tr><td colspan='5'>No hay heroes que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < HeroesJSON.length; i++) {
            tabla += "<tr>";
            if (chkId)
                tabla += "<td>" + HeroesJSON[i].id + "</td>";
            if (chkName)
                tabla += "<td>" + HeroesJSON[i].nombre + "</td>";
            if (chkEdad)
                tabla += "<td>" + HeroesJSON[i].edad + "</td>";
            tabla += "<td>" + Clases.tipoHeroe[HeroesJSON[i].tipo] + "</td>";
            if (chkPoder)
                tabla += "<td>" + HeroesJSON[i].poder_principal + "</td>";
            tabla += "</tr>";
        }
    }
    tabla += "<tbody></table>";
    $('#divTabla').html(tabla);
}
//agregar el codigo que crea conveniente para realizar las bajas y las modificaciones
