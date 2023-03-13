const nombreMundo = prompt(`Ingresa el nombre del mundo para tu videojuego: `);

const cantidadNiveles = Number(
  prompt(
    `¿Cuántos niveles quieres en tu mundo ${nombreMundo}? Recuerda que puedes ingresar un número del 1 al 10.`
  )
);

let contadorNiveles = 0;

while (contadorNiveles < cantidadNiveles) {
  contadorNiveles++;
  const nombreNivel = prompt(`Ingresa el nombre del nivel ${contadorNiveles}`);
  const cantidadEnemigos = Number(
    prompt(
      `¿Cuántos enemigos quieres que existan en el nivel ${contadorNiveles}? Recuerda que puedes ingresar un número del 1 al 10.`
    )
  );
  let contadorEnemigos = 0;
  while (contadorEnemigos < cantidadEnemigos) {
    contadorEnemigos++;
    const vidasEnemigo = Number(
      prompt(
        `¿Cuántas vidas tendrá el enemigo ${contadorEnemigos} del nivel ${contadorNiveles}?`
      )
    );
    const velocidadEnemigo = Number(
      prompt(
        `¿Cuál será la velocidad del enemigo ${contadorEnemigos} del nivel ${contadorNiveles}?`
      )
    );
    const oroEnemigo = Number(
      prompt(
        `¿Cuánto oro recogerá el jugador cuando derrote al enemigo ${contadorEnemigos} del nivel ${contadorNiveles}?`
      )
    );
    const poderEnemigo = Number(
      prompt(
        `¿Cuál será el poder del enemigo ${contadorEnemigos} del nivel ${contadorNiveles}?`
      )
    );
  }
  const cantidadObstaculos = Number(
    prompt(
      `¿Cuántos obstáculos quieres que existan en el nivel ${contadorNiveles}? Recuerda que puedes ingresar un número del 1 al 10.`
    )
  );
  let contadorObstaculos = 0;
  while (contadorObstaculos < cantidadObstaculos) {
    contadorObstaculos++;
    const posicionXObstaculo = Number(
      prompt(
        `¿Cuál será la posición X del obstáculo ${contadorObstaculos} del nivel ${contadorNiveles}?`
      )
    );
    const posicionYObstaculo = Number(
      prompt(
        `¿Cuál será la posición Y del obstáculo ${contadorObstaculos} del nivel ${contadorNiveles}?`
      )
    );
    const vidasObstaculo = Number(
      prompt(
        `¿Cuántas vidas tendrá el obstáculo ${contadorObstaculos} del nivel ${contadorNiveles}?`
      )
    );
    const oroObstaculo = Number(
      prompt(
        `¿Cuánto oro recogerá el jugador cuando derrote al obstáculo ${contadorObstaculos} del nivel ${contadorNiveles}?`
      )
    );
  }
  const cantidadTesoros = Number(
    prompt(
      `¿Cuántos tesoros quieres que existan en el nivel ${contadorNiveles}? Recuerda que puedes ingresar un número del 1 al 10.`
    )
  );
  let contadorTesoros = 0;
  while (contadorTesoros < cantidadTesoros) {
    contadorTesoros++;
    const posicionXTesoro = Number(
      prompt(
        `¿Cuál será la posición X del tesoro ${contadorTesoros} del nivel ${contadorNiveles}?`
      )
    );
    const posicionYTesoro = Number(
      prompt(
        `¿Cuál será la posición Y del tesoro ${contadorTesoros} del nivel ${contadorNiveles}?`
      )
    );
    const vidasTesoro = Number(
      prompt(
        `¿Cuántas vidas tendrá el tesoro ${contadorTesoros} del nivel ${contadorNiveles}?`
      )
    );
    const oroTesoro = Number(
      prompt(
        `¿Cuánto oro recogerá el jugador cuando destruya el tesoro ${contadorTesoros} del nivel ${contadorNiveles}?`
      )
    );
  }
}