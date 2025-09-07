# Tema 2: 2. Simulación de ataques

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: img-bloque
//assets: 1.png

//texto
La simulación de ataques representa una técnica avanzada en el ámbito de la seguridad de software, utilizada para evaluar la capacidad defensiva de una aplicación frente a amenazas reales. Mediante esta práctica, un equipo especializado recrea escenarios controlados en los que actúa como un atacante potencial, identificando vulnerabilidades antes de que sean explotadas en entornos reales. Esta estrategia permite anticipar riesgos, fortalecer la postura de seguridad de la organización y promover una cultura proactiva frente a los incidentes informáticos (Chicano Tejada, 2023).

## BLOQUE: titulo-segundo

2.1 Fundamentos de la simulación de ataques

A continuación, se presenta un podcast que aborda, desde una perspectiva técnica y estratégica, la simulación de ataques como herramienta clave en la ciberseguridad ofensiva, destacando sus fundamentos, aplicaciones prácticas y su valor en la mejora continua de la protección organizacional.

## BLOQUE: imagen-audio

//assets: 2.svg

//titulo-audio
Simulación de ataques en ciberseguridad ofensiva

//audio: podcast1.mp3


## BLOQUE: titulo-segundo

2.2 Tipos de ataques más comunes a simular

En el contexto de la ciberseguridad ofensiva, existen diversos tipos de ataques que suelen ser simulados con el fin de evaluar la capacidad de una organización para detectar, resistir y responder ante incidentes reales (Gómez Vieites, 2014). Estos ejercicios controlados permiten exponer debilidades tanto técnicas como organizativas, y se seleccionan según el perfil de riesgo y la infraestructura tecnológica de cada entidad.



## BLOQUE: slyder-a
//assets: 3.png, 4.png, 5.png, 6.png , 7.png

### Phishing dirigido (Spear Phishing)
Simula intentos de engaño a través de correos electrónicos personalizados con el fin de obtener credenciales o distribuir malware. Se dirige a perfiles con acceso privilegiado.
**Ejemplo**: Un atacante simulado envía un correo que aparenta ser del área de TI solicitando el cambio de contraseña mediante un enlace falso.

### Inyección de código (SQLi o XSS)
Estas simulaciones buscan detectar fallos en la validación de entradas de usuario en aplicaciones web. La inyección SQL puede extraer datos mediante manipulaciones en formularios o URLs.
**Ejemplo**: Se introduce ' OR 1=1 -- en un campo de inicio de sesión para evadir la autenticación y acceder sin credenciales válidas.

### Fuerza bruta y ataques por diccionario
Evalúan la solidez de los mecanismos de autenticación mediante intentos masivos y automatizados de ingreso, detectando contraseñas débiles.
**Ejemplo**: Se configura Hydra para probar miles de combinaciones de contraseñas en un servicio SSH corporativo.

### Escalada de privilegios
Permite simular el accionar de un atacante que parte de un acceso limitado y explora fallos para obtener permisos elevados.
**Ejemplo**: Un atacante analiza directorios en busca de archivos mal configurados que le permitan ejecutar comandos como administrador.

### Denegación de servicio (DoS) controlado
Se simula una sobrecarga de peticiones para medir la capacidad de respuesta del sistema ante ataques de disponibilidad. No se recomienda en entornos productivos sin restricciones.
**Ejemplo**: Se emplea Slowloris para enviar múltiples peticiones HTTP simultáneas, evaluando cómo responde el servidor ante la saturación.


## BLOQUE: texto

Estos tipos de ataques simulados permiten evaluar no solo las vulnerabilidades técnicas, sino también la eficacia de los procesos de monitoreo, respuesta a incidentes y nivel de concienciación del personal. Cada simulación, cuando es bien planificada y documentada, representa una oportunidad para mejorar la resiliencia de la infraestructura digital de forma proactiva: 

## BLOQUE: figura-completa

//assets: 8.png

Figura 1. Lab Wallarm


## BLOQUE: titulo-segundo

2.3 Entornos y plataformas para simular ataques

La simulación de ataques requiere entornos controlados que aseguren la integridad de los sistemas reales y permitan la exploración de vulnerabilidades sin generar impactos colaterales. Estos entornos replican infraestructuras de producción o contienen desafíos diseñados para simular escenarios de ataque realistas (Chicano Tejada, 2023). A continuación, se presentan las plataformas más representativas:


## BLOQUE: img-acordeon

//assets: 9.png

Kali Linux
  Distribución de Linux especializada en pruebas de penetración y análisis forense. Contiene más de 600 herramientas preinstaladas como Nmap, Metasploit, Burp Suite, entre otras.
  **Ejemplo**: Un analista utiliza Kali Linux para ejecutar escaneos con Nmap o lanzar exploits desde Metasploit contra una máquina virtual vulnerable.

---

Metasploitable
  Máquina virtual diseñada por Rapid7 con múltiples vulnerabilidades intencionadas. Es ideal para prácticas de explotación en un entorno seguro (Chicano Tejada, 2023).
  **Ejemplo**: Desde Kali Linux, un usuario escanea Metasploitable con Nmap y explota servicios vulnerables como VSFTPD o Tomcat utilizando Metasploit.

---

TryHackMe y Hack The Box
  Plataformas gamificadas que ofrecen laboratorios virtuales en la nube. Permiten resolver retos prácticos conectándose vía VPN. Cada sala simula un escenario real con vulnerabilidades específicas.
  **Ejemplo**: En TryHackMe, un estudiante accede a la sala Simple CTF donde explora una vulnerabilidad LFI (Local File Inclusion) en una web PHP simulada.

---

VirtualBox y VMware
  Herramientas para crear laboratorios locales con múltiples máquinas virtuales, redes simuladas y escenarios personalizados. Ofrecen total control sobre la configuración.
  **Ejemplo**: Se configura un laboratorio con Kali Linux como atacante, Metasploitable como víctima y un firewall simulado, todo dentro de una red virtual aislada.

---

Red Team / Blue Team Labs (RangeForce, Cyber Range)
  Plataformas que permiten simular campañas ofensivas (Red Team) y defensas activas (Blue Team). Ideales para ejercicios colaborativos y entrenamiento corporativo en tiempo real.
  **Ejemplo**: Un equipo participa en una simulación de ataque tipo ransomware, utilizando herramientas SIEM y análisis de logs para detectar y mitigar la amenaza.


## BLOQUE: bg-full-icono-texto

//assets: 10.svg

Estos entornos son fundamentales para entrenar habilidades ofensivas y defensivas de forma segura, adaptándose a distintos niveles de experiencia. Desde quienes comienzan en el pentesting hasta equipos profesionales en simulaciones corporativas, estas plataformas refuerzan el conocimiento técnico y preparan mejor a los especialistas ante ciberamenazas reales.

## BLOQUE: anexo-img

//assets: 10.png

### Simulaciones de ataques
Se invita a leer el documento Simulaciones de ataques, donde se aborda la importancia de recrear escenarios reales de amenazas en entornos controlados para fortalecer la seguridad informática. 

//archivo: Anexo_2.pdf


## BLOQUE: titulo-segundo

2.4. Pongamos en práctica

## BLOQUE: imagen-texto-iconobloque 4:8

//assets: 11.png

//texto
En este capítulo se presenta un recurso audiovisual centrado en la aplicación práctica de OWASP ZAP (Zed Attack Proxy), una herramienta de código abierto ampliamente reconocida en el ámbito del pentesting de aplicaciones web. Este video guía al estudiante a través de los primeros pasos en la configuración y ejecución básica de pruebas de seguridad, utilizando escenarios reales y entornos controlados.

//iconobloque 6
A lo largo del material, se explora cómo OWASP ZAP puede utilizarse para analizar aplicaciones desde la perspectiva de un atacante. Se muestran tanto escaneos pasivos como activos, lo que permite detectar vulnerabilidades como inyecciones SQL, cross-site scripting (XSS), y configuraciones inseguras.

//texto
Entre las funciones clave que se explican en el recurso se encuentran:



## BLOQUE: tarjetas-3 (revisar pug.json)

//assets: 12.png, 13.png, 14.png, 15.png

Escaneo automatizado de aplicaciones web.

---

Análisis manual de tráfico y respuestas.

---

Uso del proxy para interceptar peticiones HTTP/S.

---

Visualización en tiempo real de vulnerabilidades detectadas.



## BLOQUE: texto

## Ejemplo aplicado

## BLOQUE: bg-full-texto-imagen

//assets: 12.svg

//color 4
Ejemplo aplicado: Se configura ZAP como proxy entre el navegador y una aplicación web de prueba. Al navegar por la aplicación, ZAP intercepta las peticiones y permite analizar cabeceras, formularios y respuestas, identificando entradas no validadas y enlaces inseguros.

Este material es esencial para que el estudiante comprenda la importancia de revisar proactivamente la seguridad durante el desarrollo web. Dominar el uso de OWASP ZAP fortalece la capacidad para aplicar pruebas de penetración de forma sistemática, contribuyendo a la creación de software más seguro y resiliente frente a amenazas comunes.


## BLOQUE: video-fondo


## BLOQUE: actividad


## BLOQUE: bloque-material-complementario

Escrivá Gascó, G. (2013). Seguridad informática: ( ed.). Macmillan Iberia, S.A. 
https://elibro.net/es/lc/tecnologicadeloriente/titulos/43260 


solomongo | CIBERSEGURIDAD. (2025, 22 de mayo). #DVWA#damn #vulnerable #web #application #sqlinjection #csrf #XSS #site #hacking #simulador. [Video]. YouTube. 
https://www.youtube.com/watch?v=rfpEAd4W2G0 