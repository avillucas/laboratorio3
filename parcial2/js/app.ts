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
    $('#btnAgregar').click(function(e){
        agregarHeroe();
    });
    $('#btnModificar').click(function(e){
        modificarHeroe();
    });    
   
});

function modificarHeroe()
{
    
}

function agregarHeroe(): void {
    let id: number = Number($('#txtId').val());
    let tipo: Clases.tipoHeroe = Number($('#selectTipo').val());
    let nombre:string = String($('#txtNombre').val());
    let edad:number = Number($('#txtEdad').val());
    let poder_principal:string = String($('#txtPoder').val());
    //crear heroe(nuevoHeroe) en base a los datos del DOM
    let nuevoHeroe = new Clases.Heroe(id,tipo, nombre,edad,poder_principal);    
    let HeroesString: string | null = localStorage.getItem("Heroes");
    let HeroesJSON: JSON[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    //console.log(nuevoHeroe.toJSON());
    //agregar el nuevo heroe a HeroesJSON
    HeroesJSON.push(JSON.parse(nuevoHeroe.toJSON()));
    //guardar HeroesJSON en localStorage con el nombre "Heroes"
    localStorage.setItem("Heroes",JSON.stringify(HeroesJSON));
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
    let HeroesString: string | null = localStorage.getItem("Heroes");
    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";
    for (let i = 0; i < HeroesJSON.length; i++) {
       tabla += `<tr><td>${HeroesJSON[i].id}</td><td>${HeroesJSON[i].nombre}</td><td>${HeroesJSON[i].edad}</td><td>${Clases.tipoHeroe[HeroesJSON[i].tipo]}</td><td>${HeroesJSON[i].poder_principal}</td></tr>`;
    }
    tabla += `</table>`;
    $('#divTabla').html(tabla);
}

function cargarTipos() {

    for (let i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#cmbFiltro").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }

    for (let i = 0; i < Object.keys(Clases.tipoHeroe).length / 2; i++) {
        $("#selectTipo").append('<option value="' + i + '">' + Clases.tipoHeroe[i] + '</option>');
    }
}

function filtrarHeroes(tipo: number) {

    let heroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);

    //en "heroesFiltrados", aplicar el filtro por tipo.
    heroesFiltrados = HeroesJSON.filter(
        function (heroe: Clases.Heroe) {
            //AYUDA. Usar el siguiente codigo: Clases.tipoHeroe[Heroe.tipo] === Clases.tipoHeroe[tipo]    
            return Clases.tipoHeroe[heroe.tipo] === Clases.tipoHeroe[tipo];
        }
    ); 
    mostrarHeroesPorTipo(heroesFiltrados);

}

function cleanStorage() {
    localStorage.clear();
    alert("LocalStorage Limpio");
}

function mostrarHeroesPorTipo(lista: Array<Clases.Heroe>) {

    //en caso de disponer de tiempo. arreglar la linea de abajo para que responda a los checkbox
    let tabla: string = "<table class='table'><thead><tr><th>Id</th><th>Nombre</th><th>Edad</th><th>Tipo</th><th>Poder</th></tr>";

    if (lista.length == 0) {
        tabla += "<tr><td colspan='4'>No hay heroes que mostrar</td></tr>";
    }
    else {
        for (let i = 0; i < lista.length; i++) {
            tabla += `<tr><td>${lista[i].id}</td><td>${lista[i].nombre}</td><td>${lista[i].edad}</td><td>${Clases.tipoHeroe[lista[i].tipo]}</td><td>${lista[i].poder_principal}</td></tr>`;
        }
    }
    tabla += `</table>`;
    $('#divTabla').html(tabla);

}

function calcularPromedio() {

    let promedio: number = 0;
    let totalEdades: number;
    let cantidad: number;

    let tipo: number = Number($('#cmbFiltro').val());

    let heroesFiltrados: Array<Clases.Heroe>;

    let HeroesString: string | null = localStorage.getItem("Heroes");

    let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
//filtrar heroes por tipo
    heroesFiltrados = HeroesJSON.filter(
        function (heroe: Clases.Heroe) {    
            return Clases.tipoHeroe[heroe.tipo] === Clases.tipoHeroe[tipo];
        }
    ); 
    //calcular suma de edades
    totalEdades = heroesFiltrados.reduce(function (anterior:number, actual:Clases.Heroe) {
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

        let chkId: boolean = (<HTMLInputElement> $('#chkId')[0]).checked;
        let chkName: boolean = (<HTMLInputElement> $('#chkName')[0]).checked;
        let chkEdad: boolean = (<HTMLInputElement> $('#chkEdad')[0]).checked;
        let chkPoder: boolean = (<HTMLInputElement> $('#chkPoder')[0]).checked;
    
        let HeroesString: string | null = localStorage.getItem("Heroes");
    
        let HeroesJSON: Clases.Heroe[] = HeroesString == null ? [] : JSON.parse(HeroesString);
        //hacer la logica para crear la tabla en base a los valores de los checkbox                                  
        let tabla: string = "<table class='table'><thead><tr>";
        if(chkId)
            tabla += "<th>Id</th>";
        if(chkName)
            tabla += "<th>Nombre</th>";
        if(chkEdad)
            tabla+= "<th>Edad</th>";
        tabla+= "<th>Tipo</th>";            
        if(chkPoder)
            tabla += "<th>Poder</th>";
        tabla += "</tr></thead><tbody>";   
        if (HeroesJSON.length == 0) {
            tabla += "<tr><td colspan='5'>No hay heroes que mostrar</td></tr>";
        }else {        
            for (let i = 0; i < HeroesJSON.length; i++) {
                tabla += `<tr>`;
                if(chkId)
                    tabla += `<td>${HeroesJSON[i].id}</td>`;
                if(chkName)
                    tabla += `<td>${HeroesJSON[i].nombre}</td>`;
                if(chkEdad)
                    tabla+= `<td>${HeroesJSON[i].edad}</td>`;
                tabla += `<td>${Clases.tipoHeroe[HeroesJSON[i].tipo]}</td>`;
                if(chkPoder)
                    tabla += `<td>${HeroesJSON[i].poder_principal}</td>`;
                tabla += `</tr>`;             
            }
        }
        tabla += `<tbody></table>`;
        $('#divTabla').html(tabla);
    }
//agregar el codigo que crea conveniente para realizar las bajas y las modificaciones

    