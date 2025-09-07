# Tema 1: 1. Técnicas de retrospección efectiva


<!-- 
RUTA DE ASSETS: @/assets/curso/tema1/
DISEÑO DE REFERENCIA: tema1.png
-->

## BLOQUE: imagen-texto-iconobloque
//assets: 1.png, 2.svg

//texto
Las pruebas de penetración, también conocidas como pentesting, representan una técnica fundamental en la seguridad de software, ya que permiten identificar vulnerabilidades reales mediante simulaciones controladas de ataques. A través de estas pruebas, un equipo especializado intenta comprometer los sistemas desde la perspectiva de un atacante, evaluando la eficacia de las defensas implementadas. 

//iconobloque 1
Este enfoque proactivo revela no solo debilidades técnicas, sino también fallos en procesos, configuraciones y prácticas de desarrollo, contribuyendo así a fortalecer la postura de seguridad de las aplicaciones y proteger la integridad de los datos (Weidman, 2014).

## BLOQUE: titulo-segundo

1.1. Conceptos fundamentales

El pentesting constituye un proceso crítico dentro de la seguridad informática. Su propósito es descubrir, explotar y documentar vulnerabilidades en sistemas tecnológicos. No solo permite identificar fallos potenciales, sino que demuestra la factibilidad de un ataque, proporcionando así una base sólida para la mitigación y mejora continua de la seguridad.

## Fundamentos y simulación ética de ataques

## BLOQUE: texto-imagen 8:$

//assets: 3.svg

//texto
El pentesting constituye un proceso crítico dentro de la seguridad informática. Su objetivo es descubrir, explotar y documentar vulnerabilidades. A diferencia de los ciberataques reales, estas pruebas se ejecutan de forma ética y controlada por profesionales autorizados, replicando los métodos, herramientas y mentalidad de un atacante real para detectar debilidades ocultas (Gómez Vieites, 2015).

## BLOQUE: color

//color 4
**Ejemplo:** un pentester puede simular un ataque de phishing para evaluar si los empleados hacen clic en enlaces sospechosos o entregan credenciales sin verificar al remitente.


## BLOQUE: texto

## Enfoques según el conocimiento del sistema

El nivel de información que se proporciona al evaluador determina el enfoque del pentesting. A continuación se comparan los tres enfoques principales:

## BLOQUE: tarjetas-3

//assets: 4.png, 5.png, 6.png

**Caja negra**
El evaluador no conoce la arquitectura ni tiene credenciales. Simula un ataque externo sin privilegios (Gómez Vieites, 2015).

---

**Caja gris**
El evaluador tiene acceso limitado, como el de un usuario registrado. Permite detectar fallos tras autenticación.

---

**Caja blanca**
El evaluador conoce completamente el sistema: código fuente, red, usuarios, etc. Permite una auditoría profunda.


## BLOQUE: imagen-color 3:9

//assets: 7.png

//color 2
**Ejemplo**: En una prueba de caja blanca, el evaluador puede revisar el código de una API para detectar errores de validación que permitan inyecciones SQL, incluso si no son visibles desde la interfaz.

## BLOQUE: texto

## Tipos de sistemas evaluados

Las pruebas de penetración pueden centrarse en distintas áreas, según el tipo de activo tecnológico que se desea proteger. Los ámbitos más comunes son:


## BLOQUE: bg-full-texto-icono

//assets: 8.svg

//color 1
  //lista-flechas
  - Aplicaciones web: Formularios, URLs, cookies, sesiones, archivos subidos.
  - Redes: Puertos abiertos, protocolos inseguros, dispositivos mal configurados.
  - Sistemas operativos y servidores: Exploits, configuraciones erróneas, servicios vulnerables.
  - Aplicaciones móviles: Fallos en autenticación, almacenamiento inseguro, uso inadecuado de APIs.
  - IoT y dispositivos embebidos: Verificación de firmware, interfaces de comunicación y autenticación física.

## BLOQUE: texto

## Fases del proceso de pentesting
El proceso se desarrolla en etapas claramente definidas que permiten estructurar el análisis y aumentar su efectividad:

## BLOQUE: slyfc

//assets: 9.png, 10.svg, 11.svg, 12.svg, 13.svg, 14.svg

**Reconocimiento (Recon)**
Recopilación pasiva y activa de información, utilizando herramientas como Shodan, DNS o redes sociales.

---

**Análisis de vulnerabilidades**
Identificación de fallos mediante escáneres automáticos o análisis manual (Weidman, 2014).

---

**Explotación**
Aplicación de exploits como inyecciones SQL, buffer overflows o ataques CSRF.

---

**Escalada de privilegios**
Obtención de acceso con mayores permisos, por ejemplo, pasar de un usuario común a administrador.

---

**Acceso persistente y limpieza**
Simulación ética de instalación de backdoors y eliminación de huellas para mantener el acceso.


## BLOQUE

## Beneficios para la organización

## BLOQUE: texto-color-imagen 8:4

//assets: 15.png

//texto
Una ejecución adecuada de pruebas de penetración ofrece múltiples beneficios concretos:

//color 8
  //lista-flechas
  - Prevención de incidentes reales de seguridad.
  - Cumplimiento normativo (ISO/IEC 27001, PCI-DSS, RGPD).
  - Mayor conciencia en ciberseguridad del personal interno.
  - Mejora continua de procesos en desarrollo seguro (DevSecOps).

//color 2
**Ejemplo**. Una empresa descubrió mediante pentesting que su servidor SSH permitía contraseñas débiles. Tras el informe, implementó claves seguras y deshabilitó el acceso remoto por contraseña.



## BLOQUE: titulo-segundo

1.2. Tipos de pruebas de penetración

En el contexto de la ciberseguridad, las pruebas de penetración pueden clasificarse en distintos tipos según el objetivo del análisis, la superficie de ataque evaluada y el enfoque del atacante simulado (Weidman, 2014). Esta clasificación permite adaptar la prueba a las necesidades específicas de una organización, ya sea para evaluar su infraestructura, aplicaciones, redes o incluso la preparación del personal ante amenazas sociales.


## BLOQUE: img-acordeon

//assets: 16.png

//acordeon

Redes externas
  Simulan un ataque desde fuera de la red organizacional, como si fuera realizado por un atacante remoto desde Internet. Se busca identificar servicios expuestos, puertos abiertos, protocolos vulnerables y configuraciones incorrectas en cortafuegos o dispositivos de borde (Gómez Vieites, 2015).

  **Ejemplo**: Un pentester detecta que un servidor web accesible desde Internet ejecuta una versión obsoleta de Apache con una vulnerabilidad conocida que permite ejecución remota de código. Se simula un compromiso total del servidor.

---

Redes internas
  Ejecutadas desde dentro de la red, simulan lo que un atacante podría lograr tras acceder a la red mediante ingeniería social, dispositivo comprometido o acceso físico. Se analizan segmentación de red, tráfico sin cifrar, credenciales compartidas o servicios internos mal configurados.

  **Ejemplo**: Un analista simula ser un empleado y conecta su equipo al cableado de oficina. Detecta que todos los dispositivos están en la misma subred y explota una vulnerabilidad en el servidor de impresión para escalar privilegios.

---

Aplicaciones web
  Se enfocan en aplicaciones accesibles por navegador (sitios web, portales, e-commerce). Se buscan inyecciones SQL, XSS, fallos de autenticación, sesiones mal gestionadas o almacenamiento inseguro.
  
  **Ejemplo**: En una tienda en línea, el pentester manipula parámetros de un formulario para cambiar el precio de productos, revelando la falta de validación en el servidor.



## BLOQUE: acordeon-img

//assets: 17.png

//acordeon

Aplicaciones móviles
  Analizan el comportamiento de la app en el dispositivo y su comunicación con servidores. Se examinan errores en almacenamiento local, cifrado, autenticación y bibliotecas utilizadas.
  **Ejemplo**: En una app bancaria, se encuentra que el archivo shared_prefs.xml guarda credenciales en texto plano, accesibles si se compromete el dispositivo.

---

Nivel físico y social (ingeniería social)
  Evalúan cómo reaccionan las personas ante intentos de manipulación o acceso no autorizado. Incluyen llamadas falsas, phishing, suplantación o accesos físicos simulados (Gómez Vieites, 2015).
  **Ejemplo**: Se envía un correo falso del departamento de TI solicitando actualización de contraseña. Varios usuarios ingresan sus credenciales reales.

---

IoT e infraestructura crítica
  Dirigidas a sensores, sistemas industriales, cámaras o equipos médicos conectados a redes. Se revisan firmware, protocolos propietarios y configuraciones por defecto (Weidman, 2014).
  **Ejemplo**: Una cámara de vigilancia tiene Telnet habilitado y credenciales por defecto. El atacante accede y visualiza imágenes en vivo sin autorización.

---

Ingeniería inversa y análisis binario
  Se analizan aplicaciones de escritorio o sistemas embebidos mediante análisis estático o dinámico. Se pueden detectar claves embebidas, errores lógicos o puertas traseras.
  **Ejemplo**: Un pentester descompila un .exe y descubre funciones ocultas que permiten acceso a datos de clientes sin autenticación.


## BLOQUE: bg-full-icono-texto

//assets: 18.svg

Cada tipo de prueba de penetración responde a un escenario distinto y permite fortalecer la seguridad frente a múltiples vectores de ataque. La planificación adecuada y su ejecución periódica son claves dentro de una estrategia de ciberdefensa realista y efectiva.

## BLOQUE: titulo-segundo

1.3. Fases de una prueba de penetración

Una prueba de penetración no es simplemente un intento de hackeo ético; es un proceso metódico que se compone de varias fases claramente definidas (Weidman, 2014). Cada una de ellas cumple una función esencial para asegurar que el análisis sea efectivo, controlado y útil para la organización evaluada.


## BLOQUE: slyder-a
//assets: 19.png, 20.png, 21.png, 22.png, 23.png

### 1. Planificación y reconocimiento
En esta fase inicial se definen los objetivos del análisis, el alcance permitido por la organización, los sistemas a evaluar y las reglas de actuación del equipo. Se determina si será una prueba de tipo caja negra, gris o blanca (Weidman, 2014). También se lleva a cabo la recolección pasiva de información técnica como dominios, IPs y servicios expuestos.
Ejemplo: El equipo acuerda evaluar solo los servicios web públicos del dominio empresa.com. Luego, mediante técnicas OSINT (como Shodan o WHOIS), recopila datos sobre los servidores y tecnologías utilizadas.

### 2. Análisis y escaneo
Se identifican los puntos débiles del sistema usando herramientas automáticas y técnicas manuales. Se escanean puertos, servicios, versiones de software y configuraciones erróneas. También se buscan vulnerabilidades conocidas (Gómez Vieites, 2015).
Ejemplo: Se detecta un servidor con Apache desactualizado y el puerto 21 (FTP) abierto sin autenticación segura.

### 3. Obtención de acceso (explotación)
En esta etapa se explotan las vulnerabilidades para comprobar si es posible obtener acceso no autorizado. Se emplean técnicas como inyecciones de código, fuerza bruta, desbordamientos de búfer o secuestro de sesión (Gómez Vieites, 2015).
Ejemplo: Se explota una inyección SQL en el formulario de inicio de sesión para acceder como administrador a la plataforma interna.

### 4. Mantenimiento del acceso (post-explotación)
Se simula la permanencia del atacante en el sistema una vez obtenida la intrusión. Se prueban puertas traseras, escalado de privilegios y mecanismos de persistencia, evaluando además la capacidad de detección del ataque.
Ejemplo: Se instala un script que se ejecuta automáticamente al reiniciar el servidor, asegurando el acceso mediante una conexión inversa cifrada.

### 5. Análisis y reporte
Finalizada la actividad ofensiva, se elabora un informe técnico y ejecutivo. Este documento detalla las vulnerabilidades identificadas, métodos de explotación, riesgos asociados y recomendaciones específicas de mitigación.
Ejemplo: El informe incluye capturas de pantalla, un análisis de riesgo y recomendaciones para aplicar parches y reforzar autenticación.

## BLOQUE: color-imagen

//assets: 24.png

//color 3
Cada fase de una prueba de penetración es esencial para asegurar que el análisis sea meticuloso, seguro y provechoso (Gómez Vieites, 2015). No se trata únicamente de encontrar fallos, sino de demostrar cómo podrían ser aprovechados, evaluar la capacidad de defensa y generar aprendizajes que prevengan ataques reales. Esta metodología estructurada convierte un ejercicio ofensivo controlado en un recurso estratégico para fortalecer la ciberseguridad organizacional.


## BLOQUE: titulo-segundo

1.4. Herramientas utilizadas en pentesting

En el campo de las pruebas de penetración, las herramientas especializadas juegan un papel decisivo al permitir identificar vulnerabilidades, simular ataques reales y evaluar el nivel de exposición de los sistemas (Weidman, 2014). Estas herramientas no reemplazan el criterio humano, pero amplifican significativamente la capacidad del analista para detectar debilidades de forma precisa y sistemática. Se dividen generalmente según la fase del pentesting en la que se utilizan. 


## BLOQUE: infografia
//assets: infografia1.svg

65% 20%
1. Recolección de información y escaneo
Nmap: Escaneo de red para descubrir hosts, puertos abiertos y servicios activos. Permite mapear el entorno objetivo. Ejemplo: nmap -sV -Pn empresa.com revela servicios en puertos 80 y 443 con versiones vulnerables.
theHarvester: Recolecta correos electrónicos, subdominios, nombres de empleados y otros datos expuestos en internet.
Shodan: Motor de búsqueda que detecta dispositivos conectados a internet, mostrando tecnologías y versiones utilizadas.

---

80% 85%
2. Análisis de vulnerabilidades
Nessus: Escáner de vulnerabilidades corporativas. Detecta fallos en sistemas operativos, servicios y aplicaciones web (Weidman, 2014).
OpenVAS: Alternativa de código abierto a Nessus. Proporciona informes y seguimiento de remediaciones.
Nikto: Escáner web que identifica configuraciones inseguras, archivos sensibles y scripts obsoletos en servidores.

---

25% 80%
3. Explotación
Metasploit Framework: Plataforma potente para desarrollar y ejecutar exploits. Automatiza ataques y simula técnicas reales. Ejemplo: Se explota una vulnerabilidad en SMB para acceder a un servidor Windows desactualizado.
SQLmap: Detecta y explota inyecciones SQL en aplicaciones web. Extrae bases de datos, usuarios y contraseñas.
Hydra: Ejecuta ataques de fuerza bruta contra servicios como FTP, SSH o HTTP para probar la robustez de contraseñas.

---

20% 50%
4. Escalada de privilegios y persistencia
LinPEAS / WinPEAS: Scripts automatizados que identifican vectores de escalado de privilegios en Linux o Windows.
PowerShell Empire: Herramienta de post-explotación que permite ejecutar comandos remotos, establecer persistencia y moverse lateralmente en la red.

---

35% 15%
5. Reporte y evidencia
Faraday: Entorno colaborativo que integra múltiples herramientas y permite gestionar resultados de pruebas y generar reportes.
Dradis: Plataforma para documentar vulnerabilidades, evidencias y redactar informes técnicos o ejecutivos.


## BLOQUE: titulo-segundo

1.5. Aspectos éticos y legales del pentesting

El pentesting, o prueba de penetración, es una práctica legítima y valiosa cuando se realiza dentro de un marco legal y ético claramente definido. Sin embargo, debido a que implica simular ataques reales, su ejecución sin autorización puede incurrir en delitos informáticos. Por ello, los profesionales en este campo deben comprender y respetar tanto los principios éticos como las normativas legales que regulan la seguridad informática.


## BLOQUE: img-acordeon

//assets: 25.png

//acordeon

1. Autorización previa y consentimiento informado
  Toda prueba debe contar con una autorización expresa y por escrito de la organización objetivo. Este acuerdo, conocido como Scope of Engagement, delimita los sistemas a evaluar, horarios y condiciones (Gómez Vieites, 2015).
  **Ejemplo**: Un equipo de pentesters puede operar solo durante la noche y no tocar servidores de producción. Si lo hacen, violan el acuerdo y podrían enfrentar consecuencias legales.

---

2. Confidencialidad y manejo de datos sensibles
  Los pentesters pueden acceder a información confidencial durante la evaluación. Están obligados a no divulgar ni utilizar esa información fuera del contexto de la prueba (Weidman, 2014).
  **Ejemplo**: Si se accede a una base de datos médica, no se deben compartir capturas de pantalla con datos visibles, a menos que estén enmascarados y sean estrictamente necesarios para el informe.

---

3. Principios éticos del hacker ético
  El profesional debe actuar con integridad, responsabilidad y respeto, sin causar daño ni aprovecharse de los accesos obtenidos.
  ● No modificar datos.
  ● No interrumpir servicios.
  ● No utilizar accesos para fines personales.
  **Ejemplo**: Si se accede al correo de un gerente, el pentester debe demostrar el acceso sin leer ni divulgar los mensajes.



## BLOQUE: acordeon-img

//assets: 26.png

//acordeon

4. Normativas y leyes aplicables
El marco legal varía según el país, pero en general prohíbe el acceso no autorizado a sistemas. Las leyes de protección de datos (como el GDPR en Europa) también regulan cómo deben tratarse los datos personales.
**Ejemplo**: Si se accede a datos de usuarios europeos, el cliente debe cumplir con el GDPR, y el pentester podría ser corresponsable si se incumple la norma.

---

5. Documentación y trazabilidad
  Es esencial llevar un registro detallado de todas las acciones realizadas durante la prueba. Esto protege a ambas partes y permite auditar el proceso si ocurre algún incidente (Weidman, 2014).
  **Ejemplo**: Si un servidor falla, el pentester puede demostrar que no interactuó con él mediante logs firmados digitalmente.



## BLOQUE: img-bloque

//assets: 27.svg

El pentesting no es solo una tarea técnica, sino una responsabilidad profesional con profundas implicaciones legales y éticas. Los especialistas deben actuar con transparencia, respetar los derechos de las personas y operar siempre dentro del marco de la ley. Solo así puede esta disciplina cumplir su función protectora sin transformarse en un riesgo adicional para las organizaciones.


## BLOQUE: img-anexo

//assets: 28.png

//titulo-anexo
### Implementación de DevOps

//texto-anexo
Se invita a leer el documento Implementación de DevOps, donde se aborda cómo integrar prácticas colaborativas, automatización y entrega continua para transformar el ciclo de vida del software.
//archivo-anexo: Anexo_2.pdf
//color: #FCDFDB


## BLOQUE: bloque-material-complementario

Kim-Park, D. S. (2011). Aplicación de un oráculo de prueba automatizado a la evaluación de salidas de programas basados en XML. Revista Española de Innovación, Calidad e Ingeniería del Software, 7(1): 6-21, 2011: ( ed.). Asociación de Técnicos de Informática (ATI). 
https://elibro.net/es/lc/tecnologicadeloriente/titulos/26203 

Walker, M. (2020, 9 de junio). Pruebas de seguridad de aplicaciones con OWASP ZAP. [Video]. YouTube. 
https://www.youtube.com/watch?v=ZkjeQVy84KA  