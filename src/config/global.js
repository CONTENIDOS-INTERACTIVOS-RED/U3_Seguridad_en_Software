export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Pruebas de seguridad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de retrospección efectiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos fundamentales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de pruebas de penetración',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Fases de una prueba de penetración',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas utilizadas en pentesting',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Aspectos éticos y legales del pentesting',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Simulación de ataques',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos de la simulación de ataques',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de ataques más comunes a simular',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Entornos y plataformas para simular ataques',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Pongamos en práctica',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gómez Vieites, Á. (2015). Auditoría de seguridad informática: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/62464',
    },
    {
      referencia:
        'Weidman, G. (2014). Penetration Testing: A Hands–On Guide to Hacking. Internet Archive.',
      link:
        'https://archive.org/details/penetration-testing-a-hands-on-guide-to-hacking',
    },
    {
      referencia:
        'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511',
    },
    {
      referencia:
        'OWASP Foundation. (2018). ZAP 2.9 Getting Started Guide. Open Web Application Security Project.',
      link: 'https://www.zaproxy.org/pdf/ZAPGettingStartedGuide-2.9.pdf',
    },
    {
      referencia:
        'Gómez Vieites, Á. (2014). Enciclopedia de la seguridad informática: (2 ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106416',
    },
    {
      referencia:
        'Chicano Tejada, E. (2023). Auditoría de seguridad informática. IFCT0109: (2 ed.). IC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/232692',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de resultados',
      significado:
        'es el proceso mediante el cual se interpretan los hallazgos obtenidos en una prueba de penetración o simulación de ataque, para identificar fallos críticos y proponer mejoras de seguridad.',
    },
    {
      termino: 'Ataque de fuerza bruta',
      significado:
        'es una técnica de intrusión que consiste en probar múltiples combinaciones posibles de contraseñas o claves hasta encontrar la correcta para acceder a un sistema.',
    },
    {
      termino: 'Escaneo de vulnerabilidades',
      significado:
        'es la acción de analizar una aplicación o sistema en busca de debilidades conocidas, utilizando herramientas automatizadas como OWASP ZAP para identificar posibles puntos de entrada.',
    },
    {
      termino: 'Fase de explotación',
      significado:
        'es una etapa dentro de una prueba de penetración en la que el atacante intenta aprovechar vulnerabilidades descubiertas para acceder a información o sistemas de manera no autorizada.',
    },
    {
      termino: 'Fase de reconocimiento',
      significado:
        'es la etapa inicial de una prueba de penetración o simulación de ataque, en la cual se recopila información sobre el objetivo (red, servidores, dominios) sin interactuar directamente con él.',
    },
    {
      termino: 'Herramientas de pentesting',
      significado:
        'son soluciones de software especializadas que permiten ejecutar ataques simulados, escanear vulnerabilidades y analizar la seguridad de sistemas informáticos. OWASP ZAP es una de las más representativas.',
    },
    {
      termino: 'Inyección SQL',
      significado:
        'es un tipo de ataque que aprovecha una vulnerabilidad en la validación de entradas de bases de datos, permitiendo ejecutar comandos SQL maliciosos en el sistema de la víctima.',
    },
    {
      termino: 'OWASP ZAP',
      significado:
        'es una herramienta de seguridad de código abierto desarrollada por OWASP, diseñada para realizar escaneos de vulnerabilidades y análisis de seguridad en aplicaciones web de forma automatizada o manual.',
    },
    {
      termino: 'Pentesting',
      significado:
        'es una técnica profesional para evaluar la seguridad de un sistema informático mediante la simulación de ataques controlados con el fin de identificar vulnerabilidades explotables.',
    },
    {
      termino: 'Phishing simulado',
      significado:
        'es una práctica en la que se imitan ataques de suplantación de identidad para entrenar a usuarios en la identificación de correos y sitios fraudulentos, evaluando su nivel de conciencia en ciberseguridad.',
    },
    {
      termino: 'Simulación de ataques',
      significado:
        'es el proceso de ejecutar amenazas controladas contra sistemas informáticos, con el objetivo de medir su capacidad de respuesta y robustez ante intentos de intrusión reales.',
    },
    {
      termino: 'XSS (Cross-site scripting)',
      significado:
        'es un tipo de vulnerabilidad común en aplicaciones web que permite a un atacante inyectar scripts maliciosos en el navegador de otro usuario, comprometiendo datos o sesiones activas.',
    },
  ],
}
