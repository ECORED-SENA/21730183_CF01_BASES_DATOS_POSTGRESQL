export default {
  global: {
    Name: 'Planificación e implementación de bases de datos relacionales en PostgreSQL',
    Description:
      'Este componente formativo proporciona los fundamentos teóricos, arquitectónicos y prácticos necesarios para concebir, planificar y desplegar infraestructuras de almacenamiento de datos robustas. El aprendiz asimilará desde la abstracción de reglas de negocio en modelos conceptuales, hasta la instalación física y estructuración técnica de objetos relacionales utilizando el motor de código abierto PostgreSQL.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Arquitectura y fundamentos de los sistemas de gestión de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Introducción y conceptos de sistemas manejadores de bases de datos (DBMS)',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '<i>Drivers</i> y <i>storage engines</i>',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas gráficas de gestión y administración',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planificación estratégica, licenciamiento y diseño conceptual',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Planificación: el diseño conceptual de una base de datos',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Entornos de despliegue, infraestructura y configuración inicial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ciclo de instalación del servidor e instancias locales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Despliegue en la nube y proveedores de instancias PostgreSQL',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de datos y modelado estructural físico (DDL)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de datos y estructuración física de objetos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Construcción de la base de datos mediante Lenguaje de Definición de Datos (DDL)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Restricciones de integridad y relaciones físicas',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'API',
      significado:
        'interfaz de Programación de Aplicaciones (<i>Application Programming Interface</i>). Conjunto de reglas, protocolos y herramientas que permite a diferentes aplicaciones o componentes de <i>software</i> comunicarse e intercambiar datos de forma estandarizada entre sí.',
    },
    {
      termino: 'Arquitectura cliente-servidor',
      significado:
        'modelo de diseño de <i>software</i> en el que las tareas se reparten entre los proveedores de recursos o servicios (servidores) y los demandantes (clientes). En PostgreSQL, el cliente envía solicitudes mediante scripts y el servidor las procesa de manera centralizada.',
    },
    {
      termino: '<i>Backend</i>',
      significado:
        'capa lógica y de acceso a datos de una aplicación de <i>software</i> que opera del lado del servidor. Se encarga de procesar las reglas de negocio, validar la seguridad y realizar las conexiones operativas directas hacia el motor de base de datos.',
    },
    {
      termino: 'DBaaS',
      significado:
        'base de datos como Servicio (<i>Database as a Service</i>). Modelo de computación en la nube donde el proveedor aloja, automatiza, respalda y gestiona la infraestructura física del motor de bases de datos, permitiendo al desarrollador consumirla de forma remota.',
    },
    {
      termino: '<i>Frontend</i>',
      significado:
        'capa visual, de presentación e interacción de una solución informática con la que el usuario final interactúa de manera directa (por ejemplo, formularios web o aplicaciones móviles que capturan las solicitudes del negocio).',
    },
    {
      termino: 'GUI',
      significado:
        'interfaz Gráfica de Usuario (<i>Graphical User Interface</i>). Entorno visual interactivo compuesto por botones, menús y ventanas que facilita la administración y el desarrollo de <i>software</i>. Un ejemplo estándar para la gestión de datos es la herramienta web pgAdmin.',
    },
    {
      termino: 'Instrucciones SQL',
      significado:
        'conjunto de comandos estructurados bajo el Lenguaje de Consulta Estructurado (<i>Structured Query Language</i>) utilizados para interactuar con la base de datos. Se dividen en categorías como DDL (Definición de Estructuras) y DML (Manipulación de Datos).',
    },
    {
      termino: 'NoSQL',
      significado:
        'paradigma de almacenamiento de datos no relacional diseñado para gestionar grandes volúmenes de información no estructurada o semiestructurada (como documentos JSON). PostgreSQL integra estas capacidades mediante el uso del tipo de dato nativo JSONB.',
    },
    {
      termino: 'ORDBMS',
      significado:
        'sistema de Gestión de Bases de Datos Relacionales Orientado a Objetos (<i>Object-Relational Database Management System</i>). Es un motor relacional que extiende sus capacidades tradicionales permitiendo definir tipos de datos complejos, herencia de tablas y funciones personalizadas directamente en el servidor.',
    },
    {
      termino: 'Proceso en segundo plano',
      significado:
        'tarea o hilo de ejecución del sistema operativo que se ejecuta de forma silenciosa sin necesidad de interactuar directamente con una interfaz de usuario. En PostgreSQL, procesos como <i>autovacuum</i> operan bajo este esquema para optimizar el servidor.',
    },
    {
      termino: 'Sistema operativo',
      significado:
        '<i>software</i> base de la infraestructura tecnológica que administra los recursos de hardware y proporciona servicios a las aplicaciones. Distribuciones como Linux (Ubuntu, Rocky Linux) son los entornos predilectos para alojar servidores de producción de PostgreSQL.',
    },
    {
      termino: 'Tupla',
      significado:
        'término técnico matemático derivado del modelo relacional original que representa una fila, registro o instancia única de datos almacenada dentro de una estructura bidimensional (tabla).',
    },
  ],
  referencias: [
    {
      referencia:
        'Elmasri, R., & Navathe, S. B. (2021). Fundamentals of database systems. Pearson. ',
      link: 'https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-database-systems/P200000003546/9780137502523 ',
    },
    {
      referencia:
        'Neon. (2026). Neon documentation: Separating storage and compute. ',
      link: 'https://neon.com/docs/postgres/overview ',
    },
    {
      referencia:
        'PostgreSQL Global Development Group. (2026). PostgreSQL 16 documentation: Chapter 18. Server setup and operation. ',
      link: 'https://www.postgresql.org/docs/16/runtime.html ',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., & Sudarshan, S. (2002). Fundamentos de bases de datos. McGraw-Hill. ',
      link: 'https://biblioteca.univalle.edu.ni/files/original/01aebde3cc06dce33f2538aa2724eb2541cb9473.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
