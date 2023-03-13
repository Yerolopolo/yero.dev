// TODO: Poner taulaToValors en percentils
// TODO: Buen diseño para la página
// TODO: Comprobar que los datos sean numeros separados por comas
// TODO: Comprobar que los campos obligatorios estén rellenos
// TODO: Responsive design para móviles
// TODO: Cuadro de información a la derecha

// Campos con medida auto: onkeypress="this.style.width = ((this.value.length + 1) * 6) + '%';"

document.getElementById('boton').onclick = function() {
    const valors = document.getElementById('valores').value
    const frequencies = document.getElementById("frecuencias").value

    dades = taulaToValors(valors, frequencies)

    const resultados = estadistica(dades)
    document.getElementById("media").value = resultados.media;
    document.getElementById("mediana").value = resultados.mediana;
    document.getElementById("varianca").value = resultados.varianca;
    document.getElementById("sigma").value = resultados.sigma;

};

function taulaToValors(val, freq){
  if(!freq){ return val;}

  val = val.split(',').map(Number);
  freq = freq.split(',').map(Number);

  dades = val.map((item, index) => {
      return Array(freq[index]).fill(item);
  });
  
  dades2 = dades
  dades = []
  
  dades2.forEach(function(innerArray){
  
      innerArray.forEach(function(value){
          
          dades.push(value);
          
      });
          
  });

  return dades;
}

 function estadistica(dades) {
    if(!Array.isArray(dades)){
        dades = dades.split(',').map(Number);
    }
    var media =
      dades.reduce(function(a, b) {
        return a + b;
      }) / dades.length;
    var mediana =
      dades.length % 2 == 0
        ? (dades[dades.length / 2 - 1] + dades[dades.length / 2]) / 2
        : dades[Math.floor(dades.length / 2)];
    var varianca =
      dades.reduce(function(acum, i) {
        return acum + Math.pow(i - media, 2);
      }, 0) /
      (dades.length - 1);
    var sigma = Math.sqrt(varianca);
    var q1 =
      dades.length % 2 == 0
        ? dades[dades.length / 4]
        : dades[Math.floor(dades.length / 4)];
    var q3 =
      dades.length % 2 == 0
        ? dades[(dades.length / 4) * 3]
        : dades[Math.floor((dades.length / 4) * 3)];
    return {
        dades: dades,
        media: media,
        mediana: mediana,
        varianca: varianca,
        sigma: sigma,
        q1: q1,
        q3: q3
      };
    
    
  }