<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 En la actualidad, los datos constituyen el activo estratégico más valioso de las organizaciones. Sin embargo, su aprovechamiento exige sistemas capaces de garantizar la seguridad, la integridad y la disponibilidad de la información. En este contexto, este componente formativo introduce al estudio de los #[b Sistemas Manejadores de Bases de Datos (DBMS, por sus siglas en inglés, #[i Database Management Systems])] mediante PostgreSQL, un motor de bases de datos de código abierto, orientado a objetos y ampliamente adoptado en la industria por su estabilidad, potencia y alta escalabilidad.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El propósito de este componente consiste en desarrollar las competencias necesarias para transformar las necesidades del sector productivo en estructuras digitales eficientes. Para ello, se aborda la ingeniería de datos desde la etapa de planificación, iniciando con la comprensión de la arquitectura interna de PostgreSQL y sus esquemas de licenciamiento. Posteriormente, el proceso avanza hacia el diseño conceptual de la información y la estructuración técnica de repositorios relacionales orientados a entornos corporativos.
      .row.align-items-center.mb-0
        .col-xl
          .box___style_1(data-aos="flip-up")
            p.mb-0 Con el fin de alcanzar este propósito, el proceso de formación adopta un enfoque eminentemente práctico que permite desarrollar planes de trabajo organizados y alineados con escenarios reales. Mediante el uso de interfaces gráficas como #[b pgAdmin] y entornos de ejecución locales o en la nube, se elaborarán scripts utilizando el #[b Lenguaje de Definición de Datos (DDL, por sus siglas en inglés, #[i Data Definition Language])]. Este proceso permitirá construir tablas, definir relaciones e implementar restricciones de integridad que garanticen la consistencia, confiabilidad y solidez de las soluciones informáticas desarrolladas.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 185px").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
