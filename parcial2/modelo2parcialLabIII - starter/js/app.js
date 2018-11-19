///<reference path="mascota.ts"/>
//inicializador 
$(function () {
    //cargar los tipos de mascotas
    cargarTipos();
    //mostrar mascotas
    mostrarMascotas();
    //filtra los tipos de mascotas
    $('#cmbFiltro').change(function () {
        var tipo = Number($(this).val());
        filtrarMascotas(tipo);
    });
    //filtra las columnas
    $('#chkId').change(mapearCampos);
    $('#chkName').change(mapearCampos);
    $('#chkEdad').change(mapearCampos);
    $('#chkPatas').change(mapearCampos);
    mapearCampos();
});
//Agrega una mascota  
function agregarMascota() {
    var id = Number($('#txtId').val());
    var tipo = Number($('#selectTipo').val());
    var nombre = String($('#txtNombre').val());
    var edad = Number($('#txtEdad').val());
    var patas = Number($('#txtPatas').val());
    var nuevaMascota = new Clases.Mascota(id, nombre, edad, patas, tipo);
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    // console.log(nuevaMascota.toJSON());
    MascotasJSON.push(JSON.parse(nuevaMascota.toJSON()));
    localStorage.setItem("Mascotas", JSON.stringify(MascotasJSON));
    alert("Mascota guardada!!!");
    mostrarMascotas();
    limpiarCampos();
    console.log(nuevaMascota.toJSON());
}
/**
 * limpia los campos del formulario
 */
function limpiarCampos() {
    $('#txtNombre').val("");
    $('#txtId').val("");
    $('#txtEdad').val("");
    $('#txtPatas').val("");
    $('#selectTipo').val(0);
    $('#txtId').focus();
}
/**
 * carga la tabla con las mascotas
 */
function mostrarMascotas() {
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Patas</th></tr>";
    for (var i = 0; i < MascotasJSON.length; i++) {
        tabla += "<tr><td>" + MascotasJSON[i].id + "</td><td>" + MascotasJSON[i].nombre + "</td><td>" + MascotasJSON[i].edad + "</td><td>" + Clases.tipoMascota[MascotasJSON[i].tipo] + "</td><td>" + MascotasJSON[i].patas + "</td></tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
/*
 * carga el select de tipos de mascotas
 */
function cargarTipos() {
    /*
    for (let i = 0; i < 5; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoMascota[i] + '</option>');
    }
*/
    $.each(Clases.tipoMascota, function (value, tipo) {
        $("#cmbFiltro").append('<option value="' + value + '">' + tipo + '</option>');
        // console.log(value, tipo);  
    });
}
/**
 * Filtra las mascotas a mostrar en la tabla
 * @param tipo
 */
function filtrarMascotas(tipo) {
    //console.log(tipo);
    var mascotasFiltradas;
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    mascotasFiltradas = MascotasJSON.filter(function (mascota) {
        return Clases.tipoMascota[mascota.tipo] === Clases.tipoMascota[tipo];
    });
    // console.log(mascotasFiltradas);
    mostrarMascotasPorTipo(mascotasFiltradas);
}
/**
 * limpia el local storage
 */
function cleanStorage() {
    localStorage.clear();
    // alert("LocalStorage Limpio");
}
/**
 * filtra las mascotas por tipos y escribe la tabla?
 * @param lista
 */
function mostrarMascotasPorTipo(lista) {
    var tabla = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Patas</th></tr>";
    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay mascotas que mostrar</td></tr>";
    }
    else {
        for (var i = 0; i < lista.length; i++) {
            tabla += "<tr><td>" + lista[i].id + "</td><td>" + lista[i].nombre + "</td><td>" + lista[i].edad + "</td><td>" + Clases.tipoMascota[lista[i].tipo] + "</td><td>" + lista[i].patas + "</td></tr>";
        }
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
/**
 * calcula el promedio
 */
function calcularPromedio() {
    var promedio = 0;
    var totalEdades;
    var cantidad;
    var tipo = Number($('#cmbFiltro').val());
    var mascotasFiltradas;
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    mascotasFiltradas = MascotasJSON.filter(function (mascota) {
        return Clases.tipoMascota[mascota.tipo] === Clases.tipoMascota[tipo];
    });
    totalEdades = mascotasFiltradas.reduce(function (anterior, actual) {
        return anterior += actual.edad;
    }, 0);
    // console.log(totalEdades);
    cantidad = mascotasFiltradas.length;
    // console.log(cantidad);
    if (cantidad != 0) {
        promedio = totalEdades / cantidad;
    }
    $('#txtPromedio').val(promedio);
}
/**
 * Define que columnas mostrar
 */
function mapearCampos() {
    var chkId = $('#chkId')[0].checked;
    var chkName = $('#chkName')[0].checked;
    var chkEdad = $('#chkEdad')[0].checked;
    var chkPatas = $('#chkPatas')[0].checked;
    //console.log(chkId);
    var MascotasString = localStorage.getItem("Mascotas");
    var MascotasJSON = MascotasString == null ? [] : JSON.parse(MascotasString);
    var tabla = "<table class='table'><thead><tr>";
    if (chkId)
        tabla += "<th>Id</th>";
    if (chkName)
        tabla += "<th>Nombre</th>";
    if (chkEdad)
        tabla += "<th>Edad</th>";
    tabla += "<th>Tipo</th>";
    if (chkPatas)
        tabla += "<th>Patas</th>";
    tabla += "</tr>";
    for (var i = 0; i < MascotasJSON.length; i++) {
        tabla += "<tr>";
        if (chkId)
            tabla += "<td>" + MascotasJSON[i].id + "</td>";
        if (chkName)
            tabla += "<td>" + MascotasJSON[i].nombre + "</td>";
        if (chkEdad)
            tabla += "<td>" + MascotasJSON[i].edad + "</td>";
        tabla += "<td>" + Clases.tipoMascota[MascotasJSON[i].tipo] + "</td>";
        if (chkPatas)
            tabla += "<td>" + MascotasJSON[i].patas + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $('#divTabla').html(tabla);
}
