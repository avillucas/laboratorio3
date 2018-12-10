var lista;
const server_url = "http://localhost:3000/";
var xhr;

window.onload = asignarEventos;

function asignarEventos() {
    btnAlta.onclick = function () {
        ejecutarTransaccion("Mostrar");
    }
    btnAltaForm.onclick = function () {
        ejecutarTransaccion("Alta");
    }
    btnModificarForm.onclick = function () {
        ejecutarTransaccion("Modificacion");
    }           
    btnEliminarForm.onclick = function () {
        ejecutarTransaccion("Baja");
    }           
    btnAltaCerrar.onclick = function() {
        ejecutarTransaccion("Ocultar");        
    }
    //si tocan la fila le dispara el valor 
    ejecutarTransaccion("actualizarLista");
}


function traerIdHeroe(e) {
    //Este manejador de evento se ejecutra cuando se hace click en la grilla dinamica.
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar
    var id = $(this).data('id');
    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:    
    var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("MostrarHeroe", heroe);
}

function buscarHeroe(lista,id)
{
    for(c in lista)
    {  
        if(lista[c].id == id){
           return c;
        }      
    }
}

function altaPersonaje() {
    //genero un nuevo "Personaje", y lo inserto        
    var nuevoPersonaje = new Personaje(  
        null,          
        $('#nombreField').val(),
        $('#apellidoField').val(),
        $('#aliasField').val(),
        $('#edadField').val(),
        $('input[name="ladoField"]:checked').val()        
    );        
    ejecutarTransaccion("Insertar", nuevoPersonaje);
}

function eliminarPersonaje() {
    //Propuesta: 1)Busco en el DOM el id del personaje a eliminar
    var id =  $('#idField').val();
    //2)Me traigo el heroe de la lista, haciendo una funcion de buscar, como por ejemplo:
    var heroe = lista[buscarHeroe(lista, id)];
    //3)llamo a ejecutarTransaccion
    ejecutarTransaccion("Eliminar", heroe);
    //Aca va alguna animacion para cerrar el formulario

}

function modificarPersonaje() 
{
    var id = $('#idField').val();
    var nombre = $('#nombreField').val();
    var apellido = $('#apellidoField').val();
    var alias = $('#aliasField').val();
    var edad = $('#edadField').val();
    var lado = $('input[name="ladoField"]:checked').val();
    //agregar codigo que crea necesario
    var personajeModificado = new Personaje(id, nombre, apellido, alias, edad, lado);
    ejecutarTransaccion("Modificar", personajeModificado);
    //animacion para cerrar formulario
    ocultarFormulario();
}

function traerListaHeroes(callback) {
    //ESTA FUNCION RECIBE COMO PARAMETRO UN CALLBACK, POR SI SE QUIERE USAR 
    //PARA REFRESCAR LA TABLA A LA VUELTA DE LA PETICION AL SERVIDOR
    //VER EN CONTROLADOR.JS LA FUNCION ejecutarTransaccion PARA case "actualizarLista"
    var data = {
        "collection":"heroes"     
    }
    lanzarSpinner();
    $.get(server_url+'traer',data,function(response){      
        cortarSpinner(mostrarSeccionLista);        
        callback(response.data);
    });
}

function insertarHeroe(heroe) {

    // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
    var data = {
        "collection":"heroes",
        "heroe": heroe
    }
    lanzarSpinner();   
    $.ajax({
        url: server_url+'agregar',
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: 'POST',
        success: function(data, textStatus, jqXHR){
            alert(data.message);
            ocultarFormulario();            
            cortarSpinner();
            traerListaHeroes(manejarActualizarLista);                
        },
        error:manejadorErrorAjax
    });
 
}

function eliminarHeroe(heroe) {
    var data = {
        "collection":"heroes",
        "id": heroe.id
    }
    lanzarSpinner();   
    $.ajax({
        url: server_url+'eliminar',
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: 'POST',
        success: function(data, textStatus, jqXHR){
            alert(data.message);
            ocultarFormulario();            
            cortarSpinner();
            traerListaHeroes(manejarActualizarLista);                
        },
        error:manejadorErrorAjax
    });
 

}

function modificarHeroe(heroe) {
      // Acá va el código de la peticion ajax para insertar el nuevo heroe (POST)
      var data = {
        "collection":"heroes",
        "heroe":heroe
    };
    lanzarSpinner();
    $.ajax({
        url: server_url+'modificar',
        contentType: 'application/json',
        data: JSON.stringify(data),
        type: 'POST',
        success: function(data, textStatus, jqXHR){
            alert(data.message);
            ocultarFormulario();            
            cortarSpinner();
            traerListaHeroes(manejarActualizarLista);                
        },
        error:manejadorErrorAjax
    });
}

function manejadorErrorAjax(XMLHttpRequest, textStatus, errorThrown){
      console.info(XMLHttpRequest);
}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
 //           document.getElementById("demo").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send(); 
}

/**
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Request finished. Do processing here.
    }
}
xhr.send("foo=bar&lorem=ipsum"); 
// xhr.send(new Int8Array()); 
// xhr.send(document);
 */