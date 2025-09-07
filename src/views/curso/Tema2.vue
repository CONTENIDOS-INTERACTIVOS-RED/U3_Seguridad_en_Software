<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Simulación de ataques'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: img-bloque
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La simulación de ataques representa una técnica avanzada en el ámbito de la seguridad de software, utilizada para evaluar la capacidad defensiva de una aplicación frente a amenazas reales. Mediante esta práctica, un equipo especializado recrea escenarios controlados en los que actúa como un atacante potencial, identificando vulnerabilidades antes de que sean explotadas en entornos reales. Esta estrategia permite anticipar riesgos, fortalecer la postura de seguridad de la organización y promover una cultura proactiva frente a los incidentes informáticos (Chicano Tejada, 2023).

      // Bloque: titulo-segundo
      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Fundamentos de la simulación de ataques

      p(data-aos="fade-left") A continuación, se presenta un podcast que aborda, desde una perspectiva técnica y estratégica, la simulación de ataques como herramienta clave en la ciberseguridad ofensiva, destacando sus fundamentos, aplicaciones prácticas y su valor en la mejora continua de la protección organizacional.


      // Bloque: imagen-audio
      .bg-full-width.bg-color-1.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Simulación de ataques en ciberseguridad ofensiva"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
            .col-lg-6
              figure
                img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")

      // Bloque: titulo-segundo
      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Tipos de ataques más comunes a simular

      p(data-aos="fade-left") En el contexto de la ciberseguridad ofensiva, existen diversos tipos de ataques que suelen ser simulados con el fin de evaluar la capacidad de una organización para detectar, resistir y responder ante incidentes reales (Gómez Vieites, 2014). Estos ejercicios controlados permiten exponer debilidades tanto técnicas como organizativas, y se seleccionan según el perfil de riesgo y la infraestructura tecnológica de cada entidad.

      // Bloque: slyder-a
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/3.png")
              .col-lg-7.order-lg-1
                h5 Phishing dirigido (Spear Phishing)
                p Simula intentos de engaño a través de correos electrónicos personalizados con el fin de obtener credenciales o distribuir malware. Se dirige a perfiles con acceso privilegiado.
                p #[strong Ejemplo]: Un atacante simulado envía un correo que aparenta ser del área de TI solicitando el cambio de contraseña mediante un enlace falso.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/4.png")
              .col-lg-7.order-lg-1
                h5 Inyección de código (SQLi o XSS)
                p Estas simulaciones buscan detectar fallos en la validación de entradas de usuario en aplicaciones web. La inyección SQL puede extraer datos mediante manipulaciones en formularios o URLs.
                p #[strong Ejemplo]: Se introduce ' OR 1=1 -- en un campo de inicio de sesión para evadir la autenticación y acceder sin credenciales válidas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/5.png")
              .col-lg-7.order-lg-1
                h5 Fuerza bruta y ataques por diccionario
                p Evalúan la solidez de los mecanismos de autenticación mediante intentos masivos y automatizados de ingreso, detectando contraseñas débiles.
                p #[strong Ejemplo]: Se configura Hydra para probar miles de combinaciones de contraseñas en un servicio SSH corporativo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/6.png")
              .col-lg-7.order-lg-1
                h5 Escalada de privilegios
                p Permite simular el accionar de un atacante que parte de un acceso limitado y explora fallos para obtener permisos elevados.
                p #[strong Ejemplo]: Un atacante analiza directorios en busca de archivos mal configurados que le permitan ejecutar comandos como administrador.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/7.png")
              .col-lg-7.order-lg-1
                h5 Denegación de servicio (DoS) controlado
                p Se simula una sobrecarga de peticiones para medir la capacidad de respuesta del sistema ante ataques de disponibilidad. No se recomienda en entornos productivos sin restricciones.
                p #[strong Ejemplo]: Se emplea Slowloris para enviar múltiples peticiones HTTP simultáneas, evaluando cómo responde el servidor ante la saturación.

      // Bloque: texto
      p(data-aos="fade-left").mb-5 Estos tipos de ataques simulados permiten evaluar no solo las vulnerabilidades técnicas, sino también la eficacia de los procesos de monitoreo, respuesta a incidentes y nivel de concienciación del personal. Cada simulación, cuando es bien planificada y documentada, representa una oportunidad para mejorar la resiliencia de la infraestructura digital de forma proactiva:

      // Bloque: figura-completa
      .titulo-figura.mb-2
        h5 Figura 1. 
        span Lab Wallarm

      figure.bg-color-1.p-4.p-md-5.mb-5
        img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in", style="max-width: 818px").mx-auto

      // Bloque: titulo-segundo
      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Entornos y plataformas para simular ataques

      p(data-aos="fade-left").mb-5 La simulación de ataques requiere entornos controlados que aseguren la integridad de los sistemas reales y permitan la exploración de vulnerabilidades sin generar impactos colaterales. Estos entornos replican infraestructuras de producción o contienen desafíos diseñados para simular escenarios de ataque realistas (Chicano Tejada, 2023). A continuación, se presentan las plataformas más representativas:

      // Bloque: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Kali Linux")
              p Distribución de Linux especializada en pruebas de penetración y análisis forense. Contiene más de 600 herramientas preinstaladas como Nmap, Metasploit, Burp Suite, entre otras.
              p #[strong Ejemplo]: Un analista utiliza Kali Linux para ejecutar escaneos con Nmap o lanzar exploits desde Metasploit contra una máquina virtual vulnerable.

            .div(titulo="Metasploitable")
              p Máquina virtual diseñada por Rapid7 con múltiples vulnerabilidades intencionadas. Es ideal para prácticas de explotación en un entorno seguro (Chicano Tejada, 2023).
              p #[strong Ejemplo]: Desde Kali Linux, un usuario escanea Metasploitable con Nmap y explota servicios vulnerables como VSFTPD o Tomcat utilizando Metasploit.

            .div(titulo="TryHackMe y Hack The Box")
              p Plataformas gamificadas que ofrecen laboratorios virtuales en la nube. Permiten resolver retos prácticos conectándose vía VPN. Cada sala simula un escenario real con vulnerabilidades específicas.
              p #[strong Ejemplo]: En TryHackMe, un estudiante accede a la sala Simple CTF donde explora una vulnerabilidad LFI (Local File Inclusion) en una web PHP simulada.

            .div(titulo="VirtualBox y VMware")
              p Herramientas para crear laboratorios locales con múltiples máquinas virtuales, redes simuladas y escenarios personalizados. Ofrecen total control sobre la configuración.
              p #[strong Ejemplo]: Se configura un laboratorio con Kali Linux como atacante, Metasploitable como víctima y un firewall simulado, todo dentro de una red virtual aislada.

            .div(titulo="Red Team / Blue Team Labs (RangeForce, Cyber Range)")
              p Plataformas que permiten simular campañas ofensivas (Red Team) y defensas activas (Blue Team). Ideales para ejercicios colaborativos y entrenamiento corporativo en tiempo real.
              p #[strong Ejemplo]: Un equipo participa en una simulación de ataque tipo ransomware, utilizando herramientas SIEM y análisis de logs para detectar y mitigar la amenaza.

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos entornos son fundamentales para entrenar habilidades ofensivas y defensivas de forma segura, adaptándose a distintos niveles de experiencia. Desde quienes comienzan en el pentesting hasta equipos profesionales en simulaciones corporativas, estas plataformas refuerzan el conocimiento técnico y preparan mejor a los especialistas ante ciberamenazas reales.

      // Bloque: anexo-img
      .bg-full-width.bg-color-5.mb-lg-5
        .px-4.p-md-5.text-white
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Simulaciones de ataques
              p.mb-4(data-aos="fade-right") Se invita a leer el documento Simulaciones de ataques, donde se aborda la importancia de recrear escenarios reales de amenazas en entornos controlados para fortalecer la seguridad informática.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Simulaciones de ataques

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/10.png', alt='')

      // Bloque: titulo-segundo
      #t_2_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.4] Pongamos en práctica

      // Bloque: imagen-texto-iconobloque 4:8
      .row.mb-2
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-left").mb-4 En este capítulo se presenta un recurso audiovisual centrado en la aplicación práctica de OWASP ZAP (Zed Attack Proxy), una herramienta de código abierto ampliamente reconocida en el ámbito del pentesting de aplicaciones web. Este video guía al estudiante a través de los primeros pasos en la configuración y ejecución básica de pruebas de seguridad, utilizando escenarios reales y entornos controlados.

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 A lo largo del material, se explora cómo OWASP ZAP puede utilizarse para analizar aplicaciones desde la perspectiva de un atacante. Se muestran tanto escaneos pasivos como activos, lo que permite detectar vulnerabilidades como inyecciones SQL, cross-site scripting (XSS), y configuraciones inseguras.

          p(data-aos="fade-left") Entre las funciones clave que se explican en el recurso se encuentran:


      .bg-full-width.bg-fondo-2.mb-0
        .px-4.px-md-5.py-5

          // Bloque: tarjetas-3
          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Escaneo automatizado de aplicaciones web
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/13.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Análisis manual de tráfico y respuestas
            .col-lg-3.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/14.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Uso del proxy para interceptar peticiones HTTP/S
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/15.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Visualización en tiempo real de vulnerabilidades detectadas

      // Bloque: texto
      h2(data-aos="fade-left").mb-4 Ejemplo aplicado

      // Bloque: bg-full-texto-imagen
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg
              p.mb-3 Ejemplo aplicado: Se configura ZAP como proxy entre el navegador y una aplicación web de prueba. Al navegar por la aplicación, ZAP intercepta las peticiones y permite analizar cabeceras, formularios y respuestas, identificando entradas no validadas y enlaces inseguros.
              p.mb-0 Este material es esencial para que el estudiante comprenda la importancia de revisar proactivamente la seguridad durante el desarrollo web. Dominar el uso de OWASP ZAP fortalece la capacidad para aplicar pruebas de penetración de forma sistemática, contribuyendo a la creación de software más seguro y resiliente frente a amenazas comunes.
            .col-lg-auto
              img(src="@/assets/curso/tema2/16.svg").mx-auto

      // Bloque: video-fondo
      //- .bg-full-width.bg-fondo-slider.mb-5
      //-   .p-4.p-md-5
      //-     figure
      //-       .video
      //-         iframe(width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque: bloque-material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Escrivá Gascó, G. (2013). Seguridad informática: ( ed.). Macmillan Iberia, S.A.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/43260" target="_blank" rel="noopener noreferrer") Seguridad informática

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=rfpEAd4W2G0" target="_blank" rel="noopener noreferrer") #DVWA#damn #vulnerable #web #application #sqlinjection #csrf #XSS #site #hacking #simulador

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema2,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
