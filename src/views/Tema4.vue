<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Tipos de datos y modelado estructural físico (DDL)
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.fit___box_4(data-aos="flip-up")
            p.mb-0 La transición del diseño conceptual hacia la implementación física constituye una de las etapas más importantes en el desarrollo de una base de datos relacional. La eficiencia, el rendimiento y la integridad de una solución informática dependen, en gran medida, de la correcta selección de los tipos de datos y de la definición de restricciones que garanticen la consistencia de la información almacenada.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img1.svg', alt='' style="width: 185px").m-auto
      .bg___color_1
        .px-5
          #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.1 Tipos de datos y estructuración física de objetos
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.color___2(data-aos="flip-up")
                p.mb-0 La selección del tipo de dato para cada columna constituye una decisión técnica que influye directamente en el consumo de almacenamiento, el rendimiento de las consultas y la integridad de la información. En bases de datos que administran grandes volúmenes de registros, una elección inadecuada incrementa el tamaño de los archivos, reduce la eficiencia de la memoria caché y afecta el tiempo de respuesta de las aplicaciones.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt='' style="width: 400px").m-auto
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Clasificación de tipos de datos básicos: numéricos, caracteres, temporales y booleanos
          p.mb-5 PostgreSQL incorpora un amplio conjunto de tipos de datos que permiten almacenar la información de acuerdo con sus características y optimizar el uso de los recursos del sistema. Los principales grupos de tipos de datos se describen a continuación:
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Categorías de tipos de datos en PostgreSQL
          .tabla-a(data-aos="zoom-in").mb-5
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Categoría
                  th.ajuste-border-tabla.texto-left Tipos de datos
                  th.texto-left Características y uso
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Numéricos
                  td.ajuste-border-tabla.texto-left #[b SMALLINT, INTEGER, BIGINT, NUMERIC, DECIMAL, REAL, DOUBLE PRECISION]
                  td.texto-left Los tipos enteros almacenan valores sin decimales utilizando 2, 4 u 8 bytes según su capacidad. #[b NUMERIC] y #[b DECIMAL] son apropiados para operaciones financieras que requieren precisión exacta, mientras que #[b REAL] y #[b DOUBLE PRECISION] se utilizan en cálculos científicos donde se admite representación en coma flotante.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Caracteres
                  td.ajuste-border-tabla.texto-left #[b CHAR(n)], #[b VARCHAR(n)] y #[b TEXT]
                  td.texto-left #[b CHAR(n)] almacena cadenas de longitud fija; #[b VARCHAR(n)] admite longitud variable con un límite definido, y #[b TEXT] permite almacenar cadenas de longitud variable sin límite práctico, siendo apropiado para textos extensos.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Temporales
                  td.ajuste-border-tabla.texto-left #[b DATE], #[b TIME], #[b TIMESTAMP] y #[b TIMESTAMP WITH TIME ZONE (TIMESTAMPTZ)]
                  td.texto-left Permiten almacenar fechas, horas o ambas simultáneamente. #[b TIMESTAMPTZ] resulta especialmente útil en aplicaciones distribuidas, ya que conserva la referencia de la zona horaria y facilita la sincronización entre diferentes ubicaciones geográficas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Booleanos
                  td.ajuste-border-tabla.texto-left #[b BOOLEAN]
                  td.texto-left Almacena valores lógicos mediante los estados #[b TRUE], #[b FALSE] y #[b NULL], este último cuando el dato es desconocido o no se ha registrado.
      p.mb-5 La selección adecuada del tipo de dato contribuye a optimizar el almacenamiento, mejorar el rendimiento de las consultas y garantizar que cada atributo represente correctamente la información del dominio de negocio.
      .titles___box_tercer_nivel.mb-5.fit___litles(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Estructuras de almacenamiento (JSONB y ARRAY) y comportamiento técnico ante valores predeterminados (DEFAULT) o nulos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_3(data-aos="fade-right")
            p.mb-0 Además de los tipos de datos tradicionales, PostgreSQL incorpora estructuras especializadas que amplían las posibilidades de modelado dentro de una base de datos relacional. El tipo #[b JSONB] permite almacenar documentos en formato JSON utilizando una representación binaria optimizada, lo que facilita la indexación de sus atributos y mejora el rendimiento de las búsquedas. Esta característica permite combinar información estructurada y semiestructurada dentro de una misma base de datos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img3.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 Por su parte, el tipo #[b ARRAY] permite almacenar colecciones de valores del mismo tipo en una única columna. Esta funcionalidad resulta útil cuando se requiere representar listas simples sin necesidad de crear tablas adicionales. Durante el diseño físico de las tablas también es necesario definir el comportamiento de las columnas cuando una instrucción de inserción no proporciona un valor o cuando la información es desconocida.
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in").mb-5
        .row.align-items-center.justify-content-center(titulo="JSONB").ajuste-cajaAcordion.ajuste-vineta
          .col-xl-9.mb-4.mb-lg-0
            p.mb-0 Almacena documentos JSON en formato binario optimizado, permitiendo indexar atributos internos y realizar consultas eficientes sobre datos semiestructurados.
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/t4/img4.png', alt='' style="width: 120px").m-auto
        .row.align-items-center.justify-content-center(titulo="ARRAY").ajuste-cajaAcordion.ajuste-vineta
          .col-xl-9.mb-4.mb-lg-0
            p.mb-0 Permite almacenar múltiples valores homogéneos dentro de una misma columna, reduciendo la necesidad de crear estructuras adicionales para representar listas simples.
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 120px").m-auto
        .row.align-items-center.justify-content-center(titulo="DEFAULT").ajuste-cajaAcordion.ajuste-vineta
          .col-xl-9.mb-4.mb-lg-0
            p.mb-0 Asigna automáticamente un valor predeterminado cuando una instrucción #[b INSERT] no especifica un dato para una columna. Puede utilizar valores constantes o funciones del sistema, como #[b CURRENT_TIMESTAMP] o #[b nextval()].
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/t4/img6.png', alt='' style="width: 120px").m-auto
        .row.align-items-center.justify-content-center(titulo="NULL").ajuste-cajaAcordion.ajuste-vineta
          .col-xl-9.mb-4.mb-lg-0
            p.mb-0 Representa la ausencia de un valor o la existencia de un dato desconocido. De manera predeterminada, las columnas aceptan valores nulos, salvo que se restrinja este comportamiento mediante la condición #[b NOT NULL].
          .col-xl-3
            figure
              img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 120px").m-auto
      p.mb-0 La correcta combinación de tipos de datos, estructuras de almacenamiento y restricciones permite construir modelos físicos más eficientes, facilita la integridad de la información y optimiza el comportamiento de la base de datos en entornos de alta demanda.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Construcción de la base de datos mediante Lenguaje de Definición de Datos (DDL)
      .bg___color_1
        .px-5
          .row.align-items-center.mb-5
            .col-xl
              .box___style_1.color___2.fit___box_4(data-aos="flip-up")
                p.mb-0 Una vez definida la estructura conceptual de la base de datos y seleccionados los tipos de datos apropiados, el siguiente paso consiste en implementar el modelo físico mediante instrucciones SQL. Esta etapa permite materializar el diseño elaborado durante la planificación y crear los objetos que conformarán la base de datos.
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t4/img8.png', alt='' style="width: 400px").m-auto
          p.mb-5 El #[b Lenguaje de Definición de Datos (DDL, por sus siglas en inglés, #[i Data Definition Language])] corresponde al conjunto de instrucciones del estándar SQL destinadas a crear, modificar y eliminar objetos dentro del catálogo del sistema. A través de estas sentencias es posible construir la estructura lógica del servidor y administrar la evolución del esquema de la base de datos.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
            .col
              h3 Sentencias fundamentales de creación, modificación y eliminación estructural (CREATE, ALTER y DROP)
          p.mb-5 El ciclo de vida de los objetos que conforman una base de datos se administra mediante un conjunto reducido de instrucciones DDL, cada una con una función específica dentro del proceso de construcción y mantenimiento del esquema. Las principales sentencias se describen a continuación:
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img9.png', alt="" style="max-width: 190px").m-auto
                  h4.text-center CREATE
                  p.mb-0 Crea y registra nuevos objetos dentro del catálogo del sistema, como bases de datos, tablas, vistas, índices o secuencias. Durante la creación de una tabla se definen su nombre, las columnas, los tipos de datos y las restricciones iniciales.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .card___icon.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t4/img10.png', alt="" style="max-width: 190px").m-auto
                  h4.text-center ALTER
                  p.mb-0 Modifica la estructura de un objeto existente sin eliminar la información almacenada. Permite agregar o eliminar columnas, cambiar tipos de datos, renombrar objetos e incorporar nuevas restricciones de integridad conforme evolucionan los requerimientos del sistema.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .card___icon.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t4/img11.png', alt="" style="max-width: 190px").m-auto
                  h4.text-center DROP
                  p.mb-0 Elimina de forma definitiva un objeto del catálogo del sistema, junto con la información asociada cuando corresponde. Su utilización requiere especial precaución, ya que la operación puede resultar irreversible si no existe un mecanismo de respaldo.
          p.mb-5 El uso adecuado de estas sentencias permite construir, mantener y adaptar la estructura de una base de datos durante todo el ciclo de vida de una aplicación, garantizando que el modelo físico evolucione de acuerdo con las necesidades de la organización.
          .row.justify-content-center.mb-5
            .col-xl-7
              .code-window(data-aos="zoom-in")
                .window-header
                  span.dot.red
                  span.dot.yellow
                  span.dot.green
                pre.ajuste___pre_1
                  code(v-pre).
                    -- Ejemplo estructurado de sintaxis DDL básica en PostgreSQL 
                    CREATE TABLE ejemplo_sena (
                      id_registro SERIAL,
                      codigo_modulo VARCHAR(15) NOT NULL,
                      fecha_creacion TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
                    );
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right").fit___litles_1
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Configuración del cotejamiento (#[i Collation]) y codificación de caracteres para la internacionalización de datos
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2.mb-3(data-aos="flip-up")
            p.mb-0 Durante la creación de una base de datos mediante la instrucción #[b CREATE DATABASE] o al definir columnas de tipo texto, es necesario configurar parámetros que determinan la forma en que PostgreSQL almacena, interpreta y ordena la información. Entre los más importantes se encuentran la #[b codificación de caracteres] (#[i character encoding]) y el #[b cotejamiento] (#[i collation]), los cuales garantizan el correcto funcionamiento de aplicaciones desarrolladas para diferentes idiomas y regiones.
          p.mb-0 La codificación de caracteres recomendada para los sistemas modernos es #[b UTF-8], ya que permite representar correctamente caracteres, símbolos y alfabetos utilizados en distintos idiomas, favoreciendo la interoperabilidad y la internacionalización de las aplicaciones.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img12.png', alt='' style="width: 400px").m-auto
      p.mb-5 Por su parte, el cotejamiento define las reglas que PostgreSQL emplea para comparar y ordenar cadenas de texto. Su configuración influye directamente en el comportamiento de las búsquedas, los filtros y los resultados de las consultas que involucran información textual. Las características de estos parámetros se describen a continuación:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon_1.h-100.color___3.text-white
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img13.svg', alt="" style="max-width: 90px").m-auto
              h4 Codificación de caracteres (#[i character encoding])
              p.mb-0 Define la forma en que los caracteres se almacenan y representan dentro de la base de datos. La codificación #[b UTF-8] es la opción recomendada, ya que admite caracteres de múltiples idiomas y garantiza la correcta representación de símbolos especiales.
        .col-xl-6.col-md-9(data-aos="zoom-in")
          .card___icon_1.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img14.svg', alt="" style="max-width: 90px").m-auto
              h4 Cotejamiento (#[i collation])
              p.mb-0 Establece las reglas utilizadas para ordenar y comparar cadenas de texto. Determina, por ejemplo, si las comparaciones distinguen entre letras mayúsculas y minúsculas y cómo se procesan caracteres propios de determinados idiomas, como las vocales con tilde o la letra #[b ñ] en español.
      p.mb-0 La configuración adecuada de estos parámetros evita inconsistencias en las consultas, garantiza resultados de ordenamiento acordes con el idioma de la aplicación y contribuye al desarrollo de soluciones informáticas preparadas para operar en entornos internacionales.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Restricciones de integridad y relaciones físicas
      .row.align-items-center.mb-5
        .col-xl
          .box___style_1.color___2(data-aos="flip-up")
            p.mb-0 Una base de datos relacional no constituye únicamente un repositorio de información, sino un sistema capaz de garantizar la calidad y consistencia de los datos almacenados. Para lograrlo, PostgreSQL incorpora #[b restricciones de integridad] (#[i constraints]), las cuales establecen reglas que el motor verifica automáticamente durante las operaciones de inserción y actualización. Estas restricciones impiden el almacenamiento de información incompleta, duplicada o inconsistente, fortaleciendo la confiabilidad de las aplicaciones y preservando la integridad del modelo de datos.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img15.png', alt='' style="width: 400px").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Implementación de restricciones a nivel de tabla y columna (NOT NULL, UNIQUE y CHECK)
      p.mb-5 PostgreSQL permite incorporar reglas de validación directamente en la definición de las tablas mediante restricciones que controlan el comportamiento de las columnas y garantizan el cumplimiento de las reglas del negocio (Elmasri y Navathe, 2021). Las restricciones más utilizadas se describen a continuación:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img16.png', alt="" style="max-width: 190px").m-auto
              h4.text-center NOT NULL
              p.mb-0 Impide que una columna almacene valores nulos. Obliga a proporcionar un dato válido durante las operaciones de inserción o actualización.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img17.png', alt="" style="max-width: 190px").m-auto
              h4.text-center UNIQUE
              p.mb-0 Garantiza que los valores de una columna, o de una combinación de columnas, sean únicos dentro de la tabla. Se utiliza para evitar la duplicidad de datos, como números de identificación, direcciones de correo electrónico o códigos de productos.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .card___icon.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img18.png', alt="" style="max-width: 190px").m-auto
              h4.text-center CHECK
              p.mb-0 Define una condición lógica que cada registro debe cumplir antes de almacenarse. Permite validar reglas del negocio, por ejemplo, verificar que un precio sea mayor que cero o que una edad pertenezca a un rango determinado.
      p.mb-5 La incorporación de estas restricciones fortalece la integridad de los datos desde el propio motor de bases de datos, reduciendo la posibilidad de almacenar información que incumpla las reglas definidas por la organización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right").fit___litles_1.fit___litles_2
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img3.png" style="max-width: 60px").m-auto
        .col
          h3 Materialización de relaciones lógicas mediante claves primarias (PRIMARY KEY) y claves foráneas (FOREIGN KEY)
      p.mb-5 La capacidad de relacionar información almacenada en diferentes tablas constituye uno de los principios fundamentales del modelo relacional. Este proceso se basa en el concepto de #[b integridad referencial], mediante el cual PostgreSQL garantiza que las relaciones entre los datos permanezcan consistentes durante todo el ciclo de vida de la base de datos. Para establecer estas relaciones se utilizan dos tipos de restricciones fundamentales:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .card___icon.h-100.color___3.text-white
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img19.png', alt="" style="max-width: 190px").m-auto
              h4.text-center PRIMARY KEY
              p.mb-0 Identifica de forma única cada registro de una tabla. Esta restricción combina las propiedades #[b NOT NULL] y #[b UNIQUE], garantizando que cada fila posea un identificador exclusivo que sirva como referencia para otras tablas.
        .col-xl-6.col-md-9(data-aos="zoom-in")
          .card___icon.h-100.color___4
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img20.png', alt="" style="max-width: 190px").m-auto
              h4.text-center FOREIGN KEY
              p.mb-0 Establece una relación entre una tabla y otra mediante una columna cuyos valores deben existir previamente como #[b PRIMARY KEY] en la tabla relacionada. Este mecanismo impide registrar información asociada a entidades inexistentes y preserva la integridad referencial del sistema.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_3(data-aos="fade-right")
            p.mb-0 Además de validar la existencia de los registros relacionados, las claves foráneas permiten definir acciones automáticas que mantienen la consistencia de la información cuando se modifican o eliminan registros de la tabla principal. Entre las opciones más utilizadas se encuentran #[b ON DELETE CASCADE] y #[b ON UPDATE CASCADE], las cuales propagan automáticamente los cambios hacia las tablas relacionadas cuando así lo requiere el diseño de la base de datos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img21.jpg', alt='' style="width: 300px").m-auto
        .col-xl.fit___bottom
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t1/img17.svg', alt='' style="width: 70px")
          p.mb-0 La implementación adecuada de restricciones de integridad y relaciones físicas garantiza que la información almacenada conserve su consistencia, reduzca la posibilidad de errores y represente fielmente las reglas del negocio definidas durante el diseño conceptual.

</template>

<script>
export default {
  name: 'Tema4',
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
