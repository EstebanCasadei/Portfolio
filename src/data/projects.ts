export interface Technology {
  name: string;
  icon?: string;
}

export interface ProjectSection {
  num: string;
  label: string;
  title: string;
  body: string;
  image?: string;
}

export interface Project {
  id: number;
  name: string;
  number: string;
  image: string;
  technologies: Technology[];
  description: string;
  url: string;
  repo?: string;
  client: string;
  role: string;
  year: string;
  overview: string;
  sections: ProjectSection[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 4,
    name: "TechToJob",
    number: "01",
    image: "/img/projects/techtojob/cover.webp",
    technologies: [
      { name: "Next.js", icon: "/icons/Next.svg" },
      { name: "GSAP", icon: "/icons/GSAP.svg" },
      { name: "TypeScript", icon: "/icons/Ts.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind.svg" },
    ],
    description:
      "Mi propuesta para la <strong class='text-secondary font-nohemi-bold'>landing oficial de TechToJob</strong>. Diseñé y desarrollé la página, que fue elegida <strong class='text-secondary font-nohemi-bold'>ganadora del torneo</strong> de la comunidad.",
    url: "https://tech-to-job-estebancasadei.vercel.app/",
    repo: "https://github.com/EstebanCasadei/TechToJobLanding",
    client: "TechToJob · Comunidad tech",
    role: "Diseño y desarrollo frontend",
    year: "2026",
    overview:
      "TechToJob abrió un torneo para crear su <strong class='text-secondary font-nohemi-bold'>landing oficial</strong> y participé con este diseño. <strong class='text-secondary font-nohemi-bold'>La propuesta ganó</strong>. Me encargué del <strong class='text-secondary font-nohemi-bold'>diseño y del desarrollo</strong> de una página que explica cómo funciona la comunidad y lleva a los visitantes a su Discord, donde pueden compartir proyectos y conocer a otras personas del sector.",
    sections: [
      {
        num: "01",
        label: "Contexto",
        title: "La propuesta para el torneo",
        body: "La comunidad reúne a personas que buscan su <strong class='text-secondary font-nohemi-bold'>primera oportunidad en tecnología</strong> y a empresas que quieren conocer cómo trabajan antes de contratarlas. Para el torneo de TechToJob, tenía que llevar esa idea a una web y explicar qué podía hacer alguien al entrar al <strong class='text-secondary font-nohemi-bold'>Discord</strong>.",
      },
      {
        num: "02",
        label: "Desafío",
        title: "Explicar cómo sumarse",
        body: "Había bastante para contar entre los perfiles, los proyectos, los torneos y el networking. Organicé la página para que cada sección explicara una forma de participar, usando <strong class='text-secondary font-nohemi-bold'>tarjetas de conversación</strong> y anotaciones que recuerdan al trabajo compartido dentro de Discord. Los <strong class='text-secondary font-nohemi-bold'>accesos a la comunidad</strong> acompañan todo el recorrido.",
        image: "/img/projects/techtojob/process.webp",
      },
      {
        num: "03",
        label: "Solución",
        title: "El diseño y la implementación",
        body: "Usé <strong class='text-secondary font-nohemi-bold'>Next.js</strong> y <strong class='text-secondary font-nohemi-bold'>React</strong>. Trabajé con <strong class='text-secondary font-nohemi-bold'>TypeScript</strong> y <strong class='text-secondary font-nohemi-bold'>Tailwind</strong> para llevar el diseño a código, con secciones para quienes buscan trabajo y para las empresas, animaciones con <strong class='text-secondary font-nohemi-bold'>GSAP</strong> y un muro de avatares que se puede mover. La página se genera de <strong class='text-secondary font-nohemi-bold'>forma estática</strong> y carga las interacciones de manera diferida. Las noticias tienen su propio archivo de contenido.",
      },
      {
        num: "04",
        label: "Resultado",
        title: "La landing elegida por TechToJob",
        body: "Mi propuesta <strong class='text-secondary font-nohemi-bold'>ganó el torneo</strong> y quedó como <strong class='text-secondary font-nohemi-bold'>landing oficial de TechToJob</strong>. Desde la página se puede conocer la comunidad, ver cómo participar y entrar al Discord. También reúne los enlaces a sus canales públicos, con el diseño que presenté para el concurso.",
        image: "/img/projects/techtojob/tournament.webp",
      },
    ],
    gallery: ["/img/projects/techtojob/talent.webp", "/img/projects/techtojob/networking.webp"],
  },
  {
    id: 1,
    name: "LocalTTS",
    number: "02",
    image: "/img/projects/localtts/cover.webp",
    technologies: [
      { name: "React", icon: "/icons/React.svg" },
      { name: "TypeScript", icon: "/icons/Ts.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind.svg" },
      { name: "Firebase", icon: "/icons/Firebase.svg" },
    ],
    description:
      "Una aplicación para <strong class='text-secondary font-nohemi-bold'>escuchar tus documentos</strong> con voces en español. Genera el audio en el navegador y guarda tus archivos en una <strong class='text-secondary font-nohemi-bold'>biblioteca personal</strong>.",
    url: "https://local-tts-ad27a.web.app/",
    repo: "https://github.com/EstebanCasadei/Local-TTS",
    client: "Proyecto propio · Con Iván Medina",
    role: "Diseño propio y desarrollo compartido",
    year: "2026",
    overview:
      "LocalTTS nació de una propuesta que presentamos al hackatón <strong class='text-secondary font-nohemi-bold'>CoderCup AI</strong> para escuchar documentos PDF y TXT con <strong class='text-secondary font-nohemi-bold'>voces generadas en el navegador</strong>. <strong class='text-secondary font-nohemi-bold'>El diseño es mío</strong>. Compartí el desarrollo con <strong class='text-secondary font-nohemi-bold'>Iván Medina</strong> y, después del hackatón, decidimos seguir trabajando en la aplicación por nuestra cuenta.",
    sections: [
      {
        num: "01",
        label: "Contexto",
        title: "Después de CoderCup AI",
        body: "La idea era poder escuchar documentos y textos largos con <strong class='text-secondary font-nohemi-bold'>voces en español</strong>. No llegamos a la final de CoderCup AI, pero Iván y yo le veíamos potencial al proyecto y decidimos <strong class='text-secondary font-nohemi-bold'>continuarlo por nuestra cuenta</strong>, con la intención de hacer una herramienta que se pudiera usar todos los días.",
      },
      {
        num: "02",
        label: "Desafío",
        title: "Del documento a la escucha",
        body: "Para escuchar un archivo, la aplicación tiene que extraer su texto y prepararlo antes de generar la voz. Trabajé en una interfaz donde puedas <strong class='text-secondary font-nohemi-bold'>seguir la lectura</strong>, <strong class='text-secondary font-nohemi-bold'>manejar la reproducción</strong> y volver al documento que dejaste pendiente, mientras el contenido largo se procesa <strong class='text-secondary font-nohemi-bold'>por fragmentos</strong>.",
        image: "/img/projects/localtts/reader.webp",
      },
      {
        num: "03",
        label: "Solución",
        title: "Cómo funciona LocalTTS",
        body: "La aplicación está hecha con <strong class='text-secondary font-nohemi-bold'>React</strong> y <strong class='text-secondary font-nohemi-bold'>TypeScript</strong>. <strong class='text-secondary font-nohemi-bold'>Piper TTS</strong> genera la voz en un <strong class='text-secondary font-nohemi-bold'>Web Worker</strong>, dentro del dispositivo, a partir del texto que extraemos y limpiamos de los archivos PDF y TXT. Los documentos se <strong class='text-secondary font-nohemi-bold'>guardan localmente</strong>. Podés descargar voces, dejar marcadores y ajustar la velocidad de lectura, además de usar un temporizador. <strong class='text-secondary font-nohemi-bold'>Firebase</strong> permite iniciar sesión y sincronizar de forma opcional, mientras la voz se sigue generando en el navegador.",
      },
      {
        num: "04",
        label: "Resultado",
        title: "La aplicación de hoy",
        body: "LocalTTS está publicada en <strong class='text-secondary font-nohemi-bold'>Firebase Hosting</strong> y ya tiene una biblioteca donde podés guardar documentos, elegir una voz en español y <strong class='text-secondary font-nohemi-bold'>retomar la escucha</strong> desde el lector. Seguimos trabajando en la aplicación. El almacenamiento local y la <strong class='text-secondary font-nohemi-bold'>sincronización opcional</strong> forman parte de la versión actual.",
        image: "/img/projects/localtts/voices.webp",
      },
    ],
    gallery: ["/img/projects/localtts/library.webp", "/img/projects/localtts/controls.webp"],
  },
  {
    id: 2,
    name: "Los 3 Tanos",
    number: "03",
    image: "/img/projects/los3tanos/cover.webp",
    technologies: [
      { name: "Astro", icon: "/icons/Astro.svg" },
      { name: "Supabase", icon: "/icons/Supabase.svg" },
      { name: "Three.js", icon: "/icons/ThreeJS.svg" },
      { name: "SASS", icon: "/icons/SASS.svg" },
    ],
    description:
      "La web de Los 3 Tanos, una pizzería de Las Toscas. Podés consultar la <strong class='text-secondary font-nohemi-bold'>carta</strong>, recorrer el salón en <strong class='text-secondary font-nohemi-bold'>360°</strong> y pedir una reserva por WhatsApp.",
    url: "https://www.los3tanos.uy/",
    client: "Los 3 Tanos Pizzería",
    role: "Diseño y desarrollo web",
    year: "2026",
    overview:
      "Para Los 3 Tanos, en Las Toscas, diseñé y desarrollé una web donde podés consultar la <strong class='text-secondary font-nohemi-bold'>carta y los precios</strong> antes de ir, ver los horarios y contactar al restaurante. También podés recorrer el <strong class='text-secondary font-nohemi-bold'>salón en 360°</strong> y elegir una mesa al preparar tu <strong class='text-secondary font-nohemi-bold'>solicitud de reserva</strong>.",
    sections: [
      {
        num: "01",
        label: "Contexto",
        title: "Qué necesitaba el restaurante",
        body: "La web tenía que reunir la información para <strong class='text-secondary font-nohemi-bold'>planificar una visita</strong> a Los 3 Tanos, desde la carta y los horarios hasta la ubicación y las reservas. Busqué que el diseño conservara el <strong class='text-secondary font-nohemi-bold'>carácter del local</strong> y que alguien que todavía no hubiera ido pudiera conocer sus espacios.",
      },
      {
        num: "02",
        label: "Desafío",
        title: "Ordenar la carta",
        body: "La carta tiene muchas categorías. Sumé un <strong class='text-secondary font-nohemi-bold'>buscador y filtros</strong> para encontrar los platos sin tener que recorrer el listado entero, manteniendo los <strong class='text-secondary font-nohemi-bold'>nombres y los precios</strong> a la vista. Desde el sitio también podés pasar al recorrido del salón y preparar una consulta de reserva.",
        image: "/img/projects/los3tanos/menu.webp",
      },
      {
        num: "03",
        label: "Solución",
        title: "La carta y las reservas",
        body: "Desarrollé el sitio con <strong class='text-secondary font-nohemi-bold'>Astro</strong> y <strong class='text-secondary font-nohemi-bold'>Sass</strong>. La carta y los horarios vienen de <strong class='text-secondary font-nohemi-bold'>Supabase</strong>. Para recorrer las distintas zonas del salón y seleccionar una mesa usé <strong class='text-secondary font-nohemi-bold'>Pannellum</strong>, y trabajé los efectos visuales con <strong class='text-secondary font-nohemi-bold'>Three.js</strong>. El formulario toma la fecha, el horario, la cantidad de comensales y tu nombre para preparar el mensaje con el que vas a contactar al restaurante. La reserva se coordina por <strong class='text-secondary font-nohemi-bold'>WhatsApp</strong>.",
      },
      {
        num: "04",
        label: "Resultado",
        title: "El sitio en uso",
        body: "La web está publicada. Desde ahí podés consultar los <strong class='text-secondary font-nohemi-bold'>platos y sus precios</strong>, ver cuándo abre Los 3 Tanos y conocer el salón antes de pedir una reserva. Dejé a mano los enlaces a <strong class='text-secondary font-nohemi-bold'>WhatsApp</strong> y al teléfono, junto con las redes del restaurante y su <strong class='text-secondary font-nohemi-bold'>ubicación</strong>.",
        image: "/img/projects/los3tanos/tour.webp",
      },
    ],
    gallery: ["/img/projects/los3tanos/reservations.webp", "/img/projects/los3tanos/interior.webp"],
  },
  {
    id: 3,
    name: "SugarBliss",
    number: "04",
    image: "/img/projects/sugarbliss/cover.webp",
    technologies: [
      { name: "Astro", icon: "/icons/Astro.svg" },
      { name: "Tailwind", icon: "/icons/Tailwind.svg" },
      { name: "Supabase", icon: "/icons/Supabase.svg" },
      { name: "JavaScript", icon: "/icons/JS.svg" },
    ],
    description:
      "La web de <strong class='text-secondary font-nohemi-bold'>SugarBliss by Flor</strong>, con sus tortas y postres organizados por categorías. Cada producto tiene su ficha y también podés consultar por un <strong class='text-secondary font-nohemi-bold'>pedido personalizado</strong>.",
    url: "https://sugarbliss-byflor.com/",
    client: "SugarBliss by Flor",
    role: "Diseño y desarrollo web",
    year: "2026",
    overview:
      "SugarBliss by Flor necesitaba una web para mostrar su <strong class='text-secondary font-nohemi-bold'>pastelería artesanal</strong> y recibir consultas. Me encargué del <strong class='text-secondary font-nohemi-bold'>diseño y del desarrollo</strong>, con un catálogo donde podés ver <strong class='text-secondary font-nohemi-bold'>fotos, tamaños y precios</strong> antes de pedir. Cada producto tiene su ficha, y hay un espacio para contar una idea si buscás algo personalizado.",
    sections: [
      {
        num: "01",
        label: "Contexto",
        title: "Un lugar para mostrar los postres",
        body: "El emprendimiento necesitaba un <strong class='text-secondary font-nohemi-bold'>sitio propio</strong> donde reunir sus creaciones y la información para encargar un postre. Quería que se reconociera el <strong class='text-secondary font-nohemi-bold'>cuidado artesanal</strong> de SugarBliss al mirar la página, y que desde el catálogo fuera fácil consultar por el producto que te gustara.",
      },
      {
        num: "02",
        label: "Desafío",
        title: "El diseño del catálogo",
        body: "Trabajé con tonos rosados, tipografía y detalles gráficos propios para darle forma a la <strong class='text-secondary font-nohemi-bold'>identidad del sitio</strong>. <strong class='text-secondary font-nohemi-bold'>Las fotos</strong> ocupan buena parte del catálogo. La búsqueda y los <strong class='text-secondary font-nohemi-bold'>filtros por categoría</strong> permiten encontrar una torta o un postre entre las distintas opciones sin tener que abrir cada ficha.",
        image: "/img/projects/sugarbliss/catalog.webp",
      },
      {
        num: "03",
        label: "Solución",
        title: "Consultar por un producto",
        body: "Lo desarrollé con <strong class='text-secondary font-nohemi-bold'>Astro</strong> y <strong class='text-secondary font-nohemi-bold'>Tailwind</strong>. Los productos vienen de <strong class='text-secondary font-nohemi-bold'>Supabase</strong>. En cada ficha se pueden ver las imágenes y la descripción, consultar tamaños y precios y abrir <strong class='text-secondary font-nohemi-bold'>WhatsApp</strong> con el nombre del producto ya incluido en el mensaje. Para los pedidos personalizados y otras consultas, los formularios envían por correo lo que escribís usando <strong class='text-secondary font-nohemi-bold'>EmailJS</strong>.",
      },
      {
        num: "04",
        label: "Resultado",
        title: "La web publicada",
        body: "El sitio ya está publicado. En el inicio aparecen los productos destacados de SugarBliss, y desde ahí podés abrir el <strong class='text-secondary font-nohemi-bold'>catálogo completo</strong> para comparar las <strong class='text-secondary font-nohemi-bold'>opciones y sus tamaños</strong> antes de consultar por una torta. ¿Tenés otra idea? Hay una página para contar qué te gustaría encargar y consultar por una <strong class='text-secondary font-nohemi-bold'>creación personalizada</strong>. El diseño acompaña la marca en cada ficha y también cuando pasás a las páginas de contacto.",
        image: "/img/projects/sugarbliss/product.webp",
      },
    ],
    gallery: ["/img/projects/sugarbliss/custom.webp", "/img/projects/sugarbliss/contact.webp"],
  },
];

export function getProject(id: string | number) {
  return projects.find((p) => p.id === Number(id));
}

export function getNextProject(id: string | number) {
  const idx = projects.findIndex((p) => p.id === Number(id));
  return projects[(idx + 1) % projects.length];
}
