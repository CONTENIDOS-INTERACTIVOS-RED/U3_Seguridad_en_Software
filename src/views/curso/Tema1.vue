<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'1. Técnicas de retrospección efectiva'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: imagen-texto-iconobloque
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 Las pruebas de penetración, también conocidas como pentesting, representan una técnica fundamental en la seguridad de software, ya que permiten identificar vulnerabilidades reales mediante simulaciones controladas de ataques. A través de estas pruebas, un equipo especializado intenta comprometer los sistemas desde la perspectiva de un atacante, evaluando la eficacia de las defensas implementadas.

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este enfoque proactivo revela no solo debilidades técnicas, sino también fallos en procesos, configuraciones y prácticas de desarrollo, contribuyendo así a fortalecer la postura de seguridad de las aplicaciones y proteger la integridad de los datos (Weidman, 2014).

      // Bloque: titulo-segundo
      #t_1_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.1] Conceptos fundamentales

      p(data-aos="fade-left") El pentesting constituye un proceso crítico dentro de la seguridad informática. Su propósito es descubrir, explotar y documentar vulnerabilidades en sistemas tecnológicos. No solo permite identificar fallos potenciales, sino que demuestra la factibilidad de un ataque, proporcionando así una base sólida para la mitigación y mejora continua de la seguridad.

      // Fundamentos y simulación ética de ataques
      h2(data-aos="fade-left").mb-4 Fundamentos y simulación ética de ataques

      // Bloque: texto-imagen 8:4

      .bg-full-width.bg-color-9
        .px-4.px-md-5.py-4
          .row.mb-0.align-items-center
            .col-lg-8
              p(data-aos="fade-left") El pentesting constituye un proceso crítico dentro de la seguridad informática. Su objetivo es descubrir, explotar y documentar vulnerabilidades. A diferencia de los ciberataques reales, estas pruebas se ejecutan de forma ética y controlada por profesionales autorizados, replicando los métodos, herramientas y mentalidad de un atacante real para detectar debilidades ocultas (Gómez Vieites, 2015).
            .col-lg-4
              figure
                img(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in")

      // Bloque: color
      .bg-color-4.p-4(data-aos="fade-left").mb-5
        p.mb-0 #[strong Ejemplo:] un pentester puede simular un ataque de phishing para evaluar si los empleados hacen clic en enlaces sospechosos o entregan credenciales sin verificar al remitente.

      // Bloque: texto
      h2(data-aos="fade-left").mb-4 Enfoques según el conocimiento del sistema

      p(data-aos="fade-left").mb-0 El nivel de información que se proporciona al evaluador determina el enfoque del pentesting. A continuación se comparan los tres enfoques principales:

      .bg-full-width.bg-fondo-2.mb-5

        .px-4.px-md-5.py-5


          // Bloque: tarjetas-3
          .row.justify-content-center.align-items-stretch.mb-0
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center #[strong Caja negra]
                  p.mb-0 El evaluador no conoce la arquitectura ni tiene credenciales. Simula un ataque externo sin privilegios (Gómez Vieites, 2015).
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center #[strong Caja gris]
                  p.mb-0 El evaluador tiene acceso limitado, como el de un usuario registrado. Permite detectar fallos tras autenticación.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema1/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center #[strong Caja blanca]
                  p.mb-0 El evaluador conoce completamente el sistema: código fuente, red, usuarios, etc. Permite una auditoría profunda.

      // Bloque: imagen-color 3:9
      .row.mb-5.align-items-center
        .col-lg-3
          figure
            img(src="@/assets/curso/tema1/7.svg", data-aos="zoom-in")
        .col-lg-9
          .bg-color-2.p-4.py-5(data-aos="fade-left")
            p.mb-0 #[strong Ejemplo]: En una prueba de caja blanca, el evaluador puede revisar el código de una API para detectar errores de validación que permitan inyecciones SQL, incluso si no son visibles desde la interfaz.

      // Bloque: texto
      h2(data-aos="fade-left").mb-4 Tipos de sistemas evaluados

      p(data-aos="fade-left") Las pruebas de penetración pueden centrarse en distintas áreas, según el tipo de activo tecnológico que se desea proteger. Los ámbitos más comunes son:

      // Bloque: bg-full-texto-icono
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              ul.lista-ul--color.color-dark.mb-4
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Aplicaciones web: Formularios, URLs, cookies, sesiones, archivos subidos.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Redes: Puertos abiertos, protocolos inseguros, dispositivos mal configurados.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Sistemas operativos y servidores: Exploits, configuraciones erróneas, servicios vulnerables.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Aplicaciones móviles: Fallos en autenticación, almacenamiento inseguro, uso inadecuado de APIs.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | IoT y dispositivos embebidos: Verificación de firmware, interfaces de comunicación y autenticación física.

            .col-lg-auto
              img(src="@/assets/curso/tema1/8.svg").mx-auto
      // Bloque: texto
      h2(data-aos="fade-left").mb-4 Fases del proceso de pentesting

      p(data-aos="fade-left") El proceso se desarrolla en etapas claramente definidas que permiten estructurar el análisis y aumentar su efectividad:

      // Bloque: slyfc
      .bg-full-width.bg-fondo-2.mb-5
        .px-4.px-md-5.pb-md-3.py-5
          .row.justify-content-center.mb-0
            .col-lg-8
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 #[strong Reconocimiento (Recon)]
                  p.text-center Recopilación pasiva y activa de información, utilizando herramientas como Shodan, DNS o redes sociales.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 #[strong Análisis de vulnerabilidades]
                  p.text-center Identificación de fallos mediante escáneres automáticos o análisis manual (Weidman, 2014).
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 #[strong Explotación]
                  p.text-center Aplicación de exploits como inyecciones SQL, buffer overflows o ataques CSRF.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 #[strong Escalada de privilegios]
                  p.text-center Obtención de acceso con mayores permisos, por ejemplo, pasar de un usuario común a administrador.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 #[strong Acceso persistente y limpieza]
                  p.text-center Simulación ética de instalación de backdoors y eliminación de huellas para mantener el acceso.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/9.png', alt='')

      // BLOQUE
      h2(data-aos="fade-left").mb-4 Beneficios para la organización

      // Bloque: texto-color-imagen 8:4
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-5 Una ejecución adecuada de pruebas de penetración ofrece múltiples beneficios concretos:

          .bg-color-8.p-4(data-aos="fade-left").mb-0
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Prevención de incidentes reales de seguridad.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Cumplimiento normativo (ISO/IEC 27001, PCI-DSS, RGPD).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Mayor conciencia en ciberseguridad del personal interno.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Mejora continua de procesos en desarrollo seguro (DevSecOps).


          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 #[strong Ejemplo]. Una empresa descubrió mediante pentesting que su servidor SSH permitía contraseñas débiles. Tras el informe, implementó claves seguras y deshabilitó el acceso remoto por contraseña.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.2] Tipos de pruebas de penetración

      p(data-aos="fade-left") En el contexto de la ciberseguridad, las pruebas de penetración pueden clasificarse en distintos tipos según el objetivo del análisis, la superficie de ataque evaluada y el enfoque del atacante simulado (Weidman, 2014). Esta clasificación permite adaptar la prueba a las necesidades específicas de una organización, ya sea para evaluar su infraestructura, aplicaciones, redes o incluso la preparación del personal ante amenazas sociales.

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Redes externas")
              p Simulan un ataque desde fuera de la red organizacional, como si fuera realizado por un atacante remoto desde Internet. Se busca identificar servicios expuestos, puertos abiertos, protocolos vulnerables y configuraciones incorrectas en cortafuegos o dispositivos de borde (Gómez Vieites, 2015).
              p #[strong Ejemplo]: Un pentester detecta que un servidor web accesible desde Internet ejecuta una versión obsoleta de Apache con una vulnerabilidad conocida que permite ejecución remota de código. Se simula un compromiso total del servidor.

            .div(titulo="Redes internas")
              p Ejecutadas desde dentro de la red, simulan lo que un atacante podría lograr tras acceder a la red mediante ingeniería social, dispositivo comprometido o acceso físico. Se analizan segmentación de red, tráfico sin cifrar, credenciales compartidas o servicios internos mal configurados.
              p #[strong Ejemplo]: Un analista simula ser un empleado y conecta su equipo al cableado de oficina. Detecta que todos los dispositivos están en la misma subred y explota una vulnerabilidad en el servidor de impresión para escalar privilegios.

            .div(titulo="Aplicaciones web")
              p Se enfocan en aplicaciones accesibles por navegador (sitios web, portales, e-commerce). Se buscan inyecciones SQL, XSS, fallos de autenticación, sesiones mal gestionadas o almacenamiento inseguro.
              p #[strong Ejemplo]: En una tienda en línea, el pentester manipula parámetros de un formulario para cambiar el precio de productos, revelando la falta de validación en el servidor.

      // Bloque: acordeon-img
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Aplicaciones móviles")
              p Analizan el comportamiento de la app en el dispositivo y su comunicación con servidores. Se examinan errores en almacenamiento local, cifrado, autenticación y bibliotecas utilizadas.
              p #[strong Ejemplo]: En una app bancaria, se encuentra que el archivo shared_prefs.xml guarda credenciales en texto plano, accesibles si se compromete el dispositivo.

            .div(titulo="Nivel físico y social (ingeniería social)")
              p Evalúan cómo reaccionan las personas ante intentos de manipulación o acceso no autorizado. Incluyen llamadas falsas, phishing, suplantación o accesos físicos simulados (Gómez Vieites, 2015).
              p #[strong Ejemplo]: Se envía un correo falso del departamento de TI solicitando actualización de contraseña. Varios usuarios ingresan sus credenciales reales.

            .div(titulo="IoT e infraestructura crítica")
              p Dirigidas a sensores, sistemas industriales, cámaras o equipos médicos conectados a redes. Se revisan firmware, protocolos propietarios y configuraciones por defecto (Weidman, 2014).
              p #[strong Ejemplo]: Una cámara de vigilancia tiene Telnet habilitado y credenciales por defecto. El atacante accede y visualiza imágenes en vivo sin autorización.

            .div(titulo="Ingeniería inversa y análisis binario")
              p Se analizan aplicaciones de escritorio o sistemas embebidos mediante análisis estático o dinámico. Se pueden detectar claves embebidas, errores lógicos o puertas traseras.
              p #[strong Ejemplo]: Un pentester descompila un .exe y descubre funciones ocultas que permiten acceso a datos de clientes sin autenticación.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/17.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cada tipo de prueba de penetración responde a un escenario distinto y permite fortalecer la seguridad frente a múltiples vectores de ataque. La planificación adecuada y su ejecución periódica son claves dentro de una estrategia de ciberdefensa realista y efectiva.

      // Bloque: titulo-segundo
      #t_1_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.3] Fases de una prueba de penetración

      p(data-aos="fade-left") Una prueba de penetración no es simplemente un intento de hackeo ético; es un proceso metódico que se compone de varias fases claramente definidas (Weidman, 2014). Cada una de ellas cumple una función esencial para asegurar que el análisis sea efectivo, controlado y útil para la organización evaluada.

      // Bloque: slyder-a
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/19.png")
              .col-lg-7.order-lg-1
                h5 1. Planificación y reconocimiento
                p En esta fase inicial se definen los objetivos del análisis, el alcance permitido por la organización, los sistemas a evaluar y las reglas de actuación del equipo. Se determina si será una prueba de tipo caja negra, gris o blanca (Weidman, 2014). También se lleva a cabo la recolección pasiva de información técnica como dominios, IPs y servicios expuestos.
                p Ejemplo: El equipo acuerda evaluar solo los servicios web públicos del dominio empresa.com. Luego, mediante técnicas OSINT (como Shodan o WHOIS), recopila datos sobre los servidores y tecnologías utilizadas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/20.png")
              .col-lg-7.order-lg-1
                h5 2. Análisis y escaneo
                p Se identifican los puntos débiles del sistema usando herramientas automáticas y técnicas manuales. Se escanean puertos, servicios, versiones de software y configuraciones erróneas. También se buscan vulnerabilidades conocidas (Gómez Vieites, 2015).
                p Ejemplo: Se detecta un servidor con Apache desactualizado y el puerto 21 (FTP) abierto sin autenticación segura.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/21.png")
              .col-lg-7.order-lg-1
                h5 3. Obtención de acceso (explotación)
                p En esta etapa se explotan las vulnerabilidades para comprobar si es posible obtener acceso no autorizado. Se emplean técnicas como inyecciones de código, fuerza bruta, desbordamientos de búfer o secuestro de sesión (Gómez Vieites, 2015).
                p Ejemplo: Se explota una inyección SQL en el formulario de inicio de sesión para acceder como administrador a la plataforma interna.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/22.png")
              .col-lg-7.order-lg-1
                h5 4. Mantenimiento del acceso (post-explotación)
                p Se simula la permanencia del atacante en el sistema una vez obtenida la intrusión. Se prueban puertas traseras, escalado de privilegios y mecanismos de persistencia, evaluando además la capacidad de detección del ataque.
                p Ejemplo: Se instala un script que se ejecuta automáticamente al reiniciar el servidor, asegurando el acceso mediante una conexión inversa cifrada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/23.png")
              .col-lg-7.order-lg-1
                h5 5. Análisis y reporte
                p Finalizada la actividad ofensiva, se elabora un informe técnico y ejecutivo. Este documento detalla las vulnerabilidades identificadas, métodos de explotación, riesgos asociados y recomendaciones específicas de mitigación.
                p Ejemplo: El informe incluye capturas de pantalla, un análisis de riesgo y recomendaciones para aplicar parches y reforzar autenticación.

      // Bloque: color-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").text-white
            p.mb-0 Cada fase de una prueba de penetración es esencial para asegurar que el análisis sea meticuloso, seguro y provechoso (Gómez Vieites, 2015). No se trata únicamente de encontrar fallos, sino de demostrar cómo podrían ser aprovechados, evaluar la capacidad de defensa y generar aprendizajes que prevengan ataques reales. Esta metodología estructurada convierte un ejercicio ofensivo controlado en un recurso estratégico para fortalecer la ciberseguridad organizacional.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/24.png", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_1_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.4] Herramientas utilizadas en pentesting

      p(data-aos="fade-left") En el campo de las pruebas de penetración, las herramientas especializadas juegan un papel decisivo al permitir identificar vulnerabilidades, simular ataques reales y evaluar el nivel de exposición de los sistemas (Weidman, 2014). Estas herramientas no reemplazan el criterio humano, pero amplifican significativamente la capacidad del analista para detectar debilidades de forma precisa y sistemática. Se dividen generalmente según la fase del pentesting en la que se utilizan.

      // Bloque: infografia
      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="72%" y="13%" numero="+")
                  h5 1. Recolección de información y escaneo
                  p Nmap: Escaneo de red para descubrir hosts, puertos abiertos y servicios activos. Permite mapear el entorno objetivo. Ejemplo: nmap -sV -Pn empresa.com revela servicios en puertos 80 y 443 con versiones vulnerables.
                  p theHarvester: Recolecta correos electrónicos, subdominios, nombres de empleados y otros datos expuestos en internet.
                  p Shodan: Motor de búsqueda que detecta dispositivos conectados a internet, mostrando tecnologías y versiones utilizadas.

                .bg-color-white.box-shadow.p-3(x="82%" y="83%" numero="+")
                  h5 2. Análisis de vulnerabilidades
                  p Nessus: Escáner de vulnerabilidades corporativas. Detecta fallos en sistemas operativos, servicios y aplicaciones web (Weidman, 2014).
                  p OpenVAS: Alternativa de código abierto a Nessus. Proporciona informes y seguimiento de remediaciones.
                  p Nikto: Escáner web que identifica configuraciones inseguras, archivos sensibles y scripts obsoletos en servidores.

                .bg-color-white.box-shadow.p-3(x="27%" y="80%" numero="+")
                  h5 3. Explotación
                  p Metasploit Framework: Plataforma potente para desarrollar y ejecutar exploits. Automatiza ataques y simula técnicas reales. Ejemplo: Se explota una vulnerabilidad en SMB para acceder a un servidor Windows desactualizado.
                  p SQLmap: Detecta y explota inyecciones SQL en aplicaciones web. Extrae bases de datos, usuarios y contraseñas.
                  p Hydra: Ejecuta ataques de fuerza bruta contra servicios como FTP, SSH o HTTP para probar la robustez de contraseñas.

                .bg-color-white.box-shadow.p-3(x="23%" y="45%" numero="+")
                  h5 4. Escalada de privilegios y persistencia
                  p LinPEAS / WinPEAS: Scripts automatizados que identifican vectores de escalado de privilegios en Linux o Windows.
                  p PowerShell Empire: Herramienta de post-explotación que permite ejecutar comandos remotos, establecer persistencia y moverse lateralmente en la red.

                .bg-color-white.box-shadow.p-3(x="35%" y="17%" numero="+")
                  h5 5. Reporte y evidencia
                  p Faraday: Entorno colaborativo que integra múltiples herramientas y permite gestionar resultados de pruebas y generar reportes.
                  p Dradis: Plataforma para documentar vulnerabilidades, evidencias y redactar informes técnicos o ejecutivos.

      // Bloque: titulo-segundo
      #t_1_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 1.5] Aspectos éticos y legales del pentesting

      p(data-aos="fade-left") El pentesting, o prueba de penetración, es una práctica legítima y valiosa cuando se realiza dentro de un marco legal y ético claramente definido. Sin embargo, debido a que implica simular ataques reales, su ejecución sin autorización puede incurrir en delitos informáticos. Por ello, los profesionales en este campo deben comprender y respetar tanto los principios éticos como las normativas legales que regulan la seguridad informática.

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/25.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="1. Autorización previa y consentimiento informado")
              p Toda prueba debe contar con una autorización expresa y por escrito de la organización objetivo. Este acuerdo, conocido como Scope of Engagement, delimita los sistemas a evaluar, horarios y condiciones (Gómez Vieites, 2015).
              p #[strong Ejemplo]: Un equipo de pentesters puede operar solo durante la noche y no tocar servidores de producción. Si lo hacen, violan el acuerdo y podrían enfrentar consecuencias legales.

            .div(titulo="2. Confidencialidad y manejo de datos sensibles")
              p Los pentesters pueden acceder a información confidencial durante la evaluación. Están obligados a no divulgar ni utilizar esa información fuera del contexto de la prueba (Weidman, 2014).
              p #[strong Ejemplo]: Si se accede a una base de datos médica, no se deben compartir capturas de pantalla con datos visibles, a menos que estén enmascarados y sean estrictamente necesarios para el informe.

            .div(titulo="3. Principios éticos del hacker ético")
              p El profesional debe actuar con integridad, responsabilidad y respeto, sin causar daño ni aprovecharse de los accesos obtenidos.
              p ● No modificar datos.
              p ● No interrumpir servicios.
              p ● No utilizar accesos para fines personales.
              p #[strong Ejemplo]: Si se accede al correo de un gerente, el pentester debe demostrar el acceso sin leer ni divulgar los mensajes.

      // Bloque: acordeon-img
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="4. Normativas y leyes aplicables")
              p El marco legal varía según el país, pero en general prohíbe el acceso no autorizado a sistemas. Las leyes de protección de datos (como el GDPR en Europa) también regulan cómo deben tratarse los datos personales.
              p #[strong Ejemplo]: Si se accede a datos de usuarios europeos, el cliente debe cumplir con el GDPR, y el pentester podría ser corresponsable si se incumple la norma.

            .div(titulo="5. Documentación y trazabilidad")
              p Es esencial llevar un registro detallado de todas las acciones realizadas durante la prueba. Esto protege a ambas partes y permite auditar el proceso si ocurre algún incidente (Weidman, 2014).
              p #[strong Ejemplo]: Si un servidor falla, el pentester puede demostrar que no interactuó con él mediante logs firmados digitalmente.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema1/26.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque: img-bloque
      .bg-color-6.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema1/27.svg', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El pentesting no es solo una tarea técnica, sino una responsabilidad profesional con profundas implicaciones legales y éticas. Los especialistas deben actuar con transparencia, respetar los derechos de las personas y operar siempre dentro del marco de la ley. Solo así puede esta disciplina cumplir su función protectora sin transformarse en un riesgo adicional para las organizaciones.

      // Bloque: img-anexo
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/28.png', alt='')

            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Implementación de DevOps
              p.mb-4(data-aos="fade-right") Se invita a leer el documento Implementación de DevOps, donde se aborda cómo integrar prácticas colaborativas, automatización y entrega continua para transformar el ciclo de vida del software.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Implementación de DevOps

      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Kim-Park, D. S. (2011). Aplicación de un oráculo de prueba automatizado a la evaluación de salidas de programas basados en XML. Revista Española de Innovación, Calidad e Ingeniería del Software, 7(1): 6-21, 2011: ( ed.). Asociación de Técnicos de Informática (ATI).

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/26203" target="_blank" rel="noopener noreferrer") Aplicación de un oráculo de prueba automatizado a la evaluación de salidas de programas basados en XML

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ZkjeQVy84KA" target="_blank" rel="noopener noreferrer") Pruebas de seguridad de aplicaciones con OWASP ZAP

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
