export default {
  tema2: {
    tema: '2. Simulación de ataques',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre simulación de ataques y herramientas de pentesting.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal objetivo de la simulación de ataques en ciberseguridad?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Causar daño real a los sistemas.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Evaluar la capacidad defensiva de una aplicación frente a amenazas reales.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Desarrollar malware para uso comercial.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Entrenar hackers maliciosos.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La simulación de ataques evalúa la capacidad defensiva de las aplicaciones frente a amenazas reales.',
        mensaje_incorrecto:
          'Incorrecto. La simulación de ataques busca evaluar la capacidad defensiva de una aplicación frente a amenazas reales.',
      },
      {
        id: 2,
        texto:
          '¿Qué tipo de ataque simula intentos de engaño mediante correos electrónicos personalizados?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Inyección SQL.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Phishing dirigido (Spear Phishing).',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Ataque de fuerza bruta.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Escalada de privilegios.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! El Phishing dirigido (Spear Phishing) simula intentos de engaño mediante correos personalizados.',
        mensaje_incorrecto:
          'Incorrecto. El Phishing dirigido (Spear Phishing) es el ataque que simula engaño mediante correos personalizados.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas es una distribución de Linux especializada en pentesting?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'OWASP ZAP.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Metasploitable.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Kali Linux.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'TryHackMe.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! Kali Linux es una distribución especializada en pruebas de penetración con más de 600 herramientas preinstaladas.',
        mensaje_incorrecto:
          'Incorrecto. Kali Linux es la distribución de Linux especializada en pruebas de penetración.',
      },
      {
        id: 4,
        texto:
          '¿Qué herramienta de código abierto es ampliamente reconocida para el análisis de seguridad en aplicaciones web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'VirtualBox.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'OWASP ZAP.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'VMware.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Hack The Box.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! OWASP ZAP es una herramienta de código abierto diseñada para análisis de seguridad en aplicaciones web.',
        mensaje_incorrecto:
          'Incorrecto. OWASP ZAP es la herramienta de código abierto reconocida para análisis de seguridad en aplicaciones web.',
      },
      {
        id: 5,
        texto:
          '¿Cuál de los siguientes entornos permite resolver retos prácticos conectándose vía VPN?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Metasploitable.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Kali Linux.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'TryHackMe y Hack The Box.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'VirtualBox.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! TryHackMe y Hack The Box son plataformas gamificadas que ofrecen laboratorios virtuales accesibles vía VPN.',
        mensaje_incorrecto:
          'Incorrecto. TryHackMe y Hack The Box permiten resolver retos prácticos conectándose vía VPN.',
      },
    ],
  },
  tema3: {
    tema: '3. Beneficios y desafíos',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre herramientas ágiles, roles y metodologías Scrum.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál de los siguientes roles es responsable de priorizar los elementos del Product Backlog?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Scrum Master.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Product Owner.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Equipo de desarrollo.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Stakeholder.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! El Product Owner es responsable de priorizar los elementos del Product Backlog.',
        mensaje_incorrecto:
          'Incorrecto. El Product Owner es quien prioriza los elementos del Product Backlog.',
      },
      {
        id: 2,
        texto:
          '¿Qué fase del Sprint permite al equipo reflexionar y proponer mejoras en el proceso de trabajo?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Sprint Review.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Daily Scrum.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Sprint Planning.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Sprint Retrospective.',
            esCorrecta: true,
          },
        ],
        mensaje_correcto:
          '¡Excelente! La Sprint Retrospective es la fase donde el equipo reflexiona y propone mejoras.',
        mensaje_incorrecto:
          'Incorrecto. La Sprint Retrospective es la fase donde el equipo reflexiona y propone mejoras en el proceso.',
      },
      {
        id: 3,
        texto:
          '¿Cuál es la principal diferencia entre Trello y JIRA al usarlos como herramientas en equipos Scrum?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'JIRA es gratuita y Trello es paga.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'JIRA está orientado a proyectos personales y Trello a empresas.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'JIRA ofrece métricas avanzadas y flujos configurables, mientras que Trello es más visual y simple.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Trello permite automatizar procesos, JIRA no.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JIRA ofrece métricas avanzadas y flujos configurables, mientras que Trello es más visual y simple.',
        mensaje_incorrecto:
          'Incorrecto. La principal diferencia es que JIRA ofrece métricas avanzadas y flujos configurables, mientras que Trello es más visual y simple.',
      },
      {
        id: 4,
        texto:
          '¿Qué elemento contiene el conjunto de tareas seleccionadas para desarrollarse en un Sprint específico?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Product Backlog.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Sprint Backlog.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Epic.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Roadmap.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! El Sprint Backlog contiene las tareas seleccionadas para un Sprint específico.',
        mensaje_incorrecto:
          'Incorrecto. El Sprint Backlog contiene el conjunto de tareas seleccionadas para desarrollarse en un Sprint específico.',
      },
      {
        id: 5,
        texto:
          '¿Qué métrica en Scrum permite medir cuántos puntos de historia completa un equipo durante un Sprint?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Burnup chart.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Capacidad.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Velocidad.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Tiempo de ciclo.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! La Velocidad es la métrica que mide cuántos puntos de historia completa un equipo durante un Sprint.',
        mensaje_incorrecto:
          'Incorrecto. La Velocidad es la métrica que permite medir cuántos puntos de historia completa un equipo durante un Sprint.',
      },
    ],
  },
  tema4: {
    tema: '3. Beneficios y desafíos',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre los beneficios y desafíos de las metodologías ágiles.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál de los siguientes beneficios es característico de las metodologías ágiles?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto:
              'Desarrollo en fases secuenciales y planificadas desde el inicio.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Entrega temprana y continua de valor al cliente.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Documentación exhaustiva como prioridad principal.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto:
              'Minimización del contacto con el cliente para evitar retrabajo.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! Las metodologías ágiles se caracterizan por la entrega temprana y continua de valor al cliente.',
        mensaje_incorrecto:
          'Incorrecto. Las metodologías ágiles se enfocan en la entrega temprana y continua de valor al cliente.',
      },
      {
        id: 2,
        texto:
          'Uno de los principales desafíos al implementar metodologías ágiles en una organización es:',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'La dificultad para programar en lenguajes de bajo nivel.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'La ausencia de pruebas automatizadas en los equipos.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'La resistencia cultural al cambio dentro de la organización.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'El uso obligatorio de Scrum en todos los proyectos.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! La resistencia cultural al cambio es uno de los principales desafíos al implementar metodologías ágiles.',
        mensaje_incorrecto:
          'Incorrecto. La resistencia cultural al cambio dentro de la organización es uno de los principales obstáculos.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de los siguientes elementos forma parte del modelo ágil escalado implementado por Spotify?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Planificación de producto anual e inmutable.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Squads autónomos organizados en tribus.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Líneas de producción divididas por tipo de música.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Equipos dedicados exclusivamente a pruebas manuales.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Spotify implementa squads autónomos organizados en tribus como parte de su modelo ágil escalado.',
        mensaje_incorrecto:
          'Incorrecto. El modelo de Spotify se basa en squads autónomos organizados en tribus.',
      },
      {
        id: 4,
        texto:
          '¿Cuál es una ventaja significativa de las retrospectivas en metodologías ágiles?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducen la necesidad de entregar software funcional.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Permiten documentar todo el código fuente de forma obligatoria.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Favorecen la mejora continua del equipo.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Eliminan por completo la dependencia del cliente.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Muy bien! Las retrospectivas favorecen la mejora continua del equipo a través de la reflexión y ajustes constantes.',
        mensaje_incorrecto:
          'Incorrecto. Las retrospectivas favorecen la mejora continua del equipo mediante la reflexión del proceso.',
      },
      {
        id: 5,
        texto:
          '¿Cuál de los siguientes contextos puede representar una limitación para aplicar metodologías ágiles puras?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Proyectos que permiten entregas frecuentes.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Equipos autogestionados y con experiencia ágil.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Entornos regulados con requerimientos contractuales estrictos.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Productos digitales en etapas tempranas de diseño.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Excelente! Los entornos regulados con requerimientos contractuales estrictos pueden limitar la aplicación de metodologías ágiles puras.',
        mensaje_incorrecto:
          'Incorrecto. Los entornos regulados con requerimientos contractuales estrictos representan una limitación para las metodologías ágiles.',
      },
    ],
  },
}
