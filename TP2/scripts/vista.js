function actualizarTabla(lista)
{  
    ejecutarTransaccion("Mostrar");
}

function escribirtabla(collection)
{    
    var str = '';
    for(c in collection)
    {   
        str += retornarFila(collection[c]);      
    }
    $('#listTable').html(str);
}
function retornarFila(heroe)
{
    var clase = (heroe.activo) ? ' class="heroe_activo" ':'';
    return '<tr '+clase+' data-id="'+heroe.id+'">'
    +'<td>'+heroe.nombre+'</td>'
    +'<td>'+heroe.apellido+'</td>'
    +'<td>'+heroe.alias+'</td>'
    +'<td>'+heroe.edad+'</td>'
    +'<td>'+heroe.active+'</td>'
    +'</tr>';     
}

function lanzarSpinner(callback)
{
    $('#spinner').show();
    if(typeof callback != 'undefined')
    {
        callback;
    }
}

function cortarSpinner(callback)
{
    $('#spinner').hide();    
    if(typeof callback != 'undefined')
    {
        callback;
    }
}
function ocultarFormulario()
{
    $('#agregarSection').hide(); 
}

function mostrarFormulario(heroe)
{    
    if(typeof heroe !== 'undefined')
    {
        $('#nombreField').val(heroe.nombre);
        $('#apellidoField').val(heroe.apellido);
        $('#aliasField').val(heroe.alias);
        $('#edadField').val(heroe.edad);
        //TODO MEJORAR
        $('#ladoField').val(heroe.lado),                
        $('#activeField').attr('checked',(heroe.active));           
        $('#btnModificarForm').show();
        $('#btnAltaForm').hide();
    }
    else
    {
        $('#btnModificarForm').hide();
        $('#btnAltaForm').show();
    }
    $('#agregarSection').show();   
}

function mostrarSeccionLista()
{
    $('#listSection').show();   
    ejecutarTransaccion("Mostrar");
}
function ocultarSeccionLista()
{
    $('#listSection').hide();   
}