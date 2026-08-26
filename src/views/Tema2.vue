<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Planificación estratégica, licenciamiento y diseño conceptual
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_2(data-aos="flip-up")
            p.mb-0 El éxito en la construcción de una solución informática no depende únicamente de la capacidad para desarrollar código, sino también de la rigurosidad con la que se planifica la estructura lógica del sistema y se analiza su viabilidad técnica, legal y económica. Antes de implementar una base de datos en un servidor, es indispensable abstraer con precisión las reglas del negocio y representarlas mediante un modelo independiente de la tecnología.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.svg', alt='' style="width: 185px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Planificación: el diseño conceptual de una base de datos
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.mb-3(data-aos="flip-up")
            p.mb-0 La fase conceptual constituye #[b el fundamento analítico] de todo proyecto de gestión de la información. Modificar la estructura de una base de datos cuando el sistema ya se encuentra en producción representa uno de los reprocesos más complejos y costosos, debido a los riesgos asociados con la migración de datos y la pérdida de consistencia.
          p.mb-0 Por esta razón, #[b la planificación estratégica] requiere el empleo de modelos estandarizados que faciliten la comunicación entre los responsables del negocio y el equipo de desarrollo, permitiendo representar de manera clara los elementos que conformarán la solución tecnológica.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 400px").m-auto
      .bg___color_1
        .px-5
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Técnicas de abstracción de reglas de negocio: el Modelo Entidad-Relación (MER)
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_3.fit___box_5(data-aos="fade-right")
                p.mb-0 El diseño conceptual constituye un proceso de traducción mediante el cual la información obtenida de una organización se transforma en un modelo gráfico formal y libre de ambigüedades. El#[b  Modelo Entidad-Relación (MER)], propuesto por #[b Peter Chen] en 1976, continúa siendo uno de los estándares más utilizados para representar la estructura semántica de los datos (Silberschatz, Korth y Sudarshan, 2002).
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img3.jpg', alt='' style="width: 300px").m-auto
            .col-xl.fit___bottom
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
              p.mb-0 Las técnicas de abstracción permiten identificar únicamente aquellos elementos que poseen relevancia para el #[b sistema de información], descartando aspectos del entorno que no aportan valor al modelo conceptual. Este proceso facilita representar de forma precisa la estructura de la organización antes de iniciar el diseño de la base de datos.
          p.mb-5 La identificación de las reglas de negocio suele apoyarse en un análisis lingüístico de entrevistas, documentos y requerimientos. En términos generales, los #[b sustantivos] se convierten en entidades, mientras que los #[b verbos] representan las relaciones entre ellas. Una interpretación incorrecta de estas reglas puede afectar la integridad referencial del sistema y generar inconsistencias durante las etapas posteriores del desarrollo.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Determinación de entidades, atributos, claves primarias y especificación de reglas de cardinalidad
          p.mb-5 El #[b Modelo Entidad-Relación (MER)] se compone de varios elementos, cada uno con una función específica dentro de la representación conceptual de los datos:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Entidades
                      p.mb-0 Representan objetos del mundo real con existencia propia dentro de la organización, ya sean tangibles, como un vehículo o un aprendiz, o intangibles, como una matrícula o una venta (Elmasri y Navathe, 2021).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Atributos
                      p.mb-0 Corresponden a las propiedades o características que describen una entidad. Pueden clasificarse como simples, compuestos o multivalorados.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Clave primaria (#[i Primary Key] - PK)
                      p.mb-0 Es el atributo, o conjunto mínimo de atributos, que identifica de forma única cada registro de una entidad. Debe cumplir dos condiciones fundamentales: no admitir valores nulos (#[b NOT NULL]) y garantizar la unicidad (#[b UNIQUE]).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 400px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Reglas de cardinalidad
                      p.mb-0 Definen la cantidad de entidades que pueden asociarse entre sí dentro de una relación. Se clasifican en relaciones de #[b uno a uno (1:1)], #[b uno a muchos (1)] y #[b muchos a muchos (N)] (Silberschatz, Korth y Sudarshan, 2002). Estas reglas orientan posteriormente la definición de claves foráneas en el modelo relacional.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 400px").m-auto
      p.mb-5 La correcta identificación de estos componentes permite construir un modelo conceptual consistente y facilita la transición hacia las etapas de diseño lógico y físico de la base de datos. Como aplicación de estos conceptos, se presenta un caso correspondiente a la fase de planificación de un sistema de gestión de recaudo para una empresa de transporte:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img8.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Abstracción conceptual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analizan las operaciones de la empresa y se identifican dos entidades principales: #[b VEHÍCULO] (Placa, Modelo y Capacidad) y #[b CONDUCTOR] (Cédula, Nombre y Licencia).
            .row(titulo="Identificación de la clave primaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se establece el atributo #[b Placa] como clave primaria de la entidad #[b VEHÍCULO], ya que identifica de manera única cada vehículo de la flota y no admite valores nulos.
            .row(titulo="Definición de las cardinalidades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El análisis de las reglas de negocio determina que un vehículo puede ser conducido por diferentes conductores y que un conductor puede operar distintos vehículos. Esta situación corresponde a una relación #[b muchos a muchos (N)], por lo que será necesaria una entidad asociativa durante el diseño físico de la base de datos.
            .row(titulo="Validación de la viabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La organización aprueba la implementación de PostgreSQL al verificar que su modelo de licenciamiento permite desplegar el sistema en los 180 terminales de la flota sin generar costos adicionales por licencias de conexión, favoreciendo la sostenibilidad económica del proyecto.
      p.mb-5 La planificación conceptual constituye una etapa determinante dentro del ciclo de desarrollo de una base de datos, ya que permite representar correctamente las reglas del negocio, reducir reprocesos durante la implementación y garantizar que el modelo físico responda a las necesidades reales de la organización.
      .row.justify-content-center.mb-0
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Modelos E-R normalizado
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img9.png', alt='Diagrama entidad-relación con las tablas Vehículo, Asignación_Viaje y Conductor, que incluye identificadores, atributos principales y relaciones entre vehículo, viaje y conductor, además de un elemento gráfico sobre escalabilidad y redundancia reducida.').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
