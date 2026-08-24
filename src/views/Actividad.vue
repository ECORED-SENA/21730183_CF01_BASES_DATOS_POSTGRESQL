<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planificación e implementación de bases de datos relacionales en PostgreSQL',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar los conceptos fundamentales relacionados con los sistemas gestores de bases de datos, la arquitectura de PostgreSQL, el modelo relacional, la planificación conceptual y la implementación de bases de datos.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de un Sistema Manejador de Bases de Datos (DBMS)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Administrar archivos multimedia de un sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Gestionar la creación, consulta y mantenimiento de los datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar dispositivos físicos de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desarrollar aplicaciones de escritorio exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué motor de bases de datos se estudia en el componente formativo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'MySQL como gestor principal del curso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Oracle Database para aplicaciones empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PostgreSQL como motor de código abierto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Microsoft SQL Server para ambientes Windows.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Quién propuso el modelo relacional de bases de datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Edgar F. Codd como científico informático.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Peter Chen como investigador principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'James Gosling como creador del lenguaje Java.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dennis Ritchie como creador del lenguaje C.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué representa una tupla dentro del modelo relacional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una colección de restricciones del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una fila o registro de una tabla.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una base de datos completa instalada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una conexión entre dos servidores físicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la función del nivel físico de abstracción de datos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representar las vistas de los usuarios finales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir las relaciones entre entidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Describir cómo se almacenan físicamente los datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar formularios para las aplicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué define el nivel lógico o conceptual?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los permisos de acceso de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación física de los archivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los datos almacenados y sus relaciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las copias de seguridad automáticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué representa el nivel de visión o externo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La forma en que usuarios y aplicaciones acceden a los datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La organización física de los discos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura interna del sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El funcionamiento del proceso autovacuum.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la arquitectura implementada de forma nativa por PostgreSQL?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arquitectura Cliente-Peer distribuida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Arquitectura Monolítica Centralizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Arquitectura Cliente-Servidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Arquitectura Basada en Microcontroladores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo se denomina el proceso maestro del servidor PostgreSQL?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'postgres.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'pgAdmin.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'backend.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'initdb.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es el puerto predeterminado utilizado por PostgreSQL?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '3306 como puerto estándar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '1521 para conexiones remotas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '5432 como puerto de escucha.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '8080 para servicios web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué controlador es el estándar para aplicaciones Java?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ODBC para aplicaciones Java.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'PDO_PGSQL para proyectos Java.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'JDBC para conectividad Java.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'psycopg2 para aplicaciones Java.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Cuál es la función principal de ODBC?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear bases de datos automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar servidores Linux empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar la interoperabilidad entre aplicaciones y bases de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Optimizar exclusivamente consultas SQL.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué significa la sigla MVCC?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo Virtual de Control Concurrente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Motor Versátil para Consultas Complejas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Control de Concurrencia Multi-Versión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mecanismo Variable de Conexión Cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Según MVCC, ¿qué ocurre entre las operaciones de lectura y escritura?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Siempre se bloquean mutuamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las lecturas bloquean las escrituras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No se bloquean entre sí normalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las escrituras eliminan las lecturas activas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es la función principal del proceso autovacuum?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar versiones obsoletas y recuperar espacio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear nuevas tablas automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Configurar usuarios del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Respaldar todas las bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es la herramienta gráfica oficial de PostgreSQL?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DBeaver como herramienta oficial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DataGrip como herramienta oficial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'pgAdmin como entorno gráfico oficial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Database Master como herramienta oficial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué funcionalidad ofrece Query Tool en pgAdmin?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Respaldar discos duros completos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Administrar redes corporativas complejas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Editar y ejecutar consultas SQL.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Instalar sistemas operativos Linux.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué herramienta está desarrollada por JetBrains?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DBeaver para múltiples motores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'pgAccess para bases pequeñas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DataGrip para administración de bases de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'pgAdmin para PostgreSQL oficial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué modelo se utiliza para representar conceptualmente las reglas del negocio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Modelo Entidad-Relación (MER).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modelo Orientado a Objetos (MOO).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo de Redes Distribuidas (MRD).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modelo de Procesos Empresariales (MPE).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué característica debe cumplir una clave primaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir únicamente valores repetidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aceptar siempre valores nulos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear automáticamente una tabla nueva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar de forma única cada registro sin valores nulos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
