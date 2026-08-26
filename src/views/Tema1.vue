<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Arquitectura y fundamentos de los sistemas de gestión de bases de datos
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_1(data-aos="flip-up")
            p.mb-0 La comprensión de los fundamentos estructurales de un motor de bases de datos constituye el primer paso para garantizar el éxito y la viabilidad de cualquier solución informática en el sector productivo. Esta unidad temática permite comprender los conceptos arquitectónicos esenciales, los niveles de abstracción de la información y el funcionamiento interno de #[b PostgreSQL].
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 185px").m-auto
      p.mb-5 Asimismo, proporciona las bases para entender cómo se gestionan las conexiones concurrentes, cómo opera el almacenamiento físico de los datos y de qué manera las herramientas gráficas optimizan las tareas de administración bajo un enfoque técnico, seguro y orientado a la alta disponibilidad.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Introducción y conceptos de sistemas manejadores de bases de datos (DBMS)
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___1(data-aos="flip-up")
            p.mb-0 Los sistemas de información contemporáneos demandan mecanismos que superen la simple persistencia de archivos dispersos en un disco duro. En el entorno corporativo actual, la integridad de los procesos operativos depende de la capacidad para centralizar, estandarizar y proteger el acceso a los activos lógicos de la organización. Para responder a este desafío, surgen arquitecturas de #[i software] especializadas que abstraen la complejidad del almacenamiento físico y proporcionan interfaces de programación seguras y predecibles.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 400px").m-auto
      p.mb-5 Un #[b Sistema Manejador de Bases de Datos (DBMS, por sus siglas en inglés, #[i Database Management System])] representa una infraestructura crítica que unifica las operaciones de creación, consulta, actualización y mantenimiento de la información. La implementación de esta tecnología permite mitigar los riesgos asociados con los accesos simultáneos y la corrupción de archivos, además de fortalecer la administración centralizada de los datos.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Definición, evolución e importancia de los DBMS en el sector productivo
      p.mb-5 A continuación, se presenta un pódcast  sobre el Sistema Manejador de Bases de Datos (DBMS), sus principales funciones y su importancia en la gestión eficiente, segura y confiable de la información dentro de las organizaciones modernas:
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img4.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Sistema Manejador de Bases de Datos (DBMS)"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img5.png" style="max-width: 510px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 El modelo relacional: tablas, tuplas, atributos y la abstracción de datos
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_2(data-aos="flip-up")
            p.mb-0 El modelo relacional, propuesto por el científico informático #[b Edgar F. Codd], se fundamenta en la teoría matemática de conjuntos y la lógica de predicados. Este paradigma organiza la información en estructuras bidimensionales denominadas #[b tablas] o #[b relaciones]. Cada tabla está conformada por un conjunto de tuplas (filas o registros), que representan instancias individuales de una entidad, y por #[b atributos] (columnas o campos), que describen las propiedades o características de cada una de ellas.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img6.svg', alt='' style="width: 185px").m-auto
      p.mb-5 Uno de los principios fundamentales del modelo relacional es la #[b abstracción de datos], la cual permite separar la representación física de la información de su estructura lógica y de la forma en que los usuarios interactúan con ella. Gracias a este principio, el sistema divide sus responsabilidades en diferentes niveles, facilitando el mantenimiento, la seguridad y la independencia entre los componentes de la base de datos. La abstracción de datos comprende tres niveles claramente diferenciados, cuyas características se describen a continuación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img7.png', alt="" ).m-auto
              h4.text-center Nivel físico
              .box___card_sinbordes_p
                p.mb-0.text-center Describe cómo se almacenan los datos en los discos, los bloques de memoria y las estructuras de archivos de bajo nivel. Corresponde a la organización física de la información.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
              h4.text-center Nivel lógico o conceptual
              .box___card_sinbordes_p
                p.mb-0.text-center Define qué datos se almacenan en la base de datos y cuáles son las relaciones existentes entre ellos. En este nivel se establecen las tablas, las restricciones de integridad y la estructura lógica del sistema.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img9.png', alt="" ).m-auto
              h4.text-center Nivel de visión o externo
              .box___card_sinbordes_p
                p.mb-0.text-center Representa las diferentes formas en que los usuarios o las aplicaciones acceden a la información. Permite abstraer parte de la base de datos con fines de simplificación o seguridad, por ejemplo, mediante el uso de vistas.
      p.mb-5 La separación entre estos niveles constituye uno de los principios fundamentales de los sistemas manejadores de bases de datos modernos, ya que proporciona independencia entre el almacenamiento físico, la organización lógica de la información y las necesidades de acceso de los usuarios y las aplicaciones.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Arquitectura Cliente-Servidor nativa y el ciclo de vida del proceso central postgres
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1(data-aos="flip-up")
            p.mb-0 PostgreSQL se define como un Sistema de Gestión de Bases de Datos Relacionales Orientado a Objetos (#[b ORDBMS], por sus siglas en inglés, #[i Object-Relational Database Management System]) que implementa, de forma nativa, una arquitectura Cliente-Servidor. En este modelo, el sistema se divide en dos componentes que interactúan mediante un protocolo de comunicación de red: el #[b cliente], encargado de la interfaz de usuario y del envío de solicitudes, y el #[b servidor], responsable del procesamiento, almacenamiento y validación de las instrucciones SQL.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img10.svg', alt='' style="width: 185px").m-auto
      p.mb-5 El núcleo operativo del servidor corresponde a un proceso maestro del sistema operativo denominado #[b postgres]. Este proceso administra la inicialización del servidor, coordina las conexiones de los clientes y supervisa la creación de procesos independientes para atender cada sesión. Su funcionamiento sigue un ciclo de vida claramente definido:
      .bg___color_1
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img11.png", alt="" style="width: 350px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Inicialización y escucha").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Al iniciar el servicio, el proceso maestro postgres se carga en memoria, asigna los segmentos de memoria compartida y entra en estado de escucha sobre un puerto de red específico, que de forma predeterminada corresponde al #[b 5432].
                .row(titulo="Creación de procesos (<i>forking</i>)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Cuando una aplicación cliente, como un sistema de facturación o una interfaz gráfica, solicita una conexión, el proceso maestro valida las credenciales de acceso. Si la autenticación es correcta, ejecuta una operación de fork, mediante la cual crea un proceso hijo independiente (#[i backend process]) dedicado exclusivamente a atender esa conexión.
                .row(titulo="Aislamiento operativo").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 La existencia de procesos independientes garantiza que, si uno de ellos presenta una falla ocasionada por una consulta incorrecta o un error de memoria, los demás procesos y el proceso maestro continúen funcionando sin interrupciones. Esta arquitectura constituye una de las principales razones de la estabilidad y confiabilidad de PostgreSQL en entornos empresariales.
                .row(titulo="Finalización de la conexión").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Cuando el cliente finaliza la sesión o la conexión expira por inactividad, el proceso hijo asociado termina su ejecución de manera segura y libera los recursos de memoria utilizados durante la sesión.
          p.mb-0 Esta arquitectura basada en procesos independientes permite administrar múltiples conexiones concurrentes de forma segura, optimizar el uso de los recursos del sistema y fortalecer la disponibilidad del servicio, características que han consolidado a PostgreSQL como uno de los motores de bases de datos más utilizados en aplicaciones corporativas.
          Separador
          #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.2 #[i Drivers] y #[i storage engines]
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.fit___box_2(data-aos="flip-up")
                p.mb-0 La eficiencia de una solución tecnológica depende de la solidez de los mecanismos de comunicación entre las aplicaciones y la base de datos, así como de la capacidad del motor para gestionar el almacenamiento de la información. Un sistema difícilmente puede considerarse de alto rendimiento si sus capas de comunicación generan latencia o si los mecanismos de persistencia afectan la disponibilidad durante periodos de alta demanda.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.svg', alt='' style="width: 185px").m-auto
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Controladores de conectividad estandarizada corporativa: JDBC, ODBC y alternativas modernas
      .box___style_2.mb-5
        p.mb-0 Para que una aplicación desarrollada en cualquier lenguaje de programación pueda conectarse a un servidor de bases de datos, ejecutar instrucciones del #[b Lenguaje de Definición de Datos (DDL, por sus siglas en inglés, #[i Data Definition Language])] o del #[b Lenguaje de Manipulación de Datos (DML, por sus siglas en inglés, #[i Data Manipulation Language])], y procesar los resultados obtenidos, requiere un componente de #[i software] denominado controlador o driver.
      p.mb-5 Los controladores proporcionan #[b Interfaces de Programación de Aplicaciones (API, por sus siglas en inglés, #[i Application Programming Interface])], las cuales estandarizan la comunicación entre las aplicaciones y el motor de base de datos, independientemente de la tecnología utilizada para desarrollar el sistema. Entre los controladores más utilizados en entornos corporativos se encuentran los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 JDBC (#[i Java Database Connectivity])
                  p.mb-0 Es el controlador estándar del ecosistema Java. Permite establecer conexiones con PostgreSQL, ejecutar consultas, utilizar sentencias preparadas (#[i Prepared Statements]) para reducir el riesgo de ataques por inyección SQL y administrar de forma eficiente grupos de conexiones (#[i connection pools]) en servidores de aplicaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.svg', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 ODBC (#[i Open Database Connectivity])
                  p.mb-0 Constituye un estándar ampliamente utilizado para facilitar la interoperabilidad entre aplicaciones y motores de bases de datos. Es frecuente en entornos Windows y en aplicaciones desarrolladas en C++ y C#, además de herramientas de análisis de datos y suites ofimáticas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Controladores nativos modernos
                  p.mb-0 Diversos lenguajes incorporan bibliotecas optimizadas que se comunican directamente con el protocolo nativo de PostgreSQL (#[i Frontend/Backend Protocol] v3.0). Entre ellas se encuentran #[b PDO_PGSQL] para PHP, #[b pg] para Node.js (JavaScript y TypeScript) y bibliotecas como #[b psycopg2] o #[b asyncpg] para Python, ampliamente utilizadas en desarrollo web, ciencia de datos y aplicaciones de alto rendimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La disponibilidad de múltiples controladores permite integrar PostgreSQL con diferentes plataformas tecnológicas sin modificar el funcionamiento interno del motor de bases de datos, favoreciendo la interoperabilidad, la portabilidad y el desarrollo de aplicaciones empresariales escalables.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Arquitectura de almacenamiento unificada e impacto del mecanismo MVCC
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_3(data-aos="fade-right")
            p.mb-0 A diferencia de otros sistemas gestores que delegan el almacenamiento físico en motores intercambiables con comportamientos diferentes, PostgreSQL implementa una arquitectura de almacenamiento unificada y altamente integrada. Uno de los pilares que garantiza la consistencia de los datos y el rendimiento de las transacciones es el #[b Control de Concurrencia Multi-Versión (MVCC, por sus siglas en inglés, #[i Multi-Version Concurrency Control])].
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img16.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 En los sistemas tradicionales, cuando una transacción ejecuta una operación de actualización o eliminación sobre un registro, #[b el motor bloquea físicamente la fila o incluso] la tabla para impedir que otros usuarios accedan a datos inconsistentes mientras finaliza la operación. Este enfoque reduce el rendimiento en entornos con alta concurrencia debido a la espera generada entre las transacciones.
      p.mb-5 PostgreSQL resuelve esta limitación mediante el mecanismo MVCC, basado en un principio fundamental: #[b las operaciones de lectura no bloquean las operaciones de escritura y las operaciones de escritura no bloquean las operaciones de lectura]. Gracias a este enfoque, múltiples usuarios pueden consultar y modificar la información de manera simultánea sin afectar significativamente el desempeño del sistema. El funcionamiento de MVCC se fundamenta en varios mecanismos que trabajan de forma coordinada para garantizar la consistencia y el acceso concurrente a los datos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aislamiento mediante instantáneas (#[i snapshots])
                  p.mb-0 Cuando una transacción inicia una consulta, PostgreSQL genera una instantánea lógica del estado de la base de datos en ese momento. De esta forma, la consulta trabaja sobre una versión consistente de la información, aunque otras transacciones continúen realizando modificaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Creación de versiones de tuplas
                  p.mb-0 Cuando una instrucción #[b UPDATE] modifica una fila, PostgreSQL no sobrescribe el registro original. En su lugar, marca la tupla existente como obsoleta y crea una nueva versión con los datos actualizados, registrando la información necesaria para controlar su visibilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Visibilidad condicional
                  p.mb-0 Mientras la transacción permanece activa, los demás usuarios continúan accediendo a la versión anterior de la fila. La nueva versión solo estará disponible cuando la transacción confirme los cambios mediante la instrucción #[b COMMIT].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proceso #[i autovacuum]
                  p.mb-0 Las versiones antiguas permanecen temporalmente almacenadas en disco. El proceso automático #[b #[i autovacuum]] identifica estos registros obsoletos, recupera el espacio que ocupan para reutilizarlo en futuras operaciones y actualiza las estadísticas utilizadas por el optimizador de consultas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 500px").m-auto
      .bg___color_2
        .px-5
          p.mb-5 La secuencia de funcionamiento del mecanismo MVCC puede resumirse en cuatro etapas consecutivas:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 1. Generación de la instantánea (#[i snapshot])
                    p.mb-0 La transacción inicia y obtiene una instantánea consistente de los datos existentes en ese momento.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 130px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img23.png', alt='' style="width: 130px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 2. Creación de nuevas versiones
                    p.mb-0 Cuando se modifica una fila, la versión anterior se marca como obsoleta y se genera una nueva versión con la información actualizada.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Paso 3. Control de visibilidad
                    p.mb-0 Las demás transacciones continúan accediendo a la versión anterior hasta que la transacción que realizó la modificación ejecute #[b COMMIT].
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 130px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 130px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Paso 4. Ejecución de #[i autovacuum]
                    p.mb-0 El proceso automático elimina las versiones obsoletas desde el punto de vista lógico, recupera espacio de almacenamiento y mantiene actualizadas las estadísticas del sistema.
          p.mb-0 La arquitectura basada en MVCC constituye uno de los principales factores que diferencian a PostgreSQL de otros sistemas gestores de bases de datos, ya que permite mantener altos niveles de concurrencia, reducir los bloqueos entre transacciones y optimizar el rendimiento en aplicaciones empresariales con múltiples usuarios accediendo simultáneamente a la información.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3	Herramientas gráficas de gestión y administración
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_4(data-aos="flip-up")
            p.mb-0 La administración eficiente de un servidor corporativo requiere un equilibrio entre el uso de la línea de comandos y las herramientas de interfaz gráfica. Mientras la consola proporciona un control detallado y facilita la automatización de tareas administrativas, las aplicaciones gráficas agilizan el diseño de estructuras, el diagnóstico del sistema y el análisis del rendimiento mediante entornos interactivos.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img26.svg', alt='' style="width: 185px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Administración visual avanzada con el entorno web centralizado pgAdmin
      p.mb-5 El dominio de la interfaz de línea de comandos #[b (psql)] constituye una competencia fundamental para la administración de PostgreSQL debido a su rapidez y capacidad de automatización. No obstante, las herramientas con #[b Interfaz Gráfica de Usuario (GUI, por sus siglas en inglés, #[i Graphical User Interface])] incrementan la productividad durante las etapas de diseño, depuración, monitoreo y administración de la base de datos. La herramienta oficial desarrollada para PostgreSQL es #[b pgAdmin], un entorno de administración que integra funciones de desarrollo, monitoreo y gestión mediante una interfaz gráfica intuitiva.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Entorno gráfico de pgAdmin
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/img27.png', alt='Captura de pantalla de la interfaz de pgAdmin 4 con el explorador de objetos de PostgreSQL, un editor de consultas SQL con una instrucción para consultar ventas recientes, un panel de resultados en formato de tabla con registros de ventas y un panel lateral con gráficos de sesiones activas y estadísticas de la base de datos. ').m-auto
      p.mb-5 pgAdmin está desarrollado sobre una #[b arquitectura web moderna], por lo que puede ejecutarse como aplicación de escritorio o implementarse de manera centralizada en un servidor para permitir el acceso controlado de múltiples administradores y desarrolladores a través de un navegador web. Entre las funcionalidades más relevantes de esta herramienta se encuentran las siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img28.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Herramienta de consultas (<i>Query Tool</i>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona un editor de código SQL con autocompletado, resaltado de sintaxis y opciones de formateo automático para facilitar la escritura y ejecución de consultas.
            .row(titulo="Análisis del plan de ejecución").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite interpretar la estrategia utilizada por el optimizador de PostgreSQL para ejecutar una consulta, identificando operaciones como escaneos secuenciales, uso de índices y diferentes tipos de uniones, lo que facilita la optimización del rendimiento.
            .row(titulo="Panel de rendimiento (<i>Dashboard</i>)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta indicadores en tiempo real sobre sesiones activas, transacciones por segundo, utilización de memoria caché, acceso a disco y estado de los bloqueos existentes en el servidor.
            .row(titulo="Asistentes para la administración de objetos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilitan la creación y administración de usuarios, permisos, restricciones, esquemas y copias de seguridad mediante asistentes gráficos que reducen la necesidad de escribir instrucciones SQL complejas.
      p.mb-5 Gracias a estas funcionalidades, pgAdmin constituye una herramienta ampliamente utilizada para administrar PostgreSQL tanto en entornos de desarrollo como en ambientes de producción.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Utilidades de escritorio y herramientas alternativas ligeras para entornos de desarrollo
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.fit___box_2(data-aos="flip-up")
            p.mb-0 El ecosistema de PostgreSQL ha contado históricamente con diversas herramientas de administración. Entre ellas se encuentran #[b pgAccess y Database Master], aplicaciones de escritorio diseñadas para administrar esquemas y manipular datos en equipos con recursos de hardware limitados. Aunque actualmente su uso ha disminuido frente a herramientas más modernas, su estudio permite comprender la evolución de las interfaces de administración y la interacción con el catálogo interno del sistema.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img29.svg', alt='' style="width: 185px").m-auto
      p.mb-5 En los entornos actuales de desarrollo, #[b los equipos de ingeniería de #[i software]] suelen complementar o sustituir el uso de pgAdmin por herramientas compatibles con múltiples #[b motores de bases de datos]. Estas aplicaciones proporcionan una experiencia unificada para administrar diferentes plataformas desde un mismo entorno de trabajo. Las principales alternativas utilizadas en proyectos de desarrollo se describen a continuación:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes_1.h-100.text-white.color___3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
              h4 DBeaver
              .box___card_sinbordes_p_1
                p.mb-0 Herramienta de código abierto basada en Eclipse que utiliza #[b JDBC (#[i Java Database Connectivity])] para conectarse a diferentes motores de bases de datos. Permite administrar instancias locales y remotas mediante una interfaz altamente configurable.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes_1.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
              h4 DataGrip
              .box___card_sinbordes_p_1
                p.mb-0 Entorno desarrollado por JetBrains orientado a profesionales de bases de datos. Incorpora autocompletado inteligente, análisis estático de consultas, navegación entre objetos y herramientas avanzadas para el desarrollo y mantenimiento de bases de datos relacionales.
      p.mb-0 La disponibilidad de diferentes herramientas de administración permite seleccionar la alternativa más adecuada de acuerdo con las características del proyecto, las necesidades del equipo de desarrollo y el entorno tecnológico en el que se implementará la solución.

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
