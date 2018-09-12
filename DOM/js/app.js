function cambioTexto()
{
  document.getElementById('p1').innerHTML = 'Otro Texto P1';   
  document.getElementsByTagName('p')[1].innerHTML = 'Otro texto P2';
  document.getElementsByClassName('clasep')[0].innerHTML = 'Otro texto P3';  
  var div = document.getElementById('divParrafos');
  div.getElementsByTagName('p')[3].innerHTML = 'Otro texto P4';  
}

function cambioClases()
{
    console.log(document.getElementById('p2').getAttribute('class'));
    //document.getElementById('p2').setAttribute('class','clasep');       
    document.getElementById('p2').className = 'clasep';
}

function sacarClases()
{
    //document.getElementById('p3').setAttribute('class','');   
    document.getElementById('p3').className = '';
}

function manejadores()
{
    document.getElementById('btnCambioTexto').addEventListener('click',cambioTexto,false);
    document.getElementById('btnCambioClases').addEventListener('click',cambioClases,false);
    document.getElementById('btnSacarClases').addEventListener('click',sacarClases,false);
}
//INIT
window.addEventListener('load',manejadores,false);