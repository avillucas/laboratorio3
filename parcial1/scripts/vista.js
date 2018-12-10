function actualizarTabla(lista)
{  
    escribirtabla(lista);
}

function escribirtabla(collection)
{    
    var str = '';
    for(c in collection)
    {   
        str += retornarFila(collection[c]);      
    }
    $('#listTable').html(str);
    //document.getElementsByClassName('filaClickeable').onclick = traerIdHeroe;
    $('#listTable tr.filaHeroe').click(traerIdHeroe);
}

function retornarFila(heroe)
{
    var clase = (heroe.activo) ? ' heroe_activo ':'';
    return '<tr class=" '+clase+' filaHeroe "  data-id="'+heroe.id+'">'
    +'<td>'+heroe.id+'</td>'
    +'<td>'+heroe.nombre+'</td>'
    +'<td>'+heroe.apellido+'</td>'
    +'<td>'+heroe.alias+'</td>'
    +'<td>'+heroe.edad+'</td>'
    +'<td>'+heroe.lado+'</td>'
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
        $('#idField').val(heroe.id).attr('disabled',true);
        $('#nombreField').val(heroe.nombre);
        $('#apellidoField').val(heroe.apellido);
        $('#aliasField').val(heroe.alias);
        $('#edadField').val(heroe.edad);
        //$('#ladoField').val(heroe.lado),                
        $('#ladoField[value="'+heroe.lado+'"]').attr('checked',true),                
        $('#activeField').attr('checked',(heroe.active));           
        $('#btnModificarForm').show();
        $('#btnEliminarForm').show();      
        $('#btnAltaForm').hide();
    }
    else
    {   
        
        $('#idField').val("").attr('disabled',false);
        $('#nombreField').val("");
        $('#apellidoField').val("");
        $('#aliasField').val("");
        $('#edadField').val("");
        $('#ladoField[value="heroe"]').attr('checked',true),                        
        $('#btnModificarForm').hide();
        $('#btnEliminarForm').hide();
        $('#btnAltaForm').show();
    }
    document.getElementById('agregarSection').style.display = "block";
   // $('#agregarSection').show();   
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

function ocultarFormulario()
{
    document.getElementById('agregarSection').style.display = "none";
}