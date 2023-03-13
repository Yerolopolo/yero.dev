document.getElementById('boton').onclick = function() {
    const valors = document.getElementById('valores').value
    const frequencies = document.getElementById("frecuencias").value

    dades = taulaToValors(valors, frequencies)

    const resultados = estadistica(dades)
    document.getElementById("q1").value = resultados.q1;
    document.getElementById("q2").value = resultados.q2;
    document.getElementById("q3").value = resultados.q3;

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

   
    
    var q1 =
        dades.length % 2 == 0
        ? dades[dades.length / 4]
        : dades[Math.floor(dades.length / 4)];

    var q2 =
        dades.length % 2 == 0
        ? (dades[dades.length / 2 - 1] + dades[dades.length / 2]) / 2
        : dades[Math.floor(dades.length / 2)];

    var q3 =
        dades.length % 2 == 0
        ? dades[(dades.length / 4) * 3]
        : dades[Math.floor((dades.length / 4) * 3)];


    return {
        q1: q1,
        q2: q2,
        q3: q3
      };
    
    
  }