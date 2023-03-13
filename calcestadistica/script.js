// TODO: Poner taulaToValors en percentils
// TODO: Comprobar que los datos sean numeros separados por comas
// TODO: Comprobar que los campos obligatorios estén rellenos
// TODO: Responsive design para móviles
// TODO: Cuadro de información a la derecha
// TODO: Arreglar funcion varianza y sigma
// TODO: No poder seleccionar las respuestas
// TODO: Click to copy
// TODO: Centrar campos de respuesta

// Campos con medida auto: onkeypress="this.style.width = ((this.value.length + 1) * 6) + '%';"

// .replace(/,/g, '.')

document.getElementById('boton').onclick = function() {
  const valors = document.getElementById('valores').value
  const frequencies = document.getElementById("frecuencias").value
  document.getElementById("media").style.color = "black";
  document.getElementById("mediana").style.color = "black";
  document.getElementById("varianca").style.color = "black";
  document.getElementById("sigma").style.color = "black";

 


  try{
    datos = taulaToValors(valors, frequencies)
    document.getElementById("media").value = calcMedia(datos);
  } catch(error){
    document.getElementById("media").value = error.name + ': ' + error.message;
    document.getElementById("media").style.color = "red";
  }

  try{
    datos = taulaToValors(valors, frequencies)
    document.getElementById("mediana").value = calcMediana(datos);
  } catch(error){
    document.getElementById("mediana").value = error.name + ': ' + error.message;
    document.getElementById("mediana").style.color = "red";
  }

  try{
    datos = taulaToValors(valors, frequencies)
    document.getElementById("varianca").value = calcVarianca(datos);
  } catch(error){
    document.getElementById("varianca").value = error.name + ': ' + error.message;
    document.getElementById("varianca").style.color = "red";
  }

  try{
    datos = taulaToValors(valors, frequencies)
    document.getElementById("sigma").value = calcSigma(datos);
  } catch(error){
    document.getElementById("sigma").value = error.name + ': ' + error.message;
    document.getElementById("sigma").style.color = "red";
  }

};

function taulaToValors(val, freq){ //Convierte dos Arrays (val, freq) en una sola, multiplicando val, freq veces

  for (i=0; i < freq.length; i++){ // Comprobar si todos los valores de la array son numeros
    if (freq[i] == Infinity || Number.isNaN(freq[i])) {
        var noNumber = true
        console.log("Has introducido valores que no son números, revisalos.");
    }
  }

  if(!revisarInput(val, true)) {throw customError("errordatos")}
  val = val.split(',').map(Number);
  if(!freq.length || noNumber) {return val;}
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

function customError(type){  // Handler para errores
  if(type == "errordatos"){
    var errorDatos = new Error("errordatos")
    errorDatos.name = "Error"
    errorDatos.message = "Revisa la consola"
    return errorDatos;
  } else {
    var unknownError = new Error("unknown")
    unknownError.name = "Error"
    unknownError.message = "Desconocido"
    return unknownError;
  }
}

function revisarInput(input, isRequired) //Devuelve valido: true si los datos son aptos
{
  for (i=0; i < input.length; i++){ // Comprobar si todos los valores de la array son numeros
    if (input[i] == Infinity || Number.isNaN(input[i])) {
        var noNumber = true
        console.log("Has introducido valores que no son números, revisalos.");
    }
  }

  if(!input.length && isRequired || noNumber){
    return false;
  } else {
    return true;
  }
}

function calcMedia(datos)
{
  if(!revisarInput(datos, true)){throw customError("errordatos"); }
  return datos.reduce(function(a, b) {return a + b;}) / datos.length;
  console.log(datos)
}

function calcMediana(datos)
{
  if(!revisarInput(datos, true)){throw customError("errordatos"); }
  return datos.length % 2 == 0
  ? (datos[datos.length / 2 - 1] + datos[datos.length / 2]) / 2
  : datos[Math.floor(datos.length / 2)];
}

function calcVarianca(datos)
{
  if(!revisarInput(datos, true)){throw customError("errordatos"); }
  var dividendo = 0
  for (let i = 0; i < datos.length; i++) {
    dividendo = dividendo + Math.pow(datos[i]-calcMedia(datos) , 2)
  }
  return dividendo/datos.length;
}

function calcSigma(datos)
{
  if(!revisarInput(datos, true)){throw customError("errordatos"); }
  return Math.sqrt(calcVarianca(datos))
}
