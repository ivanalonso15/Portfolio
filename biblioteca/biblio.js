// Array administradores
const admin = [
  {
    id: "78958999E"
    ,
    contraseña: "1234",
    nombre: "Ivan",
    apellido: "Alonso",
    monedas: 160,
    libros_alquilados: [
      {
        id_libro: 2,
        nombre: "CASTILLOS DE FUEGO",
        autor: "IGNACIO MARTINEZ DE PISON",
        tiempo: "",
      },
    ],
    libros_comprados: [],
  },
  {
    id: "12345678A",
    contraseña: "12345678Aa?",
    nombre: "Luis",
    apellido: "Fernandez",
    monedas: 300,
    libros_alquilados: [],
    libros_comprados: [],
  },
];

// Array libros para alquilar
const libros_alquilar = [
  {
    Nombre: "HIJOS DE LA FABULA",
    Autor: "FERNANDO ARAMBURU",
    disponible: true,
    id_libro: 1,
    fecha_alquiler: null,
    portada: "HijosFabula.jpg",
    descripcion:
      "Dos jóvenes exaltados, Asier y Joseba, se marchan en 2011 al sur de Francia con la intención de convertirse en militantes de ETA. Esperan instrucciones en una granja de pollos, acogidos por una pareja francesa con la que apenas se entienden. Allí se enteran de que la banda ha anunciado el cese de la actividad armada. Abandonados a su suerte, sin dinero, sin experiencia ni armas, deciden continuar la lucha por su cuenta, fundando una organización propia, en la que uno asumirá el papel de jefe y disciplinado ideólogo, y el otro el de subalterno más relajado. El contraste entre el afán de gestas y las peripecias más ridículas, bajo una lluvia pertinaz, va llevando la historia hacia una especie de drama cómico. Hasta que conocen a una joven que les propone un plan. Tras el éxito de Patria, esta nueva novela de Fernando Aramburu nos arrastra, de una manera agilísima y sorprendente, por una peripecia inesperada y un desenlace magistral. Contada con un humor permanente, cáustica, veloz, escrita con frases cuya brevedad son un auténtico virtuosismo, Hijos de la fábula vuelve a demostrarnos que Fernando Aramburu pertenece a la estirpe de los grandes escritores, los que nos cuentan historias como nadie es capaz de hacerlo.",
  },
  {
    Nombre: "CASTILLOS DE FUEGO",
    Autor: "IGNACIO MARTINEZ DE PISON",
    disponible: false,
    id_libro: 2,
    fecha_alquiler: null,
    portada: "CastillosdeFuego.jpg",
    descripcion:
      "Madrid, 1939-1945. Muchos luchan por salir adelante en una ciudad marcada por el hambre, la penuria y el estraperlo. Como Eloy, un joven tullido que trata de salvar de la pena de muerte a su hermano encarcelado; Alicia, taquillera en un cine que pierde su empleo por seguir su corazón; Basilio, profesor de universidad que afronta un proceso de depuración; el falangista Matías, que trafica con objetos requisados, o Valentín, capaz de cualquier vileza con tal de purgar su anterior militancia. Costureras, estudiantes, policías: vidas de personas comunes en tiempos extraordinarios.",
  },
  {
    Nombre: "LA VOZ DE LOS VALIENTES",
    Autor: "RAFAEL TARRADAS BUILTO",
    disponible: true,
    id_libro: 3,
    fecha_alquiler: null,
    portada: "LaVozDeLosValientes.jpg",
    descripcion:
      "Baviera, Alemania. El castillo de Fallstein es uno de los más fastuosos de la zona, pero, lejos de ser un remanso de paz alejado del frente, Hilda Sagnier ha comprobado cómo la guerra y sus consecuencias han entrado con fuerza en sus salones, pues su marido, el prestigioso conde bávaro de Fallstein, ha sido completamente seducido por Hitler. Decidida a luchar por lo que cree, la condesa no dudará en arriesgar su vida, sobrepasar sus límites y fingir ser quien no es para ayudar a los perseguidos del régimen. Mientras tanto, en Barcelona, los nazis empiezan a agasajar a José Manuel, pero el empresario sabe exactamente cuál es su objetivo. Él, que fue espía durante la Guerra Civil española, no tardará en involucrarse en la misión más secreta y de una relevancia capital, una misión que lo llevará a alternar con la élite alemana y a relacionarse con la alta sociedad de Potsdam. Allí, donde todos se relajan y hablan más de la cuenta, el espía deberá encontrar y destruir el arma en la que los alemanes confían su victoria. Hilda y José Manuel, dos españoles en el corazón del Tercer Reich, descubrirán que, en tiempos de guerra, nadie es quien dice ser y que a veces la urgencia y el peligro son los mejores aliados para que el amor y los verdaderos sentimientos afloren.",
  },
  {
    Nombre: "TODAS LAS PIEZAS ROTAS",
    Autor: "JOHN BOYNE",
    disponible: true,
    id_libro: 4,
    fecha_alquiler: null,
    portada: "PiezasRotas.jpg",
    descripcion:
      "Cuando Bruno decidió acompañar a su amigo Shmuel a la cámara de gas, ¿qué ocurrió con su hermana, Gretel, y sus padres? ¿Sobrevivió su familia a la guerra y los estragos del nazismo? Gretel Fernsby es ahora una anciana de 91 años que vive cómodamente en un apartamento en una de las zonas más acomodadas de Londres. Cuando una joven familia se muda al piso de abajo, Gretel no puede evitar entablar amistad con Henry, el hijo pequeño de la pareja. Una noche, tras ser testigo de una violenta discusión entre la madre de Henry y su dominante padre, Gretel se enfrenta a la oportunidad de expiar la culpa, el dolor y el remordimiento y hacer algo por salvar a un niño, por segunda vez en su vida. Pero para ello se verá obligada a revelar su verdadera identidad...",
  },
  {
    Nombre: "EL CUCO DE CRISTAL",
    Autor: "JAVIER CASTILLO",
    disponible: true,
    id_libro: 5,
    fecha_alquiler: null,
    portada: "CucoCristal.jpg",
    descripcion:
      "Un trasplante de urgencia. Un donante lleno de secretos. ¿Qué esconden los latidos de tu corazón? Nueva York, 2017. Cora Merlo, médico residente de primer año, sufre un infarto fulminante que la obliga a un trasplante de corazón. Aún convaleciente la joven recibe la visita de una extraña mujer con una enigmática oferta: pasar unos días en Steelville, un pequeño pueblo de interior, para conocer la vida de su hijo Charles, el donante de su corazón. Cora se adentra así en un hogar lleno de secretos, en un misterio que se extiende durante veinte años y en un pueblo hermético en el que, justo el día de su llegada, desaparece un bebé en un parque público.",
  },
  {
    Nombre: "EL LATIDO DEL MAR",
    Autor: "JORGE MOLIST",
    disponible: true,
    id_libro: 6,
    fecha_alquiler: null,
    portada: "LatidoMar.jpg",
    descripcion:
      "Blanca, una hermosa dama del siglo XIII, lo pierde todo tras la derrota de su familia en la guerra, y, para conservar a su hijo con vida, debe sufrir los peores abusos de los vencedores. El niño, huyendo de la miseria, se embarca de grumete en una galera, la nave más dura y peligrosa de la época. En el mar buscará la libertad de su madre, a su familia perdida, y venganza. Esta trepidante novela basada en hechos reales recrea una de las aventuras más asombrosas de la historia y nos traslada a los últimos años de las cruzadas en Tierra Santa y a la guerra por el dominio del Mediterráneo entre Francia y la Corona de Aragón.",
  },
  {
    Nombre: "EL RETRATO DE CASADA",
    Autor: "MAGGIE O´FARRELL",
    disponible: true,
    id_libro: 7,
    fecha_alquiler: null,
    portada: "RetratoCasada.jpg",
    descripcion:
      "Florencia, mediados del siglo XVI. Lucrezia, tercera hija del gran duque Cosimo de’ Medici, es una niña callada y perspicaz, con un singular talento para el dibujo, que disfruta de su discreto y tranquilo lugar en el palazzo. Pero cuando muere su hermana Maria, justo antes de casarse con Alfonso d’Este, primogénito del duque de Ferrara, Lucrezia se convierte inesperadamente en el centro de atención: el duque se apresura a pedir su mano, y su padre a aceptarla. Poco después, con solo quince años, se traslada a la corte de Ferrara, donde es recibida con recelo. Su marido, doce años mayor, es un enigma: ¿es en realidad el hombre sensible y comprensivo que le pareció al principio o un déspota implacable al que todos temen? Lo único que está claro es lo que se espera de ella: que proporcione cuanto antes un heredero que asegure la continuidad del título. Con la misma belleza y emoción con las que nos cautivó en Hamnet, Maggie O’Farrell vuelve a demostrar su inigualable talento para adentrarse en los recovecos del pasado en El retrato de casada, una novela que reinterpreta desde la ficción un capítulo de la Italia renacentista y narra la lucha contra el destino de una joven asombrosa.",
  },
  {
    Nombre: "DE VUELTA A CASA",
    Autor: "KATE MORTON",
    disponible: true,
    id_libro: 8,
    fecha_alquiler: null,
    portada: "VueltaCasa.jpg",
    descripcion:
      "Al final de un día caluroso, junto a un arroyo en los terrenos de la mansión de la familia Turner, un repartidor realiza un descubrimiento espeluznante. Comienza una investigación policial y el pequeño pueblo de Tambilla se ve inmerso en uno de los casos de asesinato más desconcertantes y dolorosos de la historia de Australia del Sur. Sesenta años más tarde Jess ha perdido su empleo en el periódico y tiene dificultades para llegar a fin de mes. Inmersa en encontrar una buena historia que cambie su suerte, recibe una llamada inesperada por la que decide abandonar Londres y regresar a Sídney. Su abuela Nora, con quien se crio, ha sufrido unacaíday está ingresada. El recuerdo de su querida abuela contrasta con la realidad al encontrar a una mujer frágil y desconcertada. Sin nada que hacer en casa de Nora, Jess se dedica a curiosear y en el dormitorio de la anciana descubre un libro que detalla la investigación policial de una tragedia ya olvidada: la de la familia Turner en la Nochebuena de 1959. Mientras hojea el libro, Jess descubre una asombrosa conexión entre su familia y aquel suceso. Desde entonces la búsqueda de la verdad será el único camino posible.",
  },
  {
    Nombre: "EL TABLERO DE LA REINA",
    Autor: "LUIS ZUECO",
    disponible: true,
    id_libro: 9,
    fecha_alquiler: null,
    portada: "TableroReina.jpg",
    descripcion:
      "Año 1468. Castilla se encuentra en un momento crucial de su historia. Alfonso de Trastámara ha muerto en sospechosas circunstancias y Enrique IV se alza como rey obligando a su hermanastra Isabel, la única que podría oponerse a sus planes, a firmar la paz. Ella acepta, pues está destinada a convertirse en Isabel la Católica y sabe que las grandes partidas no se ganan en el primer movimiento. Mientras los asuntos de la Corte mantienen al reino en vilo, el misterioso asesinato de un noble une fortuitamente a Gadea, una joven apasionada del ajedrez que esconde un oscuro pasado, y a Ruy, un cronista amante de la Historia y los libros. La peligrosa carrera a contrarreloj de ambos para descubrir al culpable se entrelaza con las conspiraciones y las guerras de la Corte de Isabel, quien bajo su mandato supo moverse como una maestra en el tablero y transformó para siempre la figura de la reina en el ajedrez.",
  },
  {
    Nombre: "SOLO HUMO",
    Autor: "JUAN JOSÉ MILLÁS",
    disponible: true,
    id_libro: 10,
    fecha_alquiler: null,
    portada: "SoloHumo.jpg",
    descripcion:
      "El día en que cumple dieciocho años, Carlos recibe un extraño regalo: la noticia de que su padre, al que nunca trató, ha muerto y le ha dejado en herencia una casa con todo lo que contiene y una vida desconocida a la que asomarse. Examinando los vestigios de esa existencia abruptamente interrumpida, encuentra un manuscrito que narra una historia de amores secretos, de una niña y una mariposa, de amistad y de muerte. ¿Es una confesión real o una ficción? Carlos, que está a punto de iniciar sus estudios de Administración y Dirección de Empresas, se da cuenta de que su padre era un lector voraz. En el dormitorio de esa casa que poco a poco va haciendo suya, junto a la cama, descubre un libro que le atrapa: los cuentos de los hermanos Grimm. El chico se sumerge en la lectura de esos relatos y al tiempo inicia un proceso vital que le acerca cada vez más a su padre y le enseña la manera de transitar por esas fronteras invisibles que separan la realidad de la fantasía y la cordura de la locura. En esta novela engañosamente ligera, Juan José Millás vuelve a algunos de los temas más representativos de su narrativa, como la identidad, el desdoblamiento, los recovecos más oscuros de la realidad cotidiana —aquellos en los que se esconde lo extraordinario— y la paternidad, al tiempo que compone un himno a la imaginación y al poder transformador de la literatura.",
  },
  {
    Nombre: "HÁBITOS ATÓMICOS",
    Autor: "JAMES CLEAR",
    disponible: true,
    id_libro: 11,
    fecha_alquiler: null,
    portada: "HabitosAtomicos.jpg",
    descripcion:
      "A menudo pensamos que para cambiar de vida tenemos que pensar en hacer cambios grandes. Nada más lejos de la realidad. Según el reconocido experto en hábitos James Clear, el cambio real proviene del resultado de cientos de pequeñas decisiones: hacer dos flexiones al día, levantarse cinco minutos antes o hacer una corta llamada telefónica. Clear llama a estas decisiones “hábitos atómicos”: tan pequeños como una partícula, pero tan poderosos como un tsunami. En este libro innovador nos revela exactamente cómo esos cambios minúsculos pueden crecer hasta llegar a cambiar nuestra carrera profesional, nuestras relaciones y todos los aspectos de nuestra vida.",
  },
  {
    Nombre: "ESPERANDO AL DILUVIO",
    Autor: "DOLORES REDONDO",
    disponible: true,
    id_libro: 12,
    fecha_alquiler: null,
    portada: "Diluvio.jpg",
    descripcion:
      "Un salvaje asesino en serie. Una búsqueda hasta el último latido. Una ciudad amenazada por un diluvio. Entre los años 1968 y 1969, el asesino al que la prensa bautizaría como John Biblia mató a tres mujeres en Glasgow. Nunca fue identificado y el caso todavía sigue abierto hoy en día. En esta novela, a principios de los años ochenta, el investigador de policía escocés Noah Scott Sherrington logra llegar hasta John Biblia, pero un fallo en su corazón en el último momento le impide arrestarlo. A pesar de su frágil estado de salud, y contra los consejos médicos y la negativa de sus superiores para que continúe con la persecución del asesino en serie, Noah sigue una corazonada que lo llevará hasta el Bilbao de 1983. Justo unos días antes de que un verdadero diluvio arrase la ciudad. Dolores Redondo se autodefine como «una escritora de tormentas» y con esta nueva novela, basada en hechos reales, nos conduce hasta el epicentro de una de las mayores tormentas del siglo pasado a la vez que retrata una época en plena ebullición política y social. Es un homenaje a la cultura del trabajo lleno de nostalgia por un tiempo en el que la radio era una de las pocas ventanas abiertas al mundo y, sobre todo, a la música. Y es también un canto a la camaradería de las cuadrillas y a las historias de amor que nacen de un pálpito. Una obra deslumbrante con unos personajes que nos llevan de la crueldad más espantosa a la esperanza en el ser humano.",
  },
  {
    Nombre: "EL ANGEL DE LA CIUDAD",
    Autor: "EVA GARCIA SAENZ DE URTURI",
    disponible: true,
    id_libro: 18,
    fecha_alquiler: null,
    portada: "AngelCiudad.jpg",
    descripcion:
      "Un espléndido y decadentepalazzo arde en una pequeña isla veneciana donde se celebra un encuentro de la Liga de Libreros Anticuarios. Los cuerpos de los invitados, todos conocidos de Kraken, no aparecen entre los escombros, y se sospecha que su madre, Ítaca, estuvo implicada en el incendio que sucedió en idénticas circunstancias décadas atrás. Mientras, en Vitoria, la inspectora Estíbaliz investiga un caso que puede tener las claves del atraco que acabó con la vida del padre de Kraken. Pero Unai es reacio a volver a la investigación en activo y siente que debe elegir entre la búsqueda de lo que les sucedió a sus padres o la familia que ha creado con Alba y su hija Deba. Un paseo por una Venecia donde las leyendas y la perturbadora figura del Ángel de la ciudad, mitad mecenas, mitad demonio, mueven los hilos de una vertiginosa trama repleta de amor al arte y de la búsqueda de la propia identidad.",
  },
  {
    Nombre: "REVOLUCIÓN, UNA NOVELA",
    Autor: "ARTURO PEREZ-REVERTE",
    disponible: true,
    id_libro: 13,
    fecha_alquiler: null,
    portada: "Revolucion.jpg",
    descripcion:
      "Ésta es la historia de un hombre, tres mujeres, una revolución y un tesoro. La revolución fue la de México en tiempos de Emiliano Zapata y Francisco Villa. El tesoro fueron quince mil monedas de oro de a veinte pesos de las denominadas maximilianos, robadas en un banco de Ciudad Juárez el 8 de mayo de 1911. El hombre se llamaba Martín Garret Ortiz y era un joven ingeniero de minas español. Todo empezó para él ese mismo día, cuando desde su hotel oyó un primer disparo lejano. Salió a la calle para ver qué ocurría y a partir de ese momento su vida cambió para siempre...",
  },
  {
    Nombre: "EL LADRÓN DE ROSTROS",
    Autor: "IBON MARTÍN",
    disponible: true,
    id_libro: 14,
    fecha_alquiler: null,
    portada: "LadronRostros.jpg",
    descripcion:
      "En Sandaili, una humilde ermita excavada en la roca, ha aparecido el cuerpo mutilado de una mujer asesinada mientras practicaba un antiguo rito de fertilidad. Su torso ha sido abierto y vaciado y las manos han sido colocadas a ambos lados de su abdomen en actitud de entrega. La escena reproduce, con macabra exactitud, las figuras de los apóstoles que Oteiza esculpió en la fachada de la basílica de Arantzazu. Las pruebas señalan que alguien realizó una copia de su rostro en el momento de su muerte. Un peligroso asesino ritual ha nacido al abrigo de las verdes montañas que guardan desde tiempos inmemoriales los mitos y las leyendas de los vascos. Un enclave aislado, moldeado por el agua que ha dejado sus cicatrices en forma de desfiladeros majestuosos y profundas cuevas. Ane Cestero y la Unidad de Homicidios de Impacto emprenderán un viaje a las entrañas de la tierra donde se oculta lo más oscuro del alma humana.",
  },
  {
    Nombre: "LEJOS DE LUISIANA",
    Autor: "LUZ GABÁS",
    disponible: true,
    id_libro: 15,
    fecha_alquiler: null,
    portada: "Luisiana.jpg",
    descripcion:
      "Después de años de colonización, la familia Girard acepta la controvertida decisión de su país, Francia, de ceder a España en 1763 parte de las indómitas tierras del Misisipi; sin embargo, sufrirá las consecuencias de las rebeliones de sus compatriotas contra los españoles, la guerra de norteamericanos contra ingleses por la independencia de los Estados Unidos y la lucha desesperada de los nativos indios por la supervivencia de sus pueblos. En unos tiempos tan convulsos, Suzette Girard e Ishcate, indio de la tribu kaskaskia, librarán su propia batalla: preservar su amor de las amenazas del mundo que les ha tocado vivir. Todo ello conforma una novela cautivadora y monumental que atraviesa las cuatro décadas en las que España poseyó las legendarias tierras de Luisiana.",
  },
  {
    Nombre: "LA DESCONOCIDA",
    Autor: "ROSA MONTERO",
    disponible: true,
    id_libro: 16,
    fecha_alquiler: null,
    portada: "Desconocida.jpg",
    descripcion:
      "Es de noche y en el puerto de Barcelona un guardia hace su ronda cuando su pastora alemana se para en seco a olfatear desesperadamente un contenedor. Al llegar, los mossos d’esquadra hallan en su interior a una mujer en posición fetal, inconsciente y deshidratada. Tiene una brecha en la sien, quemaduras en la cara y el cuerpo, y no recuerda quién es ni cuál es su lengua materna, pero está viva. Mientras se recupera enel Hospital Clínic, un hombre intenta asesinarla. La inspectora Anna Ripoll, experta en trata de mujeres, parece haber dado con su identidad y su dirección: Alicia Garone; 19, rue du Chariot, Lyon. En la ciudad francesa el inspector Erik Zapori busca el modo de librarse de la investigación a la que asuntos internos lo está sometiendo por delitos de corrupción y proxenetismo. Nada mejor que viajar a España a ayudar en la resolución de un caso, aunque puede que este sea el más complejo de su vida.",
  },
  {
    Nombre: "SIEMPRE",
    Autor: "DEFREDS",
    disponible: true,
    id_libro: 17,
    fecha_alquiler: null,
    portada: "Siempre.jpg",
    descripcion:
      "Siguiendo el camino abierto por Ojalá, esta flamante propuesta de Defreds sorprende como contrapartida y continuación de Siempre, su anterior título, un nuevo volumen en el que destacarán también las preciosas creaciones de Lady Desidia que ilustran los textos. En este caso, el libro está organizado siguiendo los signos del Zodíaco, que marcan la impronta de una personalidad, con sus características distintivas, como un personaje con sus cualidades y defectos, que se enfrenta a los hechos y las experiencias de cada día que nos afectan a todos por igual. Una fábula actual bajo la tutela del cielo que reparte personalidad y temperamento, filias, fobias diferentes, para enfrentarnos a la pelea cotidiana. En palabras del autor: «Porque un Ojalá nunca está completo sin un Siempre.",
  },
  {
    Nombre: "ENCUENTRA TU PERSONA VITAMINA",
    Autor: "MARIAN ROJAS ESTAPÉ",
    disponible: true,
    id_libro: 41,
    fecha_alquiler: null,
    portada: "PersonaVitamina.jpg",
    descripcion:
      "Como seres humanos estamos diseñados para vivir en familia y en sociedad, relacionarnos y querernos. Nuestra felicidad dependerá en gran medida de la capacidad que tengamos para mantener buenas relaciones con las personas que nos rodeen. Muchos, hoy en día, arrastran heridas emocionales que les impiden conectar de forma sana con el entorno. Encuentra tu persona vitamina te ayudará a comprender mejor la relación con tus padres, hijos y familiares; con tu pareja, con tus amigos y con tus compañeros de trabajo a la vez que irás comprendiendo tu historia emocional. Cuando uno se comprende, se siente aliviado. Este libro te impulsará a encontrar personas vitaminas: aquellas que sacan lo mejor de ti, te inspiran, te apoyan y con ello mejoran tu sistema inmune. ",
  },
  {
    Nombre: "EL HOMBRE EN BUSCA DE SENTIDO",
    Autor: "VIKTOR EMIL FRANKL",
    disponible: true,
    id_libro: 19,
    fecha_alquiler: null,
    portada: "HombreBuscaSentido.jpg",
    descripcion:
      "El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted? Y muchas veces, de las respuestas extrae una orientación para la psicoterapia a aplicar: a éste, lo que le ata a la vida son los hijos; al otro, un talento, una habilidad sin explotar; a un tercero, quizás, sólo unos cuantos recuerdos que merece la pena rescatar del olvido. Tejer estas tenues hebras de vidas rotas en una urdimbre firme, coherente, significativa y responsable es el objeto con que se enfrenta la logoterapia.",
  },
  {
    Nombre: "EL ANCHO MUNDO",
    Autor: "PIERRE LEMAITRE",
    disponible: true,
    id_libro: 20,
    fecha_alquiler: null,
    portada: "AnchoMundo.jpg",
    descripcion:
      "El ancho mundo narra las aventuras, desventuras, peripecias y secretos de los Pelletier, una familia propietaria de una fábrica de jabones en Beirut, ciudad bajo influencia francesa, con la Guerra de Indochina y el París de la posguerra y la reconstrucción como telón de fondo. Y todo con un toque de exotismo y varios asesinatos.",
  },
  {
    Nombre: "LOS DUEÑOS DEL PLANETA",
    Autor: "CRISTINA MARTÍN JIMENEZ",
    disponible: true,
    id_libro: 21,
    fecha_alquiler: null,
    portada: "DueñosPlaneta.jpg",
    descripcion:
      "Vivimos en una época en la que las élites dominan todos los ámbitos de la vida, y lo hacen bajo la apariencia de bienhechores y filántropos. Miramos a esos grandes hombres con admiración, envidia e, incluso, agradecimiento. Personas como Elon Musk, Jeff Bezos, Mark Zuckerberg, Bill Gates o Mohamed bin Salmán no solo figuran en el top de los más ricos, sino que, además, poseen gigantescas compañías tecnológicas y grandes conglomerados financieros. Son los dueños del planeta, pero ¿son lo que aparentan? ¿Qué se oculta detrás de esas sonrisas autocomplacientes? ¿Hasta dónde llega su afán de poder? ¿Cómo afecta al resto de la ciudadanía sus acciones?",
  },
  {
    Nombre: "TODAS ESAS COSAS QUE TE DIRÉ MAÑANA",
    Autor: "ELÍSABET BENAVENT",
    disponible: true,
    id_libro: 22,
    fecha_alquiler: null,
    portada: "CosaDireMañana.jpg",
    descripcion:
      "Miranda trabaja como subdirectora en una revista de moda. Miranda es feliz junto a Tristán. Por eso no entiende que la este dejando. Ojalá pudiera dar marcha atrás y volver al momento en que se conocieron... Pero ¿y si realmente tuviera la oportunidad de cambiar su historia?",
  },
  {
    Nombre: "TODO ARDE",
    Autor: "JUAN GÓMEZ-JURADO",
    disponible: true,
    id_libro: 23,
    fecha_alquiler: null,
    portada: "TodoArde.jpg",
    descripcion:
      "Esta es la historia de tres mujeres que lo han perdido todo. Incluso el miedo. Por eso son tan peligrosas. Esta es la historia de una venganza imposible, sin ninguna posibilidad de éxito. Esta es la historia de tres mujeres que se atreven a hacer lo que los demás sólo nos atrevemos a imaginar. Algo muy poderoso está a punto de ocurrir. Y nada volverá a ser igual.",
  },
  {
    Nombre: "EL CANTAR DE LIÉBANA",
    Autor: "PERIDIS",
    disponible: true,
    id_libro: 24,
    fecha_alquiler: null,
    portada: "CantarLiebana.jpg",
    descripcion:
      "Lebaniego de pro (nació en Cabezón de Liébana), Peridis realiza en esta su quinta novela con Espasa una original síntesis de todos estos saberes y virtudes, además de un homenaje a su tierra natal y al más ilustre de sus paisanos, el monje Beato, autor en el siglo VIII de unos comentarios al Apocalipsis de fama imperecedera. En la novela se entrelaza la historia y vicisitudes de Beato en aquellos remotos y oscuros albores de la Edad Medida, cuando toda la Península estaba por reconquistar, con la peripecia, en nuestros días, de Eulalia, una sexagenaria, viuda reciente y de posibles, que para rellenar el vacío de sus días se apunta a un seminario sobre los beatos en la Universidad de Valladolid. Allí conocerá a la simpática Tiqui, una joven alternativa que será su maestra en los códigos del mundo contemporáneo (tan abtrusos para ella como los códices medievales) y al excéntrico Don Crisógono, un profesor que reta a sus alumnos a que hagan un descubrimiento sensacional.",
  },
  {
    Nombre: "EL JUEGO DEL ALMA",
    Autor: "JAVIER CASTILLO",
    disponible: true,
    id_libro: 25,
    fecha_alquiler: null,
    portada: "JuegoAlma.jpg",
    descripcion:
      "Nueva York, 2011. Una chica de quince años aparece crucificada en un suburbio a las afueras. Miren Triggs, periodista de investigación del Manhattan Press, recibe de manera inesperada un extraño sobre. En su interior, la polaroid de otra adolescente amordazada y maniatada, con una sola anotación: GINA PEBBLES, 2002. Miren Triggs y Jim Schmoer, su antiguo profesor de periodismo, seguirán la pista de la chica de la imagen mientras investigan la crucifixión de Nueva York. Así se adentrarán en una institución religiosa en la que todo son secretos y en un enigma único lleno de suspense en el que deberán descifrar tres preguntas de respuesta imposible: ¿que le sucedió a Gina?, ¿quien envía la polaroid? y, la más importante; ¿están conectadas ambas historias?",
  },
  {
    Nombre: "LOS ENCLAVES DORADOS",
    Autor: "NAOMI NOVIK",
    disponible: true,
    id_libro: 26,
    fecha_alquiler: null,
    portada: "EnclavesDorados.jpg",
    descripcion:
      "Lo único que nadie menciona nunca dentro de la Escolomancia es lo que haráácuando salga. Ni siquiera el alumno de enclave más rico tentaría al destino deáesa forma. Pero no soñamos con nada más que con la exigua posibilidad deácruzar las puertas y toparnos, contra todo pronóstico, con una vida por delante,áuna vida alejada de los pasillos de la Escolomancia.",
  },
  {
    Nombre: "INVISIBLE",
    Autor: "ELOY MORENO",
    disponible: true,
    id_libro: 27,
    fecha_alquiler: null,
    portada: "Invisible.jpg",
    descripcion:
      "¿Quién no ha deseado alguna vez ser invisible? ¿Quién no ha deseado alguna vez dejar de serlo? El problema es que nunca he llegado a controlar bien ese poder: A veces, cuando más ganas tenía de ser invisible, era cuando más gente me veía, y en cambio, cuando deseaba que todos me vieran, era cuando a mi cuerpo le daba por desaparecer.",
  },
  {
    Nombre: "LA EDUCACIÓN FÍSICA",
    Autor: "ROSARIO VILLAJOS",
    disponible: true,
    id_libro: 28,
    fecha_alquiler: null,
    portada: "EducacionFisica.jpg",
    descripcion:
      "Una tarde de finales de agosto, Catalina, que acaba de cumplir dieciséis años, abandona la casa de su mejor amiga en una urbanización de las afueras tras un desagradable percance. Cuando llega a la carretera, decide que la única forma de volver a la suya es haciendo autostop. Como a cualquier joven de su edad, le aterra subirse al coche de un extraño, pero no tanto como lo que imagina que le espera si no cumple con el estricto toque de queda impuesto por sus padres.",
  },
  {
    Nombre: "TODO LO QUE SÉ SOBRE AMOR",
    Autor: "DOLLY ALDERTON",
    disponible: true,
    id_libro: 29,
    fecha_alquiler: null,
    portada: "SobreAmor.jpg",
    descripcion:
      "Un testimonio tan salvajemente divertido y conmovedor como la vida de cualquier veinteañero que crece navegando entre desengaños amorosos y relaciones desastrosas.",
  },
  {
    Nombre: "LAS SINGULARIDADES",
    Autor: "JOHN BANVILLE",
    disponible: true,
    id_libro: 30,
    fecha_alquiler: null,
    portada: "Singularidades.jpg",
    descripcion:
      "Freddie Montgomery acaba de salir de prisión y es un hombre nuevo. Bajo el pseudónimo de Felix Mordaunt vuelve al viejo caserón de su infancia, donde ahora vive la familia del fallecido Adam Godley, el gran físico cuya teoría revolucionó la concepción del universo. Mordaunt se une a la constelación formada por el hijo eternamente a la sombra del famoso científico, su irresistible esposa Helen, una terca ama de llaves, un biógrafo enamorado—casi rival—y una mujer del pasado que le pide a Felix un inesperado y peligroso favor.",
  },
  {
    Nombre: "FORTUNA",
    Autor: "HERNÁN DIAZ",
    disponible: true,
    id_libro: 31,
    fecha_alquiler: null,
    portada: "Fortuna.jpg",
    descripcion:
      "En los triunfales años veinte, Benjamin Rask y su esposa Helen dominan Nueva York: el, un magnate financiero que ha amasado una fortuna; ella, la hija de unos excentricos aristócratas. Pero a medida que la decada se acerca a su fin, y sus excesos revelan un lado oscuro, a los Rask empiezan a rodearlos las sospechas…",
  },
  {
    Nombre: "A TRAVÉS DEL EGIPTO",
    Autor: "EDUARDO TODA Y GUELL",
    disponible: true,
    id_libro: 32,
    fecha_alquiler: null,
    portada: "Egipto.jpg",
    descripcion:
      "Tras regresar de China, donde había desempeñado cargos diplomáticos en distintas ciudades durante seis años, el catalán Eduardo Toda parte a Egipto en 1884 como cónsul general de España en El Cairo. Su afición a las artes, su facilidad para las lenguas y su curiosidad por la cultura—la de su tierra y las de los otros pueblos—le impulsa a viajar por el país de los faraones visitando numerosísimos monumentos, templos y yacimientos arqueológicos, que culmina participando, en 1886, en el descubrimiento de la tumba de Sennedjem, en la necrópolis de Deir-el-Medina. Son dos años y mil kilómetros de viajes por el país visitando Abydos, Déndera, Tebas, Asuán, Philoe... y por supuesto Gizeh.Fruto de aquel viaje es este amenísimo relato que no sólo nos cuenta la historia del país norteafricano sino los sucesos de los años anteriores a su llegada—la campaña militar británica que acaba con la trágica muerte de Kirchner en Jartum, la apertura del Canal de Suez...—, la vida social del Cairo y las acciones vinculadas a la recuperación y la lucha contra el expolio de las tumbas y sus momias. El libro del padre de la egiptología en España. Un relato delicioso que vuelve a ver la luz—con la nomenclatura histórica convenientemente actualizada—131 años después de su primera aparición, en 1889.",
  },
  {
    Nombre: "LOS SIETE MARIDOS DE EVELYN HUGO",
    Autor: "TAYLOR JENKINS REID",
    disponible: true,
    id_libro: 33,
    fecha_alquiler: null,
    portada: "7Maridos.jpg",
    descripcion:
      "Evelyn Hugo, el ícono de Hollywood que se ha recluido en su edad madura, decide al fin contar la verdad sobre su vida llena de glamour y de escándalos. Pero cuando elige para ello a Monique Grant, una periodista desconocida, nadie se sorprende más que la misma Monique. ¿Por qué ella? ¿Por qué ahora? Monique no está precisamente en su mejor momento. Su marido la abandonó, y su vida profesional no avanza. Aun ignorando por qué Evelyn la ha elegido para escribir su biografía, Monique está decidida a aprovechar esa oportunidad para dar impulso a su carrera.Convocada al lujoso apartamento de Evelyn, Monique escucha fascinada mientras la actriz le cuenta su historia. Desde su llegada a Los Ángeles en los años 50 hasta su decisión de abandonar su carrera en el espectáculo en los 80 -y, desde luego, los siete maridos que tuvo en ese tiempo- Evelyn narra una historia de ambición implacable, amistad inesperada, y un gran amor prohibido. Monique empieza a sentir una conexión muy real con la actriz legendaria, pero cuando el relato de Evelyn se acerca a su fin, resulta evidente que su vida se cruza con la de Monique de un modo trágico e irreversible. ",
  },
  {
    Nombre: "LA FAMILIA",
    Autor: "SARA MESA",
    disponible: true,
    id_libro: 34,
    fecha_alquiler: null,
    portada: "Familia.jpg",
    descripcion:
      "«¡En esta familia no hay secretos!», proclama al inicio de este libro Damián, el padre, un hombre de ideas e ideales fijos obsesionado con la rectitud y la pedagogía. Pero esa casa sin secretos está en realidad llena de grietas, y la opresión que se respira entre sus paredes terminará creando vías de escape, códigos clandestinos, ocultaciones, fingimientos y mentiras. Formada por dos niñas, dos niños, una madre y un padre, esta familia en apariencia normal, de clase trabajadora y llena de buenas intenciones, es la protagonista de una novela coral que abarca varias décadas y en cuyas historias laten el deseo de libertad y la crítica a los pilares que tradicionalmente han sostenido, y todavía sostienen en gran medida, la institución familiar: autoritarismo y obediencia, vergüenza y silencio.",
  },
  {
    Nombre: "NADIE EN ESTA TIERRA",
    Autor: "VÍCTOR DEL ÁRBOL",
    disponible: true,
    id_libro: 35,
    fecha_alquiler: null,
    portada: "NadieEstaTierra.jpg",
    descripcion:
      "Julián Leal es un inspector de la policía en Barcelona que no está pasando por su mejor momento. El médico le ha detectado un cáncer y no le da mucho tiempo de vida, además acaba de ser expedientado por darle una paliza a un sospechoso de abusos de menores. Después de una visita a su pueblo en Galicia empiezan a aparecer unos cadáveres que pueden tener relación con él y su superior le quiere cargar con las culpas para vengarse por unos rencores del pasado. Él y su compañera Virginia se verán arrastrados a una investigación mucho más profunda y complicada de lo que podrían pensar y que podría costarles la vida a ellos y a todos los que aman. Julián no deberá ajustar cuentas solo con su presente, sino también con su pasado.",
  },
  {
    Nombre: "TODA UNA VIDA",
    Autor: "MIGUEL ANGEL REVILLA",
    disponible: true,
    id_libro: 37,
    fecha_alquiler: null,
    portada: "TodaVida.jpg",
    descripcion:
      "Miguel Ángel Revilla, uno de los políticos más carismáticos de España, cumple 80 años y lo celebra con la publicación de un nuevo libro que gustará a todos. En Toda una vida, Revilla hace un repaso de la actualidad social y política y ameniza al lector con sus vivencias y sus reflexiones sin cortapisas, con la libertad que siempre le ha caracterizado al expresar sus opiniones.",
  },
  {
    Nombre: "EL LIBRO NEGRO DE LAS HORAS",
    Autor: "EVA GARCIA SAENZ DE URTURI",
    disponible: true,
    id_libro: 36,
    fecha_alquiler: null,
    portada: "LibroNegroHoras.jpg",
    descripcion:
      "Alguien que lleva muerto cuarenta años no puede ser secuestrado y, desde luego, no puede sangrar. Vitoria, 2022. El exinspector Unai López de Ayala ?alias Kraken? recibe una llamada anónima que cambiará lo que cree saber de su pasado familiar: tiene una semana para encontrar el legendario Libro Negro de las Horas, una joya bibliográfica exclusiva, si no, su madre, quien descansa en el cementerio desde hace décadas, morirá. ¿Cómo es esto posible?",
  },
  {
    Nombre: "UNA LUZ EN LA LLAMA",
    Autor: "JENNIFER L. ARMENTROUT",
    disponible: true,
    id_libro: 38,
    fecha_alquiler: null,
    portada: "LuzLlama.jpg",
    descripcion:
      "La verdad sobre el plan de Sera ha salido a la luz, y ha hecho pedazos la frágil confianza que se había forjado entre ella y Nyktos. Rodeada de personas que no confían en ella, solo le queda cumplir con su deber. Hará lo que sea necesario para acabar con Kolis, el falso Rey de Dioses, y su gobierno tiránico en el Iliseeum, y así detener la amenaza que supone para el mundo mortal. No obstante, Nyktos tiene un plan, y mientras trabajan juntos lo último que necesitan es la innegable y abrasadora pasión que continúa ardiendo entre ellos. Sera no puede permitirse enamorarse del torturado Primigenio, especialmente ahora que la posibilidad de obtener una vida alejada de un destino que nunca quiso está más cerca que nunca. Y cuando Sera comienza a darse cuenta de que quiere ser más que Consorte solo en el nombre, el peligro que los acecha se intensifica. Los ataques en las Tierras Umbrías se multiplican y cuando Kolis los convoca a la Corte, un nuevo riesgo se hace evidente. El poder Primigenio de la Vida crece en su interior y, sin el amor de Nyktos (una emoción que él es incapaz de sentir), no sobrevivirá. Eso si consigue alcanzar su Ascensión y Kolis no la atrapa primero. El tiempo se les acaba. A ella y a los reinos.",
  },
  {
    Nombre: "DONDE TODO BRILLA",
    Autor: "ALICE KELLEN",
    disponible: true,
    id_libro: 39,
    fecha_alquiler: null,
    portada: "TodoBrilla.jpg",
    descripcion:
      "Nicki Aldrich y River Jackson han sido inseparables desde que llegaron al mundo con cuarenta y siete minutos de diferencia. Ella lo hizo envuelta en polvo de hadas. Él como si fuese un meteoro en llamas. El pequeño pueblo costero donde crecieron se convirtió en el escenario de sus paseos en bicicleta, las tardes en la casa del árbol y los primeros amores, secretos y dudas. Sin embargo, con el paso de los años, River sueña con escapar de aquel rincón perdido donde todo gira alrededor de la tradicional pesca de langosta y Nicki anhela encontrar su lugar en el mundo. Pero ¿qué ocurre cuando nada sale como lo habían planeado? ¿Es posible elegir dos caminos distintos y, pese a todo, encontrarse en el final del trayecto? Para lograrlo, River y Nicki tendrán que bucear en las profundidades del corazón, rescatar pedazos de lo que fueron y entender aquello que rompieron. Y quizá así, uniendo y encajando cada fragmento, logren descubrir quiénes son ahora y recordar el brillo de las cosas intangibles.",
  },
  {
    Nombre: "TRES MESES",
    Autor: "JOANA MARCUS",
    disponible: true,
    id_libro: 40,
    fecha_alquiler: null,
    portada: "3Meses.jpg",
    descripcion:
      "Jack Ross no creía en el compromiso, y hasta ahora no le había ido mal. La fantasía del amor verdadero, de ese cruce de miradas que te cambia la vida por completo, no era más que un argumento sobreexplotado de las películas que más solía criticar. Por eso, ¿que importaba que hubiera conocido a Jenna? ¿Que importaba si pasaban tanto tiempo juntos? ¿Que importaba si, poco a poco, iba abriendole su corazón? Y, sobre todo, ¿que importaba el riesgo de que se rompiera? En tres meses pueden ocurrir muchas cosas, y enamorarse es una de ellas. Jack Ross no iba a ser menos.",
  },
];

// Array libros para comprar
const libros_comprar = [
  {
    Nombre: "HIJOS DE LA FABULA",
    Autor: "FERNANDO ARAMBURU",
    existencias: 34,
    id_libro: 1,
    portada: "HijosFabula2.jpg",
    descripcion:
      "Dos jóvenes exaltados, Asier y Joseba, se marchan en 2011 al sur de Francia con la intención de convertirse en militantes de ETA. Esperan instrucciones en una granja de pollos, acogidos por una pareja francesa con la que apenas se entienden. Allí se enteran de que la banda ha anunciado el cese de la actividad armada. Abandonados a su suerte, sin dinero, sin experiencia ni armas, deciden continuar la lucha por su cuenta, fundando una organización propia, en la que uno asumirá el papel de jefe y disciplinado ideólogo, y el otro el de subalterno más relajado. El contraste entre el afán de gestas y las peripecias más ridículas, bajo una lluvia pertinaz, va llevando la historia hacia una especie de drama cómico. Hasta que conocen a una joven que les propone un plan. Tras el éxito de Patria, esta nueva novela de Fernando Aramburu nos arrastra, de una manera agilísima y sorprendente, por una peripecia inesperada y un desenlace magistral. Contada con un humor permanente, cáustica, veloz, escrita con frases cuya brevedad son un auténtico virtuosismo, Hijos de la fábula vuelve a demostrarnos que Fernando Aramburu pertenece a la estirpe de los grandes escritores, los que nos cuentan historias como nadie es capaz de hacerlo.",
  },
  {
    Nombre: "CASTILLOS DE FUEGO",
    Autor: "IGNACIO MARTINEZ DE PISON",
    existencias: 5,
    id_libro: 2,
    portada: "CastillosdeFuego2.jpg",
    descripcion:
      "Madrid, 1939-1945. Muchos luchan por salir adelante en una ciudad marcada por el hambre, la penuria y el estraperlo. Como Eloy, un joven tullido que trata de salvar de la pena de muerte a su hermano encarcelado; Alicia, taquillera en un cine que pierde su empleo por seguir su corazón; Basilio, profesor de universidad que afronta un proceso de depuración; el falangista Matías, que trafica con objetos requisados, o Valentín, capaz de cualquier vileza con tal de purgar su anterior militancia. Costureras, estudiantes, policías: vidas de personas comunes en tiempos extraordinarios.",
  },
  {
    Nombre: "LA VOZ DE LOS VALIENTES",
    Autor: "RAFAEL TARRADAS BUILTO",
    existencias: 23,
    id_libro: 3,
    portada: "LaVozDeLosValientes2.jpg",
    descripcion:
      "Baviera, Alemania. El castillo de Fallstein es uno de los más fastuosos de la zona, pero, lejos de ser un remanso de paz alejado del frente, Hilda Sagnier ha comprobado cómo la guerra y sus consecuencias han entrado con fuerza en sus salones, pues su marido, el prestigioso conde bávaro de Fallstein, ha sido completamente seducido por Hitler. Decidida a luchar por lo que cree, la condesa no dudará en arriesgar su vida, sobrepasar sus límites y fingir ser quien no es para ayudar a los perseguidos del régimen. Mientras tanto, en Barcelona, los nazis empiezan a agasajar a José Manuel, pero el empresario sabe exactamente cuál es su objetivo. Él, que fue espía durante la Guerra Civil española, no tardará en involucrarse en la misión más secreta y de una relevancia capital, una misión que lo llevará a alternar con la élite alemana y a relacionarse con la alta sociedad de Potsdam. Allí, donde todos se relajan y hablan más de la cuenta, el espía deberá encontrar y destruir el arma en la que los alemanes confían su victoria. Hilda y José Manuel, dos españoles en el corazón del Tercer Reich, descubrirán que, en tiempos de guerra, nadie es quien dice ser y que a veces la urgencia y el peligro son los mejores aliados para que el amor y los verdaderos sentimientos afloren.",
  },
  {
    Nombre: "TODAS LAS PIEZAS ROTAS",
    Autor: "JOHN BOYNE",
    existencias: 2,
    id_libro: 4,
    portada: "PiezasRotas2.jpg",
    descripcion:
      "Cuando Bruno decidió acompañar a su amigo Shmuel a la cámara de gas, ¿qué ocurrió con su hermana, Gretel, y sus padres? ¿Sobrevivió su familia a la guerra y los estragos del nazismo? Gretel Fernsby es ahora una anciana de 91 años que vive cómodamente en un apartamento en una de las zonas más acomodadas de Londres. Cuando una joven familia se muda al piso de abajo, Gretel no puede evitar entablar amistad con Henry, el hijo pequeño de la pareja. Una noche, tras ser testigo de una violenta discusión entre la madre de Henry y su dominante padre, Gretel se enfrenta a la oportunidad de expiar la culpa, el dolor y el remordimiento y hacer algo por salvar a un niño, por segunda vez en su vida. Pero para ello se verá obligada a revelar su verdadera identidad...",
  },
  {
    Nombre: "EL CUCO DE CRISTAL",
    Autor: "JAVIER CASTILLO",
    existencias: 43,
    id_libro: 5,
    portada: "CucoCristal2.jpg",
    descripcion:
      "Un trasplante de urgencia. Un donante lleno de secretos. ¿Qué esconden los latidos de tu corazón? Nueva York, 2017. Cora Merlo, médico residente de primer año, sufre un infarto fulminante que la obliga a un trasplante de corazón. Aún convaleciente la joven recibe la visita de una extraña mujer con una enigmática oferta: pasar unos días en Steelville, un pequeño pueblo de interior, para conocer la vida de su hijo Charles, el donante de su corazón. Cora se adentra así en un hogar lleno de secretos, en un misterio que se extiende durante veinte años y en un pueblo hermético en el que, justo el día de su llegada, desaparece un bebé en un parque público.",
  },
  {
    Nombre: "EL LATIDO DEL MAR",
    Autor: "JORGE MOLIST",
    existencias: 18,
    id_libro: 6,
    portada: "LatidoMar2.jpg",
    descripcion:
      "Blanca, una hermosa dama del siglo XIII, lo pierde todo tras la derrota de su familia en la guerra, y, para conservar a su hijo con vida, debe sufrir los peores abusos de los vencedores. El niño, huyendo de la miseria, se embarca de grumete en una galera, la nave más dura y peligrosa de la época. En el mar buscará la libertad de su madre, a su familia perdida, y venganza. Esta trepidante novela basada en hechos reales recrea una de las aventuras más asombrosas de la historia y nos traslada a los últimos años de las cruzadas en Tierra Santa y a la guerra por el dominio del Mediterráneo entre Francia y la Corona de Aragón.",
  },

  {
    Nombre: "EL RETRATO DE CASADA",
    Autor: "MAGGIE O´FARRELL",
    existencias: 67,
    id_libro: 7,
    portada: "RetratoCasada2.jpg",
    descripcion:
      "Florencia, mediados del siglo XVI. Lucrezia, tercera hija del gran duque Cosimo de’ Medici, es una niña callada y perspicaz, con un singular talento para el dibujo, que disfruta de su discreto y tranquilo lugar en el palazzo. Pero cuando muere su hermana Maria, justo antes de casarse con Alfonso d’Este, primogénito del duque de Ferrara, Lucrezia se convierte inesperadamente en el centro de atención: el duque se apresura a pedir su mano, y su padre a aceptarla. Poco después, con solo quince años, se traslada a la corte de Ferrara, donde es recibida con recelo. Su marido, doce años mayor, es un enigma: ¿es en realidad el hombre sensible y comprensivo que le pareció al principio o un déspota implacable al que todos temen? Lo único que está claro es lo que se espera de ella: que proporcione cuanto antes un heredero que asegure la continuidad del título. Con la misma belleza y emoción con las que nos cautivó en Hamnet, Maggie O’Farrell vuelve a demostrar su inigualable talento para adentrarse en los recovecos del pasado en El retrato de casada, una novela que reinterpreta desde la ficción un capítulo de la Italia renacentista y narra la lucha contra el destino de una joven asombrosa.",
  },
  {
    Nombre: "DE VUELTA A CASA",
    Autor: "KATE MORTON",
    existencias: 73,
    id_libro: 8,
    portada: "VueltaCasa2.jpg",
    descripcion:
      "Al final de un día caluroso, junto a un arroyo en los terrenos de la mansión de la familia Turner, un repartidor realiza un descubrimiento espeluznante. Comienza una investigación policial y el pequeño pueblo de Tambilla se ve inmerso en uno de los casos de asesinato más desconcertantes y dolorosos de la historia de Australia del Sur. Sesenta años más tarde Jess ha perdido su empleo en el periódico y tiene dificultades para llegar a fin de mes. Inmersa en encontrar una buena historia que cambie su suerte, recibe una llamada inesperada por la que decide abandonar Londres y regresar a Sídney. Su abuela Nora, con quien se crio, ha sufrido unacaíday está ingresada. El recuerdo de su querida abuela contrasta con la realidad al encontrar a una mujer frágil y desconcertada. Sin nada que hacer en casa de Nora, Jess se dedica a curiosear y en el dormitorio de la anciana descubre un libro que detalla la investigación policial de una tragedia ya olvidada: la de la familia Turner en la Nochebuena de 1959. Mientras hojea el libro, Jess descubre una asombrosa conexión entre su familia y aquel suceso. Desde entonces la búsqueda de la verdad será el único camino posible.",
  },
  {
    Nombre: "EL TABLERO DE LA REINA",
    Autor: "LUIS ZUECO",
    existencias: 12,
    id_libro: 9,
    portada: "TableroReina2.jpg",
    descripcion:
      "Año 1468. Castilla se encuentra en un momento crucial de su historia. Alfonso de Trastámara ha muerto en sospechosas circunstancias y Enrique IV se alza como rey obligando a su hermanastra Isabel, la única que podría oponerse a sus planes, a firmar la paz. Ella acepta, pues está destinada a convertirse en Isabel la Católica y sabe que las grandes partidas no se ganan en el primer movimiento. Mientras los asuntos de la Corte mantienen al reino en vilo, el misterioso asesinato de un noble une fortuitamente a Gadea, una joven apasionada del ajedrez que esconde un oscuro pasado, y a Ruy, un cronista amante de la Historia y los libros. La peligrosa carrera a contrarreloj de ambos para descubrir al culpable se entrelaza con las conspiraciones y las guerras de la Corte de Isabel, quien bajo su mandato supo moverse como una maestra en el tablero y transformó para siempre la figura de la reina en el ajedrez.",
  },
  {
    Nombre: "SOLO HUMO",
    Autor: "JUAN JOSÉ MILLÁS",
    existencias: 193,
    id_libro: 10,
    portada: "SoloHumo2.jpg",
    descripcion:
      "El día en que cumple dieciocho años, Carlos recibe un extraño regalo: la noticia de que su padre, al que nunca trató, ha muerto y le ha dejado en herencia una casa con todo lo que contiene y una vida desconocida a la que asomarse. Examinando los vestigios de esa existencia abruptamente interrumpida, encuentra un manuscrito que narra una historia de amores secretos, de una niña y una mariposa, de amistad y de muerte. ¿Es una confesión real o una ficción? Carlos, que está a punto de iniciar sus estudios de Administración y Dirección de Empresas, se da cuenta de que su padre era un lector voraz. En el dormitorio de esa casa que poco a poco va haciendo suya, junto a la cama, descubre un libro que le atrapa: los cuentos de los hermanos Grimm. El chico se sumerge en la lectura de esos relatos y al tiempo inicia un proceso vital que le acerca cada vez más a su padre y le enseña la manera de transitar por esas fronteras invisibles que separan la realidad de la fantasía y la cordura de la locura. En esta novela engañosamente ligera, Juan José Millás vuelve a algunos de los temas más representativos de su narrativa, como la identidad, el desdoblamiento, los recovecos más oscuros de la realidad cotidiana —aquellos en los que se esconde lo extraordinario— y la paternidad, al tiempo que compone un himno a la imaginación y al poder transformador de la literatura.",
  },
  {
    Nombre: "HÁBITOS ATÓMICOS",
    Autor: "JAMES CLEAR",
    existencias: 1,
    id_libro: 11,
    portada: "HabitosAtomicos2.jpg",
    descripcion:
      "A menudo pensamos que para cambiar de vida tenemos que pensar en hacer cambios grandes. Nada más lejos de la realidad. Según el reconocido experto en hábitos James Clear, el cambio real proviene del resultado de cientos de pequeñas decisiones: hacer dos flexiones al día, levantarse cinco minutos antes o hacer una corta llamada telefónica. Clear llama a estas decisiones “hábitos atómicos”: tan pequeños como una partícula, pero tan poderosos como un tsunami. En este libro innovador nos revela exactamente cómo esos cambios minúsculos pueden crecer hasta llegar a cambiar nuestra carrera profesional, nuestras relaciones y todos los aspectos de nuestra vida.",
  },
  {
    Nombre: "ESPERANDO AL DILUVIO",
    Autor: "DOLORES REDONDO",
    existencias: 7,
    id_libro: 12,
    portada: "Diluvio2.jpg",
    descripcion:
      "Un salvaje asesino en serie. Una búsqueda hasta el último latido. Una ciudad amenazada por un diluvio. Entre los años 1968 y 1969, el asesino al que la prensa bautizaría como John Biblia mató a tres mujeres en Glasgow. Nunca fue identificado y el caso todavía sigue abierto hoy en día. En esta novela, a principios de los años ochenta, el investigador de policía escocés Noah Scott Sherrington logra llegar hasta John Biblia, pero un fallo en su corazón en el último momento le impide arrestarlo. A pesar de su frágil estado de salud, y contra los consejos médicos y la negativa de sus superiores para que continúe con la persecución del asesino en serie, Noah sigue una corazonada que lo llevará hasta el Bilbao de 1983. Justo unos días antes de que un verdadero diluvio arrase la ciudad. Dolores Redondo se autodefine como «una escritora de tormentas» y con esta nueva novela, basada en hechos reales, nos conduce hasta el epicentro de una de las mayores tormentas del siglo pasado a la vez que retrata una época en plena ebullición política y social. Es un homenaje a la cultura del trabajo lleno de nostalgia por un tiempo en el que la radio era una de las pocas ventanas abiertas al mundo y, sobre todo, a la música. Y es también un canto a la camaradería de las cuadrillas y a las historias de amor que nacen de un pálpito. Una obra deslumbrante con unos personajes que nos llevan de la crueldad más espantosa a la esperanza en el ser humano.",
  },
  {
    Nombre: "REVOLUCIÓN, UNA NOVELA",
    Autor: "ARTURO PEREZ-REVERTE",
    existencias: 12,
    id_libro: 13,
    portada: "Revolucion.jpg",
    descripcion:
      "Ésta es la historia de un hombre, tres mujeres, una revolución y un tesoro. La revolución fue la de México en tiempos de Emiliano Zapata y Francisco Villa. El tesoro fueron quince mil monedas de oro de a veinte pesos de las denominadas maximilianos, robadas en un banco de Ciudad Juárez el 8 de mayo de 1911. El hombre se llamaba Martín Garret Ortiz y era un joven ingeniero de minas español. Todo empezó para él ese mismo día, cuando desde su hotel oyó un primer disparo lejano. Salió a la calle para ver qué ocurría y a partir de ese momento su vida cambió para siempre...",
  },
  {
    Nombre: "EL LADRÓN DE ROSTROS",
    Autor: "IBON MARTÍN",
    existencias: 0,
    id_libro: 14,
    portada: "LadronRostros.jpg",
    descripcion:
      "En Sandaili, una humilde ermita excavada en la roca, ha aparecido el cuerpo mutilado de una mujer asesinada mientras practicaba un antiguo rito de fertilidad. Su torso ha sido abierto y vaciado y las manos han sido colocadas a ambos lados de su abdomen en actitud de entrega. La escena reproduce, con macabra exactitud, las figuras de los apóstoles que Oteiza esculpió en la fachada de la basílica de Arantzazu. Las pruebas señalan que alguien realizó una copia de su rostro en el momento de su muerte. Un peligroso asesino ritual ha nacido al abrigo de las verdes montañas que guardan desde tiempos inmemoriales los mitos y las leyendas de los vascos. Un enclave aislado, moldeado por el agua que ha dejado sus cicatrices en forma de desfiladeros majestuosos y profundas cuevas. Ane Cestero y la Unidad de Homicidios de Impacto emprenderán un viaje a las entrañas de la tierra donde se oculta lo más oscuro del alma humana.",
  },
  {
    Nombre: "LEJOS DE LUISIANA",
    Autor: "LUZ GABÁS",
    existencias: 22,
    id_libro: 15,
    portada: "Luisiana.jpg",
    descripcion:
      "Después de años de colonización, la familia Girard acepta la controvertida decisión de su país, Francia, de ceder a España en 1763 parte de las indómitas tierras del Misisipi; sin embargo, sufrirá las consecuencias de las rebeliones de sus compatriotas contra los españoles, la guerra de norteamericanos contra ingleses por la independencia de los Estados Unidos y la lucha desesperada de los nativos indios por la supervivencia de sus pueblos. En unos tiempos tan convulsos, Suzette Girard e Ishcate, indio de la tribu kaskaskia, librarán su propia batalla: preservar su amor de las amenazas del mundo que les ha tocado vivir. Todo ello conforma una novela cautivadora y monumental que atraviesa las cuatro décadas en las que España poseyó las legendarias tierras de Luisiana.",
  },
  {
    Nombre: "LA DESCONOCIDA",
    Autor: "ROSA MONTERO",
    existencias: 41,
    id_libro: 16,
    portada: "Desconocida.jpg",
    descripcion:
      "Es de noche y en el puerto de Barcelona un guardia hace su ronda cuando su pastora alemana se para en seco a olfatear desesperadamente un contenedor. Al llegar, los mossos d’esquadra hallan en su interior a una mujer en posición fetal, inconsciente y deshidratada. Tiene una brecha en la sien, quemaduras en la cara y el cuerpo, y no recuerda quién es ni cuál es su lengua materna, pero está viva. Mientras se recupera enel Hospital Clínic, un hombre intenta asesinarla. La inspectora Anna Ripoll, experta en trata de mujeres, parece haber dado con su identidad y su dirección: Alicia Garone; 19, rue du Chariot, Lyon. En la ciudad francesa el inspector Erik Zapori busca el modo de librarse de la investigación a la que asuntos internos lo está sometiendo por delitos de corrupción y proxenetismo. Nada mejor que viajar a España a ayudar en la resolución de un caso, aunque puede que este sea el más complejo de su vida.",
  },
  {
    Nombre: "SIEMPRE",
    Autor: "DEFREDS",
    existencias: 80,
    id_libro: 17,
    portada: "Siempre.jpg",
    descripcion:
      "Siguiendo el camino abierto por Ojalá, esta flamante propuesta de Defreds sorprende como contrapartida y continuación de Siempre, su anterior título, un nuevo volumen en el que destacarán también las preciosas creaciones de Lady Desidia que ilustran los textos. En este caso, el libro está organizado siguiendo los signos del Zodíaco, que marcan la impronta de una personalidad, con sus características distintivas, como un personaje con sus cualidades y defectos, que se enfrenta a los hechos y las experiencias de cada día que nos afectan a todos por igual. Una fábula actual bajo la tutela del cielo que reparte personalidad y temperamento, filias, fobias diferentes, para enfrentarnos a la pelea cotidiana. En palabras del autor: «Porque un Ojalá nunca está completo sin un Siempre.",
  },
  {
    Nombre: "EL ANGEL DE LA CIUDAD",
    Autor: "EVA GARCIA SAENZ DE URTURI",
    existencias: 1,
    id_libro: 18,
    portada: "AngelCiudad.jpg",
    descripcion:
      "Un espléndido y decadentepalazzo arde en una pequeña isla veneciana donde se celebra un encuentro de la Liga de Libreros Anticuarios. Los cuerpos de los invitados, todos conocidos de Kraken, no aparecen entre los escombros, y se sospecha que su madre, Ítaca, estuvo implicada en el incendio que sucedió en idénticas circunstancias décadas atrás. Mientras, en Vitoria, la inspectora Estíbaliz investiga un caso que puede tener las claves del atraco que acabó con la vida del padre de Kraken. Pero Unai es reacio a volver a la investigación en activo y siente que debe elegir entre la búsqueda de lo que les sucedió a sus padres o la familia que ha creado con Alba y su hija Deba. Un paseo por una Venecia donde las leyendas y la perturbadora figura del Ángel de la ciudad, mitad mecenas, mitad demonio, mueven los hilos de una vertiginosa trama repleta de amor al arte y de la búsqueda de la propia identidad.",
  },
  {
    Nombre: "EL HOMBRE EN BUSCA DE SENTIDO",
    Autor: "VIKTOR EMIL FRANKL",
    existencias: 4,
    id_libro: 19,
    portada: "HombreBuscaSentido.jpg",
    descripcion:
      "El doctor Frankl, psiquiatra y escritor, suele preguntar a sus pacientes aquejados de múltiples padecimientos: «¿Por qué no se suicida usted? Y muchas veces, de las respuestas extrae una orientación para la psicoterapia a aplicar: a éste, lo que le ata a la vida son los hijos; al otro, un talento, una habilidad sin explotar; a un tercero, quizás, sólo unos cuantos recuerdos que merece la pena rescatar del olvido. Tejer estas tenues hebras de vidas rotas en una urdimbre firme, coherente, significativa y responsable es el objeto con que se enfrenta la logoterapia.",
  },
  {
    Nombre: "EL ANCHO MUNDO",
    Autor: "PIERRE LEMAITRE",
    existencias: 12,
    id_libro: 20,
    portada: "AnchoMundo.jpg",
    descripcion:
      "El ancho mundo narra las aventuras, desventuras, peripecias y secretos de los Pelletier, una familia propietaria de una fábrica de jabones en Beirut, ciudad bajo influencia francesa, con la Guerra de Indochina y el París de la posguerra y la reconstrucción como telón de fondo. Y todo con un toque de exotismo y varios asesinatos.",
  },
  {
    Nombre: "LOS DUEÑOS DEL PLANETA",
    Autor: "CRISTINA MARTÍN JIMENEZ",
    existencias: 15,
    id_libro: 21,
    portada: "DueñosPlaneta.jpg",
    descripcion:
      "Vivimos en una época en la que las élites dominan todos los ámbitos de la vida, y lo hacen bajo la apariencia de bienhechores y filántropos. Miramos a esos grandes hombres con admiración, envidia e, incluso, agradecimiento. Personas como Elon Musk, Jeff Bezos, Mark Zuckerberg, Bill Gates o Mohamed bin Salmán no solo figuran en el top de los más ricos, sino que, además, poseen gigantescas compañías tecnológicas y grandes conglomerados financieros. Son los dueños del planeta, pero ¿son lo que aparentan? ¿Qué se oculta detrás de esas sonrisas autocomplacientes? ¿Hasta dónde llega su afán de poder? ¿Cómo afecta al resto de la ciudadanía sus acciones?",
  },
  {
    Nombre: "TODAS ESAS COSAS QUE TE DIRÉ MAÑANA",
    Autor: "ELÍSABET BENAVENT",
    existencias: 17,
    id_libro: 22,
    portada: "CosaDireMañana.jpg",
    descripcion:
      "Miranda trabaja como subdirectora en una revista de moda. Miranda es feliz junto a Tristán. Por eso no entiende que la este dejando. Ojalá pudiera dar marcha atrás y volver al momento en que se conocieron... Pero ¿y si realmente tuviera la oportunidad de cambiar su historia?",
  },
  {
    Nombre: "TODO ARDE",
    Autor: "JUAN GÓMEZ-JURADO",
    existencias: 36,
    id_libro: 23,
    portada: "TodoArde.jpg",
    descripcion:
      "Esta es la historia de tres mujeres que lo han perdido todo. Incluso el miedo. Por eso son tan peligrosas. Esta es la historia de una venganza imposible, sin ninguna posibilidad de éxito. Esta es la historia de tres mujeres que se atreven a hacer lo que los demás sólo nos atrevemos a imaginar. Algo muy poderoso está a punto de ocurrir. Y nada volverá a ser igual.",
  },
  {
    Nombre: "EL CANTAR DE LIÉBANA",
    Autor: "PERIDIS",
    existencias: 29,
    id_libro: 24,
    portada: "CantarLiebana.jpg",
    descripcion:
      "Lebaniego de pro (nació en Cabezón de Liébana), Peridis realiza en esta su quinta novela con Espasa una original síntesis de todos estos saberes y virtudes, además de un homenaje a su tierra natal y al más ilustre de sus paisanos, el monje Beato, autor en el siglo VIII de unos comentarios al Apocalipsis de fama imperecedera. En la novela se entrelaza la historia y vicisitudes de Beato en aquellos remotos y oscuros albores de la Edad Medida, cuando toda la Península estaba por reconquistar, con la peripecia, en nuestros días, de Eulalia, una sexagenaria, viuda reciente y de posibles, que para rellenar el vacío de sus días se apunta a un seminario sobre los beatos en la Universidad de Valladolid. Allí conocerá a la simpática Tiqui, una joven alternativa que será su maestra en los códigos del mundo contemporáneo (tan abtrusos para ella como los códices medievales) y al excéntrico Don Crisógono, un profesor que reta a sus alumnos a que hagan un descubrimiento sensacional.",
  },
  {
    Nombre: "EL JUEGO DEL ALMA",
    Autor: "JAVIER CASTILLO",
    existencias: 120,
    id_libro: 25,
    portada: "JuegoAlma.jpg",
    descripcion:
      "Nueva York, 2011. Una chica de quince años aparece crucificada en un suburbio a las afueras. Miren Triggs, periodista de investigación del Manhattan Press, recibe de manera inesperada un extraño sobre. En su interior, la polaroid de otra adolescente amordazada y maniatada, con una sola anotación: GINA PEBBLES, 2002. Miren Triggs y Jim Schmoer, su antiguo profesor de periodismo, seguirán la pista de la chica de la imagen mientras investigan la crucifixión de Nueva York. Así se adentrarán en una institución religiosa en la que todo son secretos y en un enigma único lleno de suspense en el que deberán descifrar tres preguntas de respuesta imposible: ¿que le sucedió a Gina?, ¿quien envía la polaroid? y, la más importante; ¿están conectadas ambas historias?",
  },
  {
    Nombre: "NADIE EN ESTA TIERRA",
    Autor: "VÍCTOR DEL ÁRBOL",
    existencias: 11,
    id_libro: 35,
    portada: "NadieEstaTierra.jpg",
    descripcion:
      "Julián Leal es un inspector de la policía en Barcelona que no está pasando por su mejor momento. El médico le ha detectado un cáncer y no le da mucho tiempo de vida, además acaba de ser expedientado por darle una paliza a un sospechoso de abusos de menores. Después de una visita a su pueblo en Galicia empiezan a aparecer unos cadáveres que pueden tener relación con él y su superior le quiere cargar con las culpas para vengarse por unos rencores del pasado. Él y su compañera Virginia se verán arrastrados a una investigación mucho más profunda y complicada de lo que podrían pensar y que podría costarles la vida a ellos y a todos los que aman. Julián no deberá ajustar cuentas solo con su presente, sino también con su pasado.",
  },
  {
    Nombre: "INVISIBLE",
    Autor: "ELOY MORENO",
    existencias: 100,
    id_libro: 27,
    portada: "Invisible.jpg",
    descripcion:
      "¿Quién no ha deseado alguna vez ser invisible? ¿Quién no ha deseado alguna vez dejar de serlo? El problema es que nunca he llegado a controlar bien ese poder: A veces, cuando más ganas tenía de ser invisible, era cuando más gente me veía, y en cambio, cuando deseaba que todos me vieran, era cuando a mi cuerpo le daba por desaparecer.",
  }
];

// RegExp
var patterndni = /^[XYZ]?\d{5,8}[A-Z]$/;
var patternname = /^[a-zA-Z]+$/;
var patternpwrd =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;

// Variables
var id_prin;
var id_admin;
var id_libro_alquilable;
let id_libro_seleccionado;
var monedas_mostrar;

// Función utilizada para controlar el inicio de sesión de un usuario
function start_session() {
  // Obtengo el valor de los campos 'id' y 'pwrd' y establezco la variable 'encontrado' en false.
  var id = document.getElementById("id").value;
  var pwrd = document.getElementById("pwrd").value;
  var encontrado = false;
  // Compruebo que el id cumple con los requisitos de un DNI formato español.
  if (patterndni.test(id)) {
    // Compruebo que si la contraseña contiene espacios salte alerta y el cursor se quede en el campo contraseña.
    if (pwrd.includes(" ")) {
      alert("La contraseña no puede contener espacios.");
      document.getElementById("pwrd").value = "";
      document.getElementById("pwrd").focus();
      return; //Salgo de la función
    }
    //Recorro el array 'admin' y compruebo que el id y la contraseña introducidos se encuentran en el array 'admin' y llamo a la función 'show_hub'
    for (let x = 0; x < admin.length; x++) {
      if (id == admin[x].id) {
        if (pwrd == admin[x].contraseña) {
          //Doy la bienvenida al usuario que ha iniciado sesión
          alert("Bienvenido/a " + admin[x].nombre + "!");
          // Aprovecho esta función para mediante innerHTML mostrar el usuario que ha iniciado sesión en la capa 'hub' de la aplicación.
          document.getElementById("usuario_iniciado").innerHTML =
            "<b>" + admin[x].nombre + " " + admin[x].apellido + "</b> ";
          // Llamo a la función 'show_hub()'
          show_hub();
          // Paso el valor de la variable 'id' a la variable globar 'id_admin' para utilizarla en otra función.
          id_admin = id;
          // El ID ha sido encontrado por lo tanto la variable 'encontrado' se establece como true.
          encontrado = true;
          // Paro el bucle
          break;
        } else {
          // La contraseña introducida no es la del DNI introducido, alerto.
          alert(
            "La contraseña introducida no corresponde con el ID introducido"
          );
          // Aquí el ID también ha sido encontrado a pesar de que la contraseña no.
          encontrado = true;
          document.getElementById("pwrd").value = "";
          document.getElementById("pwrd").focus();
          break;
        }
      }
    }
    // Si no se ha encontrado significa que no existe en la base de datos, por lo tanto alerto de ello.
    if (!encontrado) {
      alert("El DNI introducido no existe en la base de datos");
      document.getElementById("id").value = "";
      document.getElementById("id").focus();
      document.getElementById("pwrd").value = "";
    }
    // Si el campo ID se encuentra en blanco, alerto.
  } else if (id == "") {
    alert("No se puede dejar el espacio en blanco");
    document.getElementById("id").focus();
    document.getElementById("pwrd").value = "";
  } else {
    //Para el resto de situaciones en los que el ID introducido no correspondan con un formato DNI.
    alert(
      "El DNI introducido no cumple los requisitos necesarios para ser un número de identificación personal (DNI) en España. Debe contener 8 números y una letra mayúsucla."
    );
    document.getElementById("id").value = "";
    document.getElementById("pwrd").value = "";
    document.getElementById("id").focus();
  }
}

// Función que controla el registro de nuevos usuarios
function register() {
  // Obtengo el valor de los campos "reg_id", "reg_pwrd", "reg_pwrd2", "reg_name" y "reg_ape".
  var nuevo_id = document.getElementById("reg_id").value.trim();
  var nueva_pwrd = document.getElementById("reg_pwrd").value.trim();
  var nueva_pwrd2 = document.getElementById("reg_pwrd2").value.trim();
  var nuevo_name = document.getElementById("reg_name").value.trim();
  var nuevo_ape = document.getElementById("reg_ape").value.trim();
  // Guardo en otra variable el nombre y apellido recogidos y convierto la primera letra a mayúsucla en caso de ser minúscula.
  var nuevo_nombre = nuevo_name.charAt(0).toUpperCase() + nuevo_name.slice(1);
  var nuevo_apellido = nuevo_ape.charAt(0).toUpperCase() + nuevo_ape.slice(1);
  // Compruebo que los campos obligatorios no pueden quedar vacios.
  if (
    nuevo_id == "" ||
    nueva_pwrd == "" ||
    nueva_pwrd2 == "" ||
    nuevo_name == "" ||
    nuevo_ape == ""
  ) {
    alert("Por favor, rellene todos los campos");
    return; //Salgo de la función
  }

  // RegExp para controlar la entrada de un nombre y apellido sin números o simbolos, en caso de insertar un espacio, se recogerá sin este.
  if (!patternname.test(nuevo_name) || !patternname.test(nuevo_ape)) {
    alert("El nombre y apellido solo pueden contener letras");
    return; //Salgo de la función
  }

  // RegExp que controla que la contraseña introducida no tenga espacios, tenga 8 caracteres mínimo, mayúsculas y minúsculas y al menos un símbolo.
  if (!patternpwrd.test(nueva_pwrd)) {
    alert(
      "La contraseña no puede tener espacios y ha de tener 8 o mas caracteres entre los que debe haber, mayúsculas y minúsculas y al menos un símbolo"
    );
    return; //Salgo de la función
  }

  // RegExp para controlar que el DNI introducio cumple para ser un DNI español.
  if (!patterndni.test(nuevo_id)) {
    alert(
      "El DNI introducido no cumple los requisitos necesarios para ser un número de identificación personal (DNI) en España. Debe contener 8 números y una letra mayúsucla."
    );
    document.getElementById("reg_id").value = "";
    document.getElementById("reg_id").focus();
    return; //Salimos de la función
  }
  // Compruebo que el DNI introducido no existe en el array administrador. Si existe alerto y coloco el cursor en la caja de texto.
  for (let x = 0; x < admin.length; x++) {
    if (nuevo_id == admin[x].id) {
      alert(
        "El DNI introducido ya existe en la base de datos, pruebe otra vez"
      );
      document.getElementById("reg_id").value = "";
      document.getElementById("reg_id").focus();
      return; //Salimos de la función
    }
  }
  //Chequear que ambas contraseñas coinciden
  if (nueva_pwrd != nueva_pwrd2) {
    alert("Las contraseñas introducidas no coinciden");
    document.getElementById("reg_pwrd").value = "";
    document.getElementById("reg_pwrd").focus();
    document.getElementById("reg_pwrd2").value = "";
    return; //Salimos de la función
  }
  //Compruebo que el nombre y apellido no contienen números ni se dejan en blanco, si no devuelve alerta.
  if (isNaN(nuevo_name) && nuevo_name != "") {
    if (!isNaN(nuevo_ape) || nuevo_ape == "") {
      alert("El apellido no puede contener números o estar vacío");
      return; //Salimos de la función
    }
  } else {
    alert("El nombre no puede contener números o estar vacío");
    return; //Salimos de la función
  }

  //Añadimos al array administrador el nuevo usuario y muestra una alerta con sus datos, llamamos a la función "show_user()".
  admin.push({
    id: nuevo_id,
    contraseña: nueva_pwrd,
    nombre: nuevo_nombre,
    apellido: nuevo_apellido,
    monedas: 300,
    libros_alquilados: [],
    libros_comprados: []
  });
  alert(
    "El usuario " +
      nuevo_nombre +
      " " +
      nuevo_apellido +
      " con DNI: " +
      nuevo_id +
      " ha sido dado de alta correctamente. \n ¡¡¡ Bienvenido/a !!!"
  );
  alert(
    "Gracias por haberte dado de alta! Toma 300 monedas para canjear por libros!"
  );
  show_user(); 
}

// Función que muestra la capa cuenta con los datos correspondientes.
function cuenta() {
  // Recorro el array "admin" para buscar el usuario que tiene la sesión iniciada
  for (let x = 0; x < admin.length; x++) {
    if (id_admin == admin[x].id) {
      // Aprovecho esta función para mediante innerHTML mostrar los datos del usuario que tiene la sesion iniciada en la capa cuenta
      document.getElementById("id_cuenta").innerHTML = admin[x].id;
      document.getElementById("name_cuenta").innerHTML = admin[x].nombre;
      document.getElementById("ape_cuenta").innerHTML = admin[x].apellido;
      document.getElementById("monedas_cuenta").innerHTML = admin[x].monedas;
    }
  }
  // Recorro los elementos con la clase "libros_alq_cuenta" usando "querySelectorAll"
  document.querySelectorAll(".libros_alq_cuenta").forEach(function (table) {
    // Limpio la tabla para evitar duplicados
    table.innerHTML = "";
    // Creo una fila y sus celdas
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var authorCell = row.insertCell(1);
    // Agrego encabezados a las celdas
    nameCell.innerHTML = "Nombre";
    authorCell.innerHTML = "Autor";
    
    // Recorro el array "admin" para buscar los libros alquilados por el usuario y agregarlos a la tabla
    for (let x = 0; x < admin.length; x++) {
      if (id_admin == admin[x].id) {
        admin[x].libros_alquilados.forEach((libro, index) => {
          row = table.insertRow();
          nameCell = row.insertCell(0);
          authorCell = row.insertCell(1);
         
          nameCell.innerHTML = libro.nombre;
          authorCell.innerHTML = libro.autor;
          
        });
      }
    }
  });

  // Recorro los elementos con la clase "libros_compr_cuenta" usando "querySelectorAll"
  document.querySelectorAll(".libros_compr_cuenta").forEach(function (table) {
    // Limpio la tabla para evitar duplicados
    table.innerHTML = "";
    // Creo una fila y sus celdas
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var authorCell = row.insertCell(1);
    // Agrego encabezados a las celdas
    nameCell.innerHTML = "Nombre";
    authorCell.innerHTML = "Autor";
    // Recorro el array "admin" para buscar los libros comprados por el usuario y agregarlos a la tabla
    for (let x = 0; x < admin.length; x++) {
      if (id_admin == admin[x].id) {
        admin[x].libros_comprados.forEach((libro, index) => {
          row = table.insertRow();
          nameCell = row.insertCell(0);
          authorCell = row.insertCell(1);
          nameCell.innerHTML = libro.nombre;
          authorCell.innerHTML = libro.autor;
        });
      }
    }
  });
}

// Función que se encarga del cierre de sesión
function session_out() {
  // Mediante confirm procuro que se llame a la capa 'show_principal' si se pulsa aceptar.
  if (confirm("Se cerrará sesión ¿Esta Seguro?") == true) {
    show_principal();
    
  }
}

// Función para insertar la tabla con libros para alquilar
function consulta() {
  // Obtengo el valor de la tabla donde se mostrarán los libros
  const tabla = document.getElementById("tabla-libros");
  // Selecciono el cuerpo de la tabla mediante querySelector que me devuelve el primer elemento que coincide con el CSS dado.
  const tbody = tabla.querySelector("tbody");
  // Limpio la tabla para que no se repita cada vez que entro
  tbody.innerHTML = "";

  // Recorro el array 'libros' y se crea una fila en la tabla por cada libro existente.
  libros_alquilar.forEach((libro) => {
    // Crea una nueva fila
    const fila = document.createElement("tr");
    fila.setAttribute("data-id", libro.id_libro);

    // Crea una celda para el nombre con el vlaor correspondiente y la añade a la fila
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = libro.Nombre;
    fila.appendChild(celdaNombre);

    // Crea una celda para el autor con el valor correspondiente y la añade a la fila
    const celdaAutor = document.createElement("td");
    celdaAutor.textContent = libro.Autor;
    fila.appendChild(celdaAutor);

    // Crea una celda para el ID con el valor correspondiente y la añade a la fila
    const celdaID = document.createElement("td");
    celdaID.textContent = libro.id_libro;
    fila.appendChild(celdaID);
    // Verifica si el libro está disponible y agrega la clase 'no-disponible' si no lo está
    if (!libro.disponible) {
      fila.classList.add("no-disponible");
    }
    // Añade la fila a la tabla
    tbody.appendChild(fila);
  });

  // Implemento un filtro de búsqueda para la tabla.
  // Este código asegura que se ejecute la función una vez que la página esté cargada y lista.
  $(document).ready(function () {
    // Obtener la entrada de búsqueda
    // El evento 'keyup' se ejecuta cuando se suelta una tecla en el campo de entrada.
    // El valor ingresado por el usuario se obtiene con la función 'val()'
    // y se convierte a minúsculas con la función 'toLowerCase()'.
    $("#search-input").on("keyup", function () {
      // Se ejecuta cuando se presiona una tecla en el campo de búsqueda
      var searchTerm = $(this).val().toLowerCase(); // Obtener el término de búsqueda y convertirlo a minúsculas
      // Filtrar la tabla
      // Selecciona todas las filas de la tabla con el selector "table tbody tr".
      // La función 'each()' itera sobre cada fila de la tabla.
      $("table tbody tr").each(function () {
        // Obtengo el título, autor, e ID de cada fila
        // usando la función 'find()' que busca los elementos HTML dentro de la fila.
        // Se usa la función 'text()' para obtener el texto de la celda y
        // se convierte a minúsculas con la función 'toLowerCase()'.
        var title = $(this).find("td:eq(0)").text().toLowerCase();    
        var author = $(this).find("td:eq(1)").text().toLowerCase();       
        var publisher = $(this).find("td:eq(2)").text().toLowerCase();
        var year = $(this).find("td:eq(3)").text().toLowerCase();

        // Compruebo si el término de búsqueda está presente en alguna de las celdas de la fila
        // usando la función 'indexOf()', que devuelve la posición de la primera ocurrencia
        // del término de búsqueda en la cadena de texto, o -1 si no se encuentra.
        if (
          title.indexOf(searchTerm) !== -1 ||
          author.indexOf(searchTerm) !== -1 ||
          publisher.indexOf(searchTerm) !== -1 ||
          year.indexOf(searchTerm) !== -1
        ) {
          // Mostramos la fila si el término de búsqueda está presente en alguna de las celdas
          $(this).show();
        } else {
          // Ocultamos la fila si el término de búsqueda no está presente en ninguna de las celdas
          $(this).hide();
        }
      });
    });
  });
}

// Permite eliminar la cuenta con doble confirmación.
function eliminar_cuenta() {
  //Guardamos el valor del id introducido en la variable borrar
  const borrar = document.getElementById("id").value;
  //Mediante el metodo 'findIndex()',busco el índice del objeto que quiero eliminar.
  //Este me devuelve el índice del primer elemento en el array con el valor del id introducido y lo guarda en la variable 'borrarobj'
  const borrarobj = admin.findIndex((elem) => elem.id === borrar);

  // Doble confirm para eliminar la cuenta
  if (
    confirm("Si continua se le dará de baja de la biblioteca.") == true
  ) {
    if (confirm("¿Está seguro de querer eliminar la cuenta?") == true) {
      // Verifico si el indice es diferente a -1 y si lo es uso el metodo splice() para borrar el objeto
      if (borrarobj !== -1) {
        admin.splice(borrarobj, 1);
        //Llamada a la función 'show_principal()'
        show_principal();
      }
    }
  }
}

// Función para introducir el id de un libro que puede ser alquilado.
function alquilar() {
  // Obtengo el valor del campo 'id_alquilar'
  var id_alquilar = document.getElementById("id_alquilar").value.trim();
  // Si el campo está vacio, muestra una alerta
  if (id_alquilar === "") {
    alert("No se puede dejar el espacio en blanco");
    return; // Salgo de la función
  }
  //Si el campo tiene caracteres que NO son números alerta.
  if (isNaN(id_alquilar)) {
    alert("No se pueden introducir caracteres que no sean números");
    return; // Salgo de la función
  }
  // Utilizo parseInt para convertir el valor en un número entero
  id_alquilar = parseInt(id_alquilar);
  // Si el 'id' no se encuentra entre los valores 1 y 41 alerto.
  if (id_alquilar < 1 || id_alquilar > 41) {
    alert("El ID introducido no corresponde a ningún libro existente");
    document.getElementById("id_alquilar").value = "";
    document.getElementById("id_alquilar").focus();
    return; // Salgo de la función.
  }
  // Busco el libro que correspone al id introducido en el array 'libros_alquilar'
  for (let x = 0; x < libros_alquilar.length; x++) {
    if (id_alquilar === libros_alquilar[x].id_libro) {
      // Si el libro esta disponible para alquilar, llamo a 'show_alquilar2'.
      if (libros_alquilar[x].disponible == true) {
        show_alquilar2();
        // Aprovecho la función para introducir datos mediante innerHTML en la capa 'alquilar'
        document.getElementById("foto").src = libros_alquilar[x].portada;
        document.getElementById("argumento").innerHTML =
          libros_alquilar[x].descripcion;
        document.getElementById("nombre_libro").innerHTML =
          libros_alquilar[x].Nombre;
        document.getElementById("autor_libro").innerHTML =
          libros_alquilar[x].Autor;
        // A la variable global 'id_libro_alquilable' le paso el valor 'id_alquilar' para utilizarlo fuera de esta función.
        id_libro_alquilable = id_alquilar;
        return; // Salgo de la función.
      }
    }
  }
  // Si el libro no está disponible, alerta.
  alert(
    "El ID introducido pertenece a un libro que ya se encuentra alquilado." 
  );
  document.getElementById("id_alquilar").value = "";
  document.getElementById("id_alquilar").focus();
}

// Función que permite el alquiler de un libro cuyo ID ha sido previamente introducido
function alquilar2() {
  // Busco el usuario que corresponde en el array 'admin'.
  for (let y = 0; y < admin.length; y++) {
    if (admin[y].id === id_admin) {
      // Busco el libro que corresponde en el array 'libros_alquilar'.
      for (let x = 0; x < libros_alquilar.length; x++) {
        if (id_libro_alquilable == libros_alquilar[x].id_libro) {
          // Si el libro no esta disponible devuelvo alerta.
          if (libros_alquilar[x].disponible == false) {
            alert(
              "Lo siento, este libro no está disponible para alquilar en este momento"
            );
            return; // Salgo de la función.
          }
          // Si el libro se encuentra disponible, establezco su disponibilidad en false.
          libros_alquilar[x].disponible = false;
          // Busco la fila correspondiente al libro en la tabla y la agrego la clase 'no-disponible'
          const tabla = document.getElementById("tabla-libros");
          const fila = tabla.querySelector(
            `tr[data-id="${id_libro_alquilable}"]`
          );
          if (fila) {
            fila.classList.add("no-disponible");
          }
          // Establezco una fecha de alquiler y alerto del libro alquilado.
          const fecha_alquiler = new Date();
          libros_alquilar[x].fecha_alquiler = fecha_alquiler;
          alert(
            "El libro " +
              libros_alquilar[x].Nombre +
              " de " +
              libros_alquilar[x].Autor +
              " ha sido alquilado con éxito!"
             
          );
          // Calculo la fecha de devolución sumando 7 dias a la fecha de alquiler.
          const fecha_devolucion = new Date(fecha_alquiler.getTime() + (7 * 24 * 60 * 60 * 1000));
          // Mediante setTimeout establezco 7 dias de alquiler (en milisegundos). Pasados los 7 dias, el libro vuelve a estar disponible.
          setTimeout(() => {
            libros_alquilar[x].disponible = true;
            alert(
              "El libro " +
                libros[x].Nombre +
                " de " +
                libros[x].Autor +
                " ya está disponible para alquilar de nuevo."
            );
          }, 7 * 24 * 60 * 60 * 1000); // 7 días en milisegundos
          // Añado el libro y sus datos al array 'libros_alquilados', propiedad del array 'admin'.
          admin[y].libros_alquilados.push({
            id_libro: id_libro_alquilable,
            nombre: libros_alquilar[x].Nombre,
            autor: libros_alquilar[x].Autor,
            tiempo: fecha_devolucion, // Agrego la fecha de devolución en lugar de la fecha de alquiler.
          });
          // Llamo a la función 'show_hub'.
          show_hub();
          return; // Salgo de la función
        }
      }
    }
  }
}

// Función que permite retroceder en la capa alquilar
function retroceder_alq() {
  show_alquilar();
  document.getElementById("id_alquilar").value = "";
  document.getElementById("id_alquilar").focus();
}

// Función comprar en la que se introducen las portadas de los lirbos del array 'libros_comprar'
function comprar() {
   // Obtengo el valor del ID "scroll_imagenes" y lo almaceno en la constante 'scroll_imagenes'
  const scroll_imagenes = document.getElementById("scroll_imagenes");
  // Defino la variable 'html_code' que inicialmente está vacía
  var html_code = "";
  // Bucle para recorrer el array 'libros_comprar' 
  for (let y = 0; y < libros_comprar.length; y++) {
    // Si el libro no tiene existencias, agregamos una etiqueta 'img' al 'html_code' con la clase 'sin-existencia'
    if (libros_comprar[y].existencias === 0) {
      html_code +=
        "<img src='" +
        libros_comprar[y].portada +
        "' id = '" +
        libros_comprar[y].id_libro +
        "' onclick='mostrar_libro(" +
        y +
        ")' class='sin-existencia'> ";
    } else { // De lo contrario, agregamos la etiqueta 'img' sin la clase 'sin-existencia'
      html_code +=
        "<img src='" +
        libros_comprar[y].portada +
        "' id = '" +
        libros_comprar[y].id_libro +
        "' onclick='mostrar_libro(" +
        y +
        ")'> ";
    }
  }
  // Asignamos el 'html_code' generado al contenido HTML del elemento 'scroll_imagenes'
  scroll_imagenes.innerHTML = html_code;
}

// Función que se ocupa de mostrar los datos de la portada sobre la que hemos hecho click previamente.
// El parametro 'posicion' es el indice del libro que se va a mostrar en detalle.
// Se usa para acceder al objeto correspondiente en el array 'libros_comprar'.
function mostrar_libro(posicion) {
  const libro = libros_comprar[posicion];
  // Obtengo los elementos de los ID para mostrar los detalles del libro
  const foto2 = document.getElementById("foto2");
  const nombre_libro2 = document.getElementById("nombre_libro2");
  const autor_libro2 = document.getElementById("autor_libro2");
  const argumento2 = document.getElementById("argumento2");
  const existencias = document.getElementById("existencias");
  // Actualizo los elementos de las capas con los detalles del libro mediante innerHTML
  foto2.src = libro.portada;
  nombre_libro2.innerHTML = libro.Nombre;
  autor_libro2.innerHTML = libro.Autor;
  existencias.innerHTML = "Existencias: " + libro.existencias;
  argumento2.innerHTML = libro.descripcion;

  // Guardo el ID del libro seleccionado en la variable global
  id_libro_seleccionado = libro.id_libro;
  // Muestro la capa "comprar2"
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "block";
}

// Retroceder a comprar y fijar el cursor en el campo de texto
function retroceder_compr() {
  show_tabla_comprar();
}

// Mediante esta función finalizamos la compra del libro
function comprar2() {
  // Buscar el usuario que corresponde en el array 'admin'.
  for (let i = 0; i < admin.length; i++) {
    if (admin[i].id === id_admin) {
      // Verificar que el usuario tenga suficientes monedas para comprar el libro, si no alerto.
      if (admin[i].monedas < 75) {
        alert(
          "Lo siento, no tiene suficientes monedas para comprar este libro."
        );
        return; // Salgo de la función
      }
      // Buscar el libro que corresponde en el array 'libros_comprar'.
      for (let j = 0; j < libros_comprar.length; j++) {
        if (libros_comprar[j].id_libro === id_libro_seleccionado) {
          // Si el libro no está disponible, mostrar una alerta
          if (libros_comprar[j].existencias === 0) {
            alert("Lo siento, este libro no está disponible en este momento");
            return; // Salgo de la función
          }
          // Confirmación de que está seguro de que desea comprar el libro por 75 monedas.
          if (
            confirm("Esta seguro? Se le restarán 75 monedas de su cuenta.") == true
          ) {
          // Mostrar una alerta de que se ha adquirido el libro
          alert(
            "Ha adquirido el libro " +
              libros_comprar[j].Nombre +
              " de " +
              libros_comprar[j].Autor
          );
          // Añadir al array 'libros_comprados' el libro comprado con sus datos.
          admin[i].libros_comprados.push({
            id_libro: libros_comprar[j].id_libro,
            nombre: libros_comprar[j].Nombre,
            autor: libros_comprar[j].Autor,
          });
          // Restar una existencia al libro comprado.
          libros_comprar[j].existencias -= 1;
          // Restar 75 monedas de las que tiene el usuario.
          admin[i].monedas -= 75;
          show_hub(); // Llamo a la función 'show_hub'
          return; // Salgfo de la función
        }
        }
      }
    }
  }
}

// JQuery que controla los sliders introducidos en la pagina principal.
// Este código asegura que se ejecuta la función una vez que la página esté cargada y lista.
$(document).ready(function () {
  // Aquí se definen dos variables que controlarán el slider: 
  // Slideactual que indica qué diapositiva se está mostrando actualmente y 
  // numSlides que indica la cantidad total de diapositivas que se mostrarán en el slider.
  var Slideactual = 1;
  var numSlides = $(".slide").length;

  // Muestra la primera diapositiva al inicio del slider.
  $(".slide1").fadeIn();

  // Función para cambiar el slide
  function changeSlide() {
    // Oculto el slide actual
    $(".slide" + Slideactual).fadeOut();
    // Aumento el índice Slideactual y verifica si ha llegado al final del slider
    Slideactual++;
    // Si llega al último slide, volvemos al primero
    if (Slideactual > numSlides) {
      Slideactual = 1;
    }
    // Muestro el nuevo slide
    $(".slide" + Slideactual)
      .delay(500)
      .fadeIn();
  }

  // Estable<co el intervalo de cambio de slide
  setInterval(changeSlide, 6000);
});

//--------------Funciones para controlar las capas que se muestran-----------------
function show_principal() {
  document.getElementById("principal").style.display = "";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";
}
function show_user() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  document.getElementById("id").value = "";
  document.getElementById("pwrd").value = "";
  document.getElementById("id").focus();
}
function show_register() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  document.getElementById("reg_id").value = "";
  document.getElementById("reg_id").focus();
  document.getElementById("reg_pwrd").value = "";
  document.getElementById("reg_pwrd2").value = "";
  document.getElementById("reg_name").value = "";
  document.getElementById("reg_ape").value = "";
}
function show_hub() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";
}
function show_cuenta() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  cuenta();
}
function show_tabla_alquilar() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  consulta();
  document.getElementById("search-input").value = "";
  document.getElementById("search-input").focus();
}
function show_alquilar() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  document.getElementById("id_alquilar").value = "";
  document.getElementById("id_alquilar").focus();
}
function show_alquilar2() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "none";

  document.getElementById("id_alquilar").value = "";
  document.getElementById("id_alquilar").focus();
}
function show_tabla_comprar() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "";
  document.getElementById("comprar2").style.display = "none";
  comprar();
}
function show_comprar2() {
  document.getElementById("principal").style.display = "none";
  document.getElementById("user_hub").style.display = "none";
  document.getElementById("registro").style.display = "none";
  document.getElementById("hub").style.display = "none";
  document.getElementById("cuenta").style.display = "none";
  document.getElementById("tabla-alquiler").style.display = "none";
  document.getElementById("alquilar").style.display = "none";
  document.getElementById("alquilar2").style.display = "none";
  document.getElementById("tabla-comprar").style.display = "none";
  document.getElementById("comprar2").style.display = "";
}

// Llamada a la función show_principal
show_principal();
