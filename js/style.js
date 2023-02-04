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
