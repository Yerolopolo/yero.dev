// TODO: Poner taulaToValors en percentils
// TODO: Buen diseño para la página
// TODO: Comprobar que los datos sean numeros separados por comas
// TODO: Comprobar que los campos obligatorios estén rellenos
// TODO: Responsive design para móviles
// TODO: Cuadro de información a la derecha
// TODO: Arreglar funcion varianza y sigma

// Campos con medida auto: onkeypress="this.style.width = ((this.value.length + 1) * 6) + '%';"

document.getElementById('boton').onclick = function() {
    const valors = document.getElementById('valores').value
    const frequencies = document.getElementById("frecuencias").value

    datos = taulaToValors(valors, frequencies)

    document.getElementById("media").value = calcMedia(datos);
    document.getElementById("mediana").value = calcMediana(datos);
    document.getElementById("varianca").value = calcVarianca(datos);
    document.getElementById("sigma").value =calcSigma(datos);

};

function taulaToValors(val, freq){ //Convierte dos Arrays (val, freq) en una sola, multiplicando val, freq veces
  if(!freq){ return val;}

  val = val.split(',').map(Number);
  freq = freq.split(',').map(Number);

  datos = val.map((item, index) => {
      return Array(freq[index]).fill(item);
  });
  
  datos2 = datos
  datos = []
  
  datos2.forEach(function(innerArray){
  
      innerArray.forEach(function(value){
          
          datos.push(value);
          
      });
          
  });

  return datos;
}

function calcMedia(datos)
{
  return datos.reduce(function(a, b) {return a + b;}) / datos.length
}

function calcMediana(datos)
{
  return datos.length % 2 == 0
  ? (datos[datos.length / 2 - 1] + datos[datos.length / 2]) / 2
  : datos[Math.floor(datos.length / 2)];
}

function calcVarianca(datos)
{
  for (let i = 0; i < datos.length; i++) {
    dividendo = dividendo + Math.pow(datos[i]-calcMedia(datos) , 2)
  }
  return dividendo/datos.length
}

function calcSigma(datos)
{
  Math.sqrt(calcVarianca(datos))
}
