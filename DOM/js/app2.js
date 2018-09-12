function crearParrafo()
{
    var parrafo = document.createElement('P');    
    var texto = document.createTextNode(document.getElementById('txtArea').value);
    parrafo.appendChild(texto);
    parrafo.setAttribute('class','clasep');
    document.getElementById('div1').appendChild(parrafo);    
}
function crearImagen()
{
    var imagen  = document.createElement('IMG');
    imagen.setAttribute('src','img/phplogo.jpg');
    imagen.setAttribute('alt','PHP');
    document.getElementById('div1').appendChild(imagen);    
}
function clearLast()
{
    document.getElementById('div1').removeChild(document.getElementById('div1').lastChild);    
}
function clearFirst()
{
    document.getElementById('div1').removeChild(document.getElementById('div1').firstChild);
    
}
function replaceFirstElement()
{
    clearFirst()
    var parrafo = document.createElement('p');
    var texto = document.createTextNode('REEMPLAZADO');
    parrafo.appendChild(texto);    
    document.getElementById('div1').replaceChild(parrafo,document.getElementById('div1').firstChild);
}

function manejador()
{    
    //listeners
    var btnCrearParrafo = document.getElementById('btnCrearParrafo').addEventListener('click',crearParrafo,false);
    var btnCrearImagen = document.getElementById('btnCrearImagen').addEventListener('click',crearImagen,false);
    var btnClearLast = document.getElementById('btnClearLast').addEventListener('click',clearLast,false);
    var btnClearFirst = document.getElementById('btnClearFirst').addEventListener('click',clearFirst,false);
    var btnReplaceFirstElement = document.getElementById('btnReplaceFirstElement').addEventListener('click',replaceFirstElement,false);        
}
//
window.addEventListener('load',manejador,false);