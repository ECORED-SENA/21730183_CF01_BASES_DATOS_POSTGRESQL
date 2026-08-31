<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Entornos de despliegue, infraestructura y configuración inicial
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_2(data-aos="flip-up")
            p.mb-0 Una vez consolidados los fundamentos arquitectónicos y el modelo conceptual de los datos, el proceso de formación avanza hacia la implementación de la infraestructura tecnológica. #[b La instalación y configuración adecuada] de un servidor de bases de datos constituye una competencia esencial, ya que un entorno incorrectamente parametrizado puede afectar el rendimiento, la disponibilidad y la seguridad de toda la solución informática.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img1.svg', alt='' style="width: 185px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Ciclo de instalación del servidor e instancias locales
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.mb-3(data-aos="flip-up")
            p.mb-0 El despliegue local de un motor de bases de datos constituye el punto de partida habitual en los procesos de desarrollo de #[i software]. Este entorno proporciona un control completo sobre #[b la infraestructura], facilita las actividades de depuración, pruebas unitarias y simulación de cargas de trabajo, además de eliminar la dependencia de redes externas durante las etapas iniciales del desarrollo.
          p.mb-0 Sin embargo, una instalación destinada a #[b ambientes corporativos] requiere una planificación más rigurosa que una instalación predeterminada. La preparación del sistema operativo, la configuración del almacenamiento y la administración de los servicios representan factores determinantes para garantizar la estabilidad y el desempeño del servidor.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 400px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Preparación de entornos operativos, dependencias del sistema y sistemas de archivos optimizados
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_1(data-aos="fade-right")
            p.mb-0 La instalación de PostgreSQL en un entorno empresarial requiere una evaluación previa del sistema operativo. Entre las plataformas más utilizadas se encuentran distribuciones #[i Linux] como #[b #[i Rocky Linux]], #[b #[i Ubuntu Server]] y #[b #[i Red Hat Enterprise Linux]].
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img3.jpg', alt='' style="width: 300px").m-auto
        .col-xl
          p.mb-0 Antes de iniciar el proceso de instalación mediante el gestor de paquetes correspondiente, es recomendable preparar el entorno de ejecución. Una de las prácticas más importantes consiste en crear un usuario exclusivo del sistema operativo, habitualmente denominado #[b #[i postgres]], evitando que el servicio se ejecute con privilegios del usuario #[b root], ya que esta configuración representa un riesgo para la seguridad del sistema.
      p.mb-5 La infraestructura de almacenamiento también influye de manera directa en el rendimiento del servidor. La selección del sistema de archivos determina, entre otros aspectos, la velocidad de escritura del mecanismo #[b #[i Write-Ahead Logging (WAL)]] y la capacidad de recuperación ante fallos inesperados. Las principales recomendaciones para la infraestructura de almacenamiento se resumen a continuación:
      .bg___color_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img4.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Sistema operativo
                  p.mb-0.text-center Utilizar distribuciones #[i Linux] orientadas a servidores, como #[i Rocky Linux], #[i Ubuntu Server] o #[i Red Hat Enterprise Linux], por su estabilidad y soporte empresarial.
            .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img5.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Usuario del servicio
                  p.mb-0.text-center Crear un usuario dedicado denominado #[b #[i postgres]] para ejecutar el motor de bases de datos sin privilegios de superusuario.
            .col-xl-3.col-md-9.mt-4.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Sistema de archivos
                  p.mb-0.text-center Emplear sistemas de archivos como #[b EXT4] o #[b XFS], configurados para optimizar las operaciones de escritura síncrona.
            .col-xl-3.col-md-9.mt-4(data-aos="zoom-in")
              .card___icon_out.h-100
                .row.justify-content-center
                  .col-7.mb-3
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Infraestructura de almacenamiento
                  p.mb-0.text-center Implementar arreglos #[b RAID 10] combinados con unidades #[b SSD] o #[b NVMe] cuando se requiera un alto número de operaciones de entrada y salida por segundo (#[b IOPS]).
          p.mb-5 La adecuada preparación del entorno operativo constituye la base para obtener un servidor estable, seguro y con un desempeño acorde con las necesidades de aplicaciones empresariales.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Inicialización del clúster de base de datos (#[i initdb]) y gestión del servicio en entornos locales
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.mb-3(data-aos="flip-up")
                p.mb-0 Una vez instaladas las dependencias necesarias, el siguiente paso consiste en inicializar el clúster de bases de datos mediante la utilidad #[b initdb], incluida de forma nativa en PostgreSQL. Este procedimiento también puede ejecutarse mediante asistentes o scripts incorporados en los instaladores de cada plataforma.
              p.mb-0 Durante la inicialización se crea la estructura básica del servidor, incluyendo el catálogo del sistema, los directorios internos de almacenamiento como base, #[b pg_wal] y #[b pg_tblspc], el usuario administrador inicial (#[b postgres]) y la configuración de la codificación de caracteres utilizada por las bases de datos del clúster.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 400px").m-auto
          p.mb-5 Posteriormente, el control del servicio se delega al administrador de servicios del sistema operativo, como #[b systemd] en #[i Linux], desde donde es posible iniciar, detener, reiniciar y verificar el estado del servidor. Los comandos esenciales para administrar el ciclo de vida del servicio se presentan en el siguiente recuadro: 
          .row.justify-content-center.mb-5
            .col-xl-10
              .code-window(data-aos="zoom-in")
                .window-header
                  span.dot.red
                  span.dot.yellow
                  span.dot.green
                pre.ajuste___pre_1
                  code(v-pre).
                    # Comandos estándar para la administración del servicio PostgreSQL
                    systemctl start postgresql    # Inicializa el motor y el proceso maestro de escucha
                    systemctl stop postgresql     # Detiene el servicio de forma segura liberando memoria
                    systemctl restart postgresql  # Aplica un reinicio completo del clúster de datos
                    systemctl status postgresql   # Audita el estado actual y los últimos eventos del servicio
          p.mb-5 El dominio de estas utilidades facilita la administración cotidiana del servidor y constituye una competencia fundamental para la operación de entornos de desarrollo y producción.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Instalación en Windows
      p.mb-5 Además de los entornos #[i Linux], PostgreSQL dispone de instaladores oficiales para el sistema operativo Windows, los cuales automatizan gran parte del proceso de instalación y configuración inicial. A continuación, se presenta un recurso audiovisual que explica paso a paso el procedimiento para instalar PostgreSQL en Windows, realizar la configuración inicial y ejecutar los primeros comandos mediante la consola #[b psql].
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Instalación y primeros comandos en psql
      p.mb-0 Este procedimiento permite disponer de un entorno local completamente funcional para iniciar el desarrollo, la administración y las pruebas de bases de datos utilizando PostgreSQL.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Despliegue en la nube y proveedores de instancias PostgreSQL
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.mb-3(data-aos="flip-up")
            p.mb-0 La computación en la nube ha transformado la forma en que las organizaciones implementan y administran su infraestructura tecnológica. Aunque el conocimiento de los entornos locales continúa siendo indispensable, gran parte de las soluciones actuales se desarrollan sobre arquitecturas administradas conocidas como #[b Bases de Datos como Servicio (DBaaS, por sus siglas en inglés, #[i Database as a Service])].
          p.mb-0 Este modelo traslada al proveedor la administración del hardware, las actualizaciones del sistema operativo, los mecanismos de respaldo y otras tareas de infraestructura, permitiendo que los equipos de desarrollo concentren sus esfuerzos en el diseño del modelo de datos, el desarrollo de aplicaciones y la optimización de consultas.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img9.png', alt='' style="width: 400px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Proveedores en la nube
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_2(data-aos="flip-up")
            p.mb-0 Diversos proveedores ofrecen planes gratuitos que facilitan el aprendizaje, la experimentación y el desarrollo de prototipos sin necesidad de adquirir infraestructura propia. Estas plataformas permiten crear instancias de PostgreSQL administradas y acceder a ellas mediante conexiones remotas seguras. Entre las alternativas más utilizadas se encuentran las siguientes: 
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img10.svg', alt='' style="width: 185px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img11.png', alt="" style="max-width: 500px").m-auto
              h4.text-center Neon
              p.mb-0 Implementa una arquitectura #[i serverless] para PostgreSQL que separa los recursos de cómputo del almacenamiento. Su plan gratuito permite crear instancias de manera rápida y suspende automáticamente los recursos de procesamiento cuando no existe actividad, optimizando el consumo de infraestructura.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img12.png', alt="" style="max-width: 500px").m-auto
              h4.text-center Supabase
              p.mb-0 Plataforma de desarrollo construida sobre PostgreSQL que, además del motor de base de datos, incorpora servicios de autenticación de usuarios, almacenamiento de archivos y generación automática de API a partir del modelo de datos.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img13.png', alt="" style="max-width: 500px").m-auto
              h4.text-center Render
              p.mb-0 Plataforma en la nube que permite desplegar bases de datos PostgreSQL administradas junto con aplicaciones web. Sus planes gratuitos resultan adecuados para proyectos de formación, pruebas de integración y validación de aplicaciones conectadas a bases de datos relacionales.
      p.mb-5 La disponibilidad de estos servicios facilita el desarrollo de proyectos sin necesidad de administrar servidores físicos, reduciendo el tiempo requerido para poner en funcionamiento una infraestructura de bases de datos.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right").fit___litles_1
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Configuración de cadenas de conexión remotas, parámetros de latencia y herramientas de acceso seguro
      p.mb-5 Para establecer comunicación con una base de datos alojada en la nube, es necesario utilizar una #[b cadena de conexión] (#[i connection string]) o una URL de conexión. Este parámetro reúne la información necesaria para que el controlador de la aplicación local identifique y establezca comunicación con el servidor remoto.
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_4(data-aos="flip-up").text-white
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t3/img14.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Un ejemplo de cadena de conexión es el siguiente:
                h5.mb-0 postgresql://usuario:contraseña@host-remoto.cloud.com:5432/nombre_base_datos?sslmode=require
      .bg___color_3
        .px-5
          p.mb-5 Cada uno de los elementos de la cadena de conexión cumple una función específica:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Componentes de una cadena de conexión a PostgreSQL
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Componente
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold usuario
                      td.texto-left Nombre de la cuenta con permisos para acceder a la base de datos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold contraseña
                      td.texto-left Credencial utilizada para autenticar al usuario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold host-remoto.cloud.com
                      td.texto-left Dirección del servidor donde se encuentra alojada la instancia de PostgreSQL.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5432
                      td.texto-left Puerto de comunicación utilizado por PostgreSQL de forma predeterminada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold nombre_base_datos
                      td.texto-left Base de datos a la que se establecerá la conexión.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold sslmode=require
                      td.texto-left Obliga a utilizar una conexión cifrada mediante los protocolos #[b SSL/TLS], garantizando la protección de la información durante su transmisión.
          p.mb-5 Además de la configuración de la conexión, el despliegue en la nube incorpora aspectos relacionados con el rendimiento de la comunicación. Uno de ellos es la #[b latencia de red], entendida como el tiempo que tarda la información en desplazarse desde el cliente hasta el servidor remoto y regresar con la respuesta correspondiente.
          .row.align-items-center.mb-0
            .col-xl
              .box___style_1.mb-3(data-aos="flip-up")
                p.mb-0 Por razones de seguridad, los proveedores de servicios administrados requieren el uso de conexiones cifradas mediante #[b SSL/TLS], con el fin de proteger la información transmitida a través de Internet. Para administrar estas conexiones es habitual utilizar herramientas como #[b pgAdmin] o #[b DBeaver], las cuales permiten registrar las credenciales de acceso, validar la comunicación con el servidor y supervisar el comportamiento de las consultas en entornos remotos.
              p.mb-0 La comprensión de estos elementos permite establecer conexiones seguras y eficientes con instancias de PostgreSQL alojadas en la nube, favoreciendo el desarrollo de aplicaciones distribuidas y la administración de bases de datos en infraestructuras modernas.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 400px").m-auto
          
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
