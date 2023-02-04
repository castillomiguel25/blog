function ocultar () {
    document.getElementById('short').style.display = 'none'
}

function mostrar () {
    document.getElementById('short').style.display = 'block'
}

function mostrarOscultar () {
    if (short.style.display === 'none') {
        mostrar();
        document.getElementById('button').value = 'Ocultar'
    }
    else{
        ocultar();
        document.getElementById('button').value = 'Mostrar'
    }
}

 function ocultars () {
     document.getElementById('shorts').style.display = 'none'
 }

 function mostrars () {
     document.getElementById('shorts').style.display = 'block'
 }

 function mostrarOscultars () {
     if (shorts.style.display === 'none') {
         mostrars();
         document.getElementById('buttons').value = 'Ocultar'
     }
     else{
         ocultars();
         document.getElementById('buttons').value = 'Mostrar'
     }
 }
