// Array usuarios
const usuarios = [
  {
    usuario: "IVANTXU15",
    clave: "1234",
  },
  {
    usuario: "JAVITXU16",
    clave: "12345678Aa?",
  },
];

// Patterns
var patternuser = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

var patternpwrd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;

// Variables globales
var started_user;
var letInterval;

// -------------- Función que controla el Inicio de sesión -------------------
function iniciar_sesion() {
  // Obtengo el valor del campo "usuario" y "clave" y los convierte a mayúsculas
  let usuario = document.getElementById("usuario").value.toUpperCase();
  let clave = document.getElementById("clave").value;
  // Obtengo el elemento con id "usuario_iniciado" y lo guardo en la variable "usuario_iniciado"
  let usuario_iniciado = document.getElementById("usuario_iniciado");
  let usuario_nombre = document.getElementById("usuario_iniciado2");
  let usuario_cuenta = document.getElementById("usuario_cuenta");
  let usuario_clave = document.getElementById("clave_cuenta");

  let usuario_encontrado; // variable para almacenar el usuario si se encuentra

  // Compruebo si el usuario cumple con el patrón establecido
  if (patternuser.test(usuario)) {
    // Compruebo si la clave contiene espacios en blanco, alerto
    if (clave.includes(" ")) {
      alert("La clave no puede contener espacios");
      document.getElementById("clave").value = "";
      document.getElementById("clave").focus();
      return;
    }
    // Recorro el array "usuarios"
    for (let y = 0; y < usuarios.length; y++) {
      // Compruebo si el usuario introducido coincide con un usuario del array
      if (usuario == usuarios[y].usuario) {
        // Si la clave introducida coincide con la del usuario, muestra un mensaje de bienvenida y guarda el usuario iniciado
        if (clave == usuarios[y].clave) {
          usuario_encontrado = usuarios[y]; // actualiza la variable usuario_encontrado
          alert("Bienvenido/a " + usuarios[y].usuario);
          // Introduzco mediante innerHTML los datos del usuario en el id "usuario_iniciado"
          usuario_iniciado.innerHTML = usuarios[y].usuario;
          show_menu(); // Llamo a la función

          // Paso a la variable global "started_user" el valor de la variable "usuario"
          started_user = usuario;
          // Introduzco mediante innerHTML datos en otras cpas
          usuario_nombre.innerHTML = usuarios[y].usuario;
          usuario_cuenta.innerHTML = usuarios[y].usuario;
          usuario_clave.innerHTML = usuarios[y].clave;
          break;
        } else {
          // Alerta
          alert("Contraseña incorrecta");
          document.getElementById("clave").value = "";
          document.getElementById("clave").focus();
          return;
        }
      }
    }
    // Si el usuario no es encontrado, muestra un mensaje de alerta y vacía los campos "usuario" y "clave"
    if (!usuario_encontrado) {
      alert("El usuario no existe");
      document.getElementById("usuario").value = "";
      document.getElementById("usuario").focus();
      document.getElementById("clave").value = "";
    }
  }
  //Si el usuario no cumple con el patrón establecido, muestra un mensaje de alerta y vacía los campos "usuario" y "clave"
  else if (usuario == "") {
    alert("No se puede dejar el usuario en blanco");
    document.getElementById("usuario").focus();
    document.getElementById("clave").value = "";
  } else {
    alert(
      "El usuario introducido no cumple con los requisitos. El nombre de usuario ha de tener un mínimo de 8 caracteres, entre los cuales debe haber letras y dígitos."
    );
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
    document.getElementById("usuario").focus();
  }
}

// -------------- Función que controla el registro de un nuevo usaurio -----------------
function registro() {
  // Obtengo los vlaores de los id "nuevo_usuario" , "nueva_clave" y "nueva_clave2"
  let nuevo_usuario = document
    .getElementById("nuevo_usuario")
    .value.toUpperCase();
  let nueva_clave = document.getElementById("nueva_clave").value;
  let nueva_clave2 = document.getElementById("nueva_clave2").value;
  // Controlo que no se introduzcan espacios en blanco, si no alerto
  if (nuevo_usuario == "" || nueva_clave == "" || nueva_clave2 == "") {
    alert("Los campos no pueden estar vacios");
    document.getElementById("nuevo_usuario").value = "";
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave2").value = "";
    document.getElementById("nuevo_usuario").focus();
    return;
  }
  // Controlo que el usuario introducido no contiene espacios
  if (nuevo_usuario.includes(" ")) {
    alert("El usuario no puede contener espacios en blanco.");
    document.getElementById("nuevo_usuario").value = "";
    document.getElementById("nuevo_usuario").focus();
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave2").value = "";
    return;
  }
  // Controlo que la primera clave introducida no contiene espacios
  if (nueva_clave.includes(" ")) {
    alert("La clave no puede contener espacios en blanco.");
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave").focus();
    document.getElementById("nueva_clave2").value = "";
    return;
  }
  // Controlo que la segunda clave introducida no contiene espacios
  if (nueva_clave2.includes(" ")) {
    alert("La clave no puede contener espacios en blanco.");
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave2").value = "";
    document.getElementById("nueva_clave").focus();
    return;
  }
  // RegExp para controlar que el usuario introducio contiene 8 caracteres mínimo, entre los que se encuentran mayúsculas, minúsculas y dígitos.
  if (!patternuser.test(nuevo_usuario)) {
    alert(
      "El usuario introducido no cumple con los requisitos. El nombre de usuario ha de tener un mínimo de 8 caracteres, entre los cuales debe haber una letra y un dígito"
    );
    document.getElementById("nuevo_usuario").value = "";
    document.getElementById("nuevo_usuario").focus();
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave2").value = "";
    return;
  }
  // RegExp que controla que la contraseña introducida no tenga espacios, tenga 8 caracteres mínimo, mayúsculas y minúsculas y al menos un símbolo.
  if (!patternpwrd.test(nueva_clave)) {
    alert(
      "La clave no puede tener espacios y ha de tener 8 o mas caracteres entre los que debe haber, mayúsculas y minúsculas y al menos un símbolo"
    );
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave").focus();
    document.getElementById("nueva_clave2").value = "";
    return;
  }
  // Compruebo que el usuario no existe en la base de datos.
  for (let y = 0; y < usuarios.length; y++) {
    if (nuevo_usuario == usuarios[y].usuario) {
      alert("El usuario introducido ya existe en la base de datos");
      document.getElementById("nuevo_usuario").value = "";
      document.getElementById("nuevo_usuario").focus();
      document.getElementById("nueva_clave").value = "";
      document.getElementById("nueva_clave2").value = "";
      return;
    }
  }
  // Controlo que salte una alerta si las contraseñas introducidas no coinciden
  if (nueva_clave != nueva_clave2) {
    alert("Las claves introducidas no coinciden");
    document.getElementById("nueva_clave").value = "";
    document.getElementById("nueva_clave").focus();
    document.getElementById("nueva_clave2").value = "";
    return;
  }
  //Añadimos al array usuarios el nuevo usuario y muestra una alerta con sus datos, llamamos a la función "show_iniciar_sesion()".
  usuarios.push({
    usuario: nuevo_usuario,
    clave: nueva_clave,
  });
  alert(
    "El usuario " +
      nuevo_usuario +
      " ha sido dado de alta correctamente. \n ¡ BIENVENIDO !"
  );
  show_iniciar_sesion();
}

// --------------- Función que controla el juego  PIEDRA, PAPEL O TIJERA ----------------
function piedra_papel_tijera() {
  let terminar = false;
  // Alerta con la explicación
  alert("Iniciar juego");
  alert(
    "El objetivo es vencer al oponente seleccionando el arma que gana, según las siguientes reglas:\nLa piedra gana a la tijera.\nLa tijera gana al papel.\nEl papel gana a la piedra."
  );
  while (!terminar) {
    // Iniciar el juego
    // Pedir al jugador que seleccione su ataque
    let jugador = prompt("0 para PIEDRA\n1 para PAPEL\n2 para TIJERA");
    // Salir del bucle si el jugador presionó cancelar
    if (jugador === null) {
      terminar = true;
      show_juegos_gratis();
      return;
    }
    // Validar la entrada del jugador
    while (jugador !== "0" && jugador !== "1" && jugador !== "2") {
      alert("Introduce un valor válido (0, 1, o 2).");
      jugador = prompt("0 para PIEDRA\n1 para PAPEL\n2 para TIJERA");
      // Salir del bucle si el jugador presionó cancelar
      if (jugador === null) {
        terminar = true;
        show_juegos_gratis();
        return;
      }
    }
    // Mostrar el ataque seleccionado por el jugador
    if (jugador == 0) {
      alert("Has elegido PIEDRA");
    } else if (jugador == 1) {
      alert("Has elegido PAPEL");
    } else if (jugador == 2) {
      alert("Has elegido TIJERA");
    }

    // Elegir ataque de la maquina al azar
    let maquina = Math.round(Math.random() * 2);
    if (maquina == 0) {
      alert("El enemigo ha elegido PIEDRA");
    } else if (maquina == 1) {
      alert("El enemigo ha elegido PAPEL");
    } else if (maquina == 2) {
      alert("El enemigo ha elegido TIJERA");
    }

    // Resultado
    if (jugador == maquina) {
      alert("Empate");
    } else if (jugador == 0 && maquina == 2) {
      alert("HAS GANADO! :D");
    } else if (jugador == 1 && maquina == 0) {
      alert("HAS GANADO! :D");
    } else if (jugador == 2 && maquina == 1) {
      alert("HAS GANADO! :D");
    } else {
      alert("Has perdido... :(");
    }

    // Preguntar al jugador si quiere terminar el juego
    let continuar = confirm("¿Quieres seguir jugando?");

    // Salir del bucle si el jugador no quiere continuar
    if (!continuar) {
      terminar = true;
      show_juegos_gratis();
    }
  }
}

// --------------- Función que controla el juego de TRES EN RAYA -------------------------
function tresenraya() {
  // Selecciono todas las celdas y el mensaje donde se mostrará el resultado del juego
  const cells = document.querySelectorAll(".cell");
  const mensaje = document.querySelector(".mensaje");
  // Defino el jugador actual y si el juego ha acabado o no
  let jugadorActual = "X";
  let juegoacabado = false;

  // Defino todas las combinaciones ganadoras posibles en el juego
  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Muestro un mensaje al usuario para iniciar el juego y se explican las reglas
  alert("Iniciar juego");
  alert(
    "El juego consiste en crear una fila de X u O antes que tu adversario."
  );
  // Añado un event listener a cada celda, el cual llama a la función "manejoClick" cuando se hace clic en una celda
  cells.forEach((cell) => {
    cell.addEventListener("click", manejoClick, { once: true });
  });

  function manejoClick(e) {
    // Si el juego ya ha acabado, no se hace nada
    if (juegoacabado) return;

    // Se obtiene la celda en la que se hizo click
    const cell = e.target;
    // Se establece el valor del jugador actual (X u O) en la celda
    cell.textContent = jugadorActual;
    // Se agrega la clase correspondiente al jugador actual (X u O) a la celda
    cell.classList.add(jugadorActual);

    // Si el jugador actual ha ganado, se llama a la función "endGame" con "false" como argumento
    if (checkWin(jugadorActual)) {
      endGame(false);
    } else if (checkTie()) {
      // Si hay un empate, se llama a la función "endGame" con "true" como argumento
      endGame(true);
    } else {
      // Si el juego continúa, se cambia el jugador actual
      jugadorActual = jugadorActual === "X" ? "O" : "X";
    }
  }
  // Función para verificar si el jugador actual ha ganado el juego
  function checkWin(player) {
    return combinaciones.some((combination) => {
      return combination.every((index) => {
        return cells[index].classList.contains(player);
      });
    });
  }
  // Función para verificar si hay un empate
  function checkTie() {
    return [...cells].every((cell) => {
      return cell.classList.contains("X") || cell.classList.contains("O");
    });
  }
  // Función para terminar el juego
  function endGame(isTie) {
    // Se establece que el juego ha acabado
    juegoacabado = true;
    // Si hay un empate, se muestra un mensaje de empate en el mensaje del juego
    if (isTie) {
      mensaje.textContent = "Empate!";
    } else {
      // Salta un menssaje si alguien ha ganado
      mensaje.textContent = `${jugadorActual}  ha ganado!`;
    }

    cells.forEach((cell) => {
      cell.removeEventListener("click", manejoClick);
    });

    setTimeout(restartGame, 2000);
  }
  // Función que se utiliza para reiniciar el juego después de que se haya alcanzado un resultado.
  // Vuelve a establecer el texto de todas las casillas en vacío y elimina la clase "X" y "O"
  function restartGame() {
    cells.forEach((cell) => {
      cell.textContent = "";
      cell.classList.remove("X", "O");
      cell.addEventListener("click", manejoClick, { once: true });
    });
    // Una vez acabado el juego y mostrado el mensaje, se reinicia en un intervalo de 2 segundos
    mensaje.textContent = "";
    jugadorActual = "X";
    juegoacabado = false;
    setTimeout(() => {
      cells.forEach((cell) => {
        cell.addEventListener("click", manejoClick, { once: true });
      });
    }, 2000);
  }
}

// ---------------- Función para el juego SNAKE mediante canvas------------------------
function snake() {
  // Creo una constante llamada 'canvas' y le asigno el elemento con id 'canvas'.
  const canvas = document.getElementById("canvas");
  // Creo una constante llamada 'ctx' y le asigno el contexto de 2D de nuestro elemento 'canvas'.
  const ctx = canvas.getContext("2d");
  // Creo una constante llamada 'scoreDisplay' y le asigno el elemento con id 'score'.
  const scoreDisplay = document.getElementById("score");
  // Creo una constante llamada 'gridSize' y le asigno el valor 10, que será el tamaño de nuestros cuadros.
  const gridSize = 10;
  // La variable 'snake' contiene un arreglo con un objeto que representa la posición inicial de la serpiente.
  let snake = [{ x: 200, y: 200 }];
  // La variable 'food' contiene un objeto con dos valores 'x' e 'y' generados por la función 'getRandomCoordinate()'.
  let food = { x: getRandomCoordinate(), y: getRandomCoordinate() };
  // Creo una variable llamada 'direction' y le asigno el valor 'right', que será la dirección inicial de nuestra serpiente.
  let direction = "right";
  // La variable llamada 'score' contiene la puntuación inicial del jugador.
  let score = 0;
  // Por último 'gameLoop' será usada para almacenar el intervalo de nuestro bucle principal del juego.
  let gameLoop;

  alert("Iniciar juego");
  alert("El juego consiste en comerse los cuadrados rojos con la serpiente");
  // Función que devuelve una coordenada aleatoria dentro del canvas
  function getRandomCoordinate() {
    return Math.floor(Math.random() * 39) * gridSize;
  }

  // Función que dibuja un cuadrado en el canvas
  function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
  }

  // Función que actualiza el juego en cada frame
  function update() {
    const head = { ...snake[0] };
    switch (direction) {
      case "up":
        head.y -= gridSize;
        break;
      case "down":
        head.y += gridSize;
        break;
      case "left":
        head.x -= gridSize;
        break;
      case "right":
        head.x += gridSize;
        break;
      default:
        break;
    }
    // Si la serpiente come la comida, se actualiza la puntuación y se genera una nueva posición aleatoria para la comida
    if (head.x === food.x && head.y === food.y) {
      food = { x: getRandomCoordinate(), y: getRandomCoordinate() };
      score += 10;
      scoreDisplay.innerText = score;
    } else {
      snake.pop();
    }

    if (
      head.x < 0 ||
      head.x > canvas.width - gridSize ||
      head.y < 0 ||
      head.y > canvas.height - gridSize ||
      snake.some((part) => part.x === head.x && part.y === head.y)
    ) {
      clearInterval(gameLoop);
      const playAgain = confirm(
        "Que lástima !! Tu puntuación es de " +
          score +
          ".\n¿Quieres jugar de nuevo?"
      );
      if (playAgain) {
        restartGame();
      } else {
        clearInterval(gameLoop); // Agregado para detener el intervalo
        show_juegos_gratis();
        score = 0;
      }
      return;
    }
    // Se añade la nueva posición de la cabeza al principio del array de la serpiente
    snake.unshift(head);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach((part) => drawSquare(part.x, part.y, "rgb(39, 191, 222)"));
    drawSquare(food.x, food.y, "red");
  }
  // Función que reinicia el juego con valores por defecto
  function restartGame() {
    snake = [{ x: 200, y: 200 }];
    food = { x: getRandomCoordinate(), y: getRandomCoordinate() };
    direction = "right";
    score = 0;
    scoreDisplay.innerText = score;
    gameLoop = setInterval(update, 100);
  }

  // Este código añade un event listener al documento que escucha los eventos "keydown", cuando se presiona una tecla.
  // Luego, dependiendo de la tecla que se haya presionado, cambia la dirección de la serpiente si esta no va en la dirección opuesta
  // (por ejemplo, si la serpiente va hacia la derecha, no puede girar inmediatamente hacia la izquierda, tendría que girar primero hacia arriba o abajo).
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowUp":
        if (direction !== "down") {
          direction = "up";
        }
        break;
      case "ArrowDown":
        if (direction !== "up") {
          direction = "down";
        }
        break;
      case "ArrowLeft":
        if (direction !== "right") {
          direction = "left";
        }
        break;
      case "ArrowRight":
        if (direction !== "left") {
          direction = "right";
        }
        break;
      default:
        break;
    }
  });
  // Intervalo que llama a la función "update" cada 100 milisegundos, lo que hace que la serpiente se mueva continuamente.
  gameLoop = setInterval(update, 100);
}

// ----------------------- Función que controla el cierre de sesión -------------------------
function cerrar_sesion() {
  if (confirm("¿Se cerrará sesión, está usted seguro?") == true) {
    show_portada();
  }
}

// ---------------------- Función que confirma la eliminación de la cuenta con un doble confirm -----------------
function eliminar_cuenta() {
  const borrar = document.getElementById("usuario").value.toLowerCase(); // Convertir a minúsculas
  const borrarobj = usuarios.findIndex(
    (elem) => elem.usuario.toLowerCase() === borrar
  ); // Convertir a minúsculas

  if (
    confirm(
      "Si continua perderá todos sus datos y tendra que darse de alta de nuevo para usar la aplicación"
    ) == true
  ) {
    if (confirm("¿Está seguro de que quiere eliminar la cuenta?") == true) {
      if (borrarobj !== -1) {
        usuarios.splice(borrarobj, 1);
        //Llamada a la función 'show_portada()'
        show_portada();
      }
    }
  }
}

// ----------------------- Función para crear el juego PONG mediante canvas---------------------------
function pong() {
  // Obtengo el valor del id 'pong'
  const canvas = document.getElementById("pong");

  // Utilizo la función getContext() que me devuelve un objeto que representa el contexto de renderizado del canvas.
  // En este caso el 2D.
  const canvasCont = canvas.getContext("2d");
  const botonSalir = document.getElementById("salir");

  // Sonidos
  let golpe = new Audio();
  let muro = new Audio();
  let userMarca = new Audio();
  let comMarca = new Audio();

  // Explicación del juego
  alert("Iniciar juego");
  alert("Golpea la bola con la plataforma movil hasta superar a tu oponente");

  // Src de los sonidos
  golpe.src = "sonidos/sound.wav";
  muro.src = "sonidos/sound.wav";
  comMarca.src = "sonidos/sound2.wav";
  userMarca.src = "sonidos/sound2.wav";

  // Objeto bola
  const bola = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    velocityX: 5,
    velocityY: 5,
    speed: 7,
    color: "rgb(217, 176, 255)",
  };

  // Plataforma del usuario
  const user = {
    x: 0, // left side of canvas
    y: (canvas.height - 100) / 2, // -100 the height of paddle
    width: 10,
    height: 100,
    score: 0,
    color: "rgb(39, 191, 222)",
  };

  // Plataforma del ordenador
  const com = {
    x: canvas.width - 10, // - width of paddle
    y: (canvas.height - 100) / 2, // -100 the height of paddle
    width: 10,
    height: 100,
    score: 0,
    color: "rgb(39, 191, 222)",
  };

  // Red
  const net = {
    x: (canvas.width - 2) / 2,
    y: 0,
    height: 10,
    width: 2,
    color: "rgb(39, 191, 222)",
  };

  // Rectangulo que utilizo para dibujar las plataformas
  function dibujoRectangulo(x, y, w, h, color) {
    canvasCont.fillStyle = color;
    canvasCont.fillRect(x, y, w, h);
  }

  // Circulo que utilizo para dibujar la bola
  function dibujoBola(x, y, r, color) {
    canvasCont.fillStyle = color;
    canvasCont.beginPath();
    canvasCont.arc(x, y, r, 0, Math.PI * 2, true);
    canvasCont.closePath();
    canvasCont.fill();
  }

  // Controlo que haga caso al ratón "mousemove"
  canvas.addEventListener("mousemove", posicionRaton);
  function posicionRaton(evt) {
    let rect = canvas.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;
  }

  // Cuando alguién marca se resetea la bola
  function reiniciarBola() {
    bola.x = canvas.width / 2;
    bola.y = canvas.height / 2;
    bola.velocityX = -bola.velocityX;
    bola.speed = 7;
  }

  // Dibujo la red
  function dibujoRed() {
    for (let i = 0; i <= canvas.height; i += 15) {
      dibujoRectangulo(net.x, net.y + i, net.width, net.height, net.color);
    }
  }

  // Dibujo el texto
  function dibujoTexto(text, x, y) {
    canvasCont.fillStyle = "rgb(39, 191, 222)";
    canvasCont.font = "75px ArcadeClassic";
    canvasCont.fillText(text, x, y);
  }

  // Detecta un impacto
  function impacto(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return (
      p.left < b.right &&
      p.top < b.bottom &&
      p.right > b.left &&
      p.bottom > b.top
    );
  }

  // Función 'actualizar' la cual maneja todos los cálculos
  function actualizar() {
    // Cambia el marcador de los jugadores. Si la bola va a la izquierda "bola.x<0" gana el ordenador, si no "bola.x > canvas.width" gana el jugador.
    if (bola.x - bola.radius < 0) {
      com.score++;
      comMarca.play();
      reiniciarBola();
    } else if (bola.x + bola.radius > canvas.width) {
      user.score++;
      userMarca.play();
      reiniciarBola();
    }

    // La bola tiene una velocidad
    bola.x += bola.velocityX;
    bola.y += bola.velocityY;

    // El ordenador juega solo
    com.y += (bola.y - (com.y + com.height / 2)) * 0.1;

    // Cuando la bola impacta en los muros de arriba y abajo invertimos la velocidad de y
    if (bola.y - bola.radius < 0 || bola.y + bola.radius > canvas.height) {
      bola.velocityY = -bola.velocityY;
      muro.play();
    }

    // Comprobación de si la bolea golpea la paltaforma del jugador o la del ordenador
    let player = bola.x + bola.radius < canvas.width / 2 ? user : com;

    // Si la bola golpea una plataforma
    if (impacto(bola, player)) {
      // Sonido
      golpe.play();
      // Chequeamos donde golpea
      let puntoImpacto = bola.y - (player.y + player.height / 2);
      // Necesitamos numeros entre -1 y 1 para el valor de 'puntoImpacto'.

      puntoImpacto = puntoImpacto / (player.height / 2);

      //Cuando la bola golpea la parte superior de una plataforma queremos que coja un angulo de -45 grados
      //Cuando la bola golpea la parte central de una plataforma queremos que coja un angulo de 0 grados
      //Cuando la bola golpea la parte inferior de una plataforma queremos que coja un angulo de 45 grados
      // Math.PI/4 = 45 grados
      let angulo = (Math.PI / 4) * puntoImpacto;

      // Cambio la velocidad e ireccion de X e Y
      let direccion = bola.x + bola.radius < canvas.width / 2 ? 1 : -1;
      bola.velocityX = direccion * bola.speed * Math.cos(angulo);
      bola.velocityY = bola.speed * Math.sin(angulo);

      // Aumento la velocida de la bola cada vez que golpea una plataforma
      bola.speed += 0.1;
    }
  }

  // Función que se encarga del dibujo de todo el juego
  function render() {
    // Limpio el canvas
    dibujoRectangulo(0, 0, canvas.width, canvas.height, "rgb(28, 27, 27)");

    // Dibujo el marcador el jugador a la izquierda
    dibujoTexto(user.score, canvas.width / 4, canvas.height / 5);

    // El marcador del ordenador a la derecha
    dibujoTexto(com.score, (3 * canvas.width) / 4, canvas.height / 5);

    // Dibujo la red
    dibujoRed();

    // Plataforma del jugador
    dibujoRectangulo(user.x, user.y, user.width, user.height, user.color);

    // Plataforma del ordenador
    dibujoRectangulo(com.x, com.y, com.width, com.height, com.color);

    // Bola
    dibujoBola(bola.x, bola.y, bola.radius, bola.color);
  }
  
  // Evento en el botón para salir.
  botonSalir.addEventListener("click", function() {
   // Detener el juego
  clearInterval(loop);

  // Mostrar mensaje de que el juego ha terminado
  alert("El juego ha terminado");

  // Redirigir a otra interfaz
  show_juegos_gratis();
  });

  function juego() {
    actualizar();
    render();
  }
  // Número de frames por segundo
  let framePerSecond = 50;

  // Llamo a la función 'juego' 50 veces cada segundo
  let loop = setInterval(juego, 1000 / framePerSecond);
}

// ---------------- CONTROL DE CAPAS ---------------------
function show_portada() {
  document.getElementById("portada").style.display = "";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";
}

function show_intro() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";
}
function show_iniciar_sesion() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";

  document.getElementById("usuario").value = "";
  document.getElementById("clave").value = "";
  document.getElementById("usuario").focus();
}
function show_registrar() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";

  document.getElementById("nuevo_usuario").value = "";
  document.getElementById("nueva_clave").value = "";
  document.getElementById("nueva_clave2").value = "";
  document.getElementById("nuevo_usuario").focus();
}
function show_menu() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";
}
function show_juegos_gratis() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";
}
function show_cuenta() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";
}
function show_tresenraya() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "none";

  tresenraya();
}
function show_snake() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "";
  document.getElementById("game").style.display = "none";

  snake();
}
function show_game() {
  document.getElementById("portada").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("iniciar_sesion").style.display = "none";
  document.getElementById("registrar").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("juegos-gratis").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tresenraya").style.display = "none";
  document.getElementById("snake").style.display = "none";
  document.getElementById("game").style.display = "";
  pong();
}

show_portada();
