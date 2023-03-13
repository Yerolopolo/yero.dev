document.getElementById('boton').onclick = function() {
    const valors = document.getElementById('valores').value
    const frequencies = document.getElementById("frecuencias").value
    percentilnumero = document.getElementById("percentilnumero").value

    const resultados = estadistica(valors, percentilnumero)
    document.getElementById("percentil").value = resultados;

};

 function estadistica(dades, percentilnumero) {
    if(!Array.isArray(dades)){
        dades = dades.split(',').map(Number);
    }

   
    

    var percentil =
        dades.length % 2 == 0
        ? dades[(dades.length / 100) * percentilnumero]
        : dades[Math.floor((dades.length / 100) * percentilnumero)];

    console.log(percentil)
    return percentil;
    
    
  }