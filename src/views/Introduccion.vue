<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Introducción'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: color-texto-imagen 8:4
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 En el ámbito de la seguridad de software, identificar y mitigar vulnerabilidades antes de que sean explotadas por atacantes es una prioridad esencial. Esta unidad introduce al estudiante en el campo de las pruebas de seguridad, un conjunto de prácticas destinadas a evaluar la robustez de las aplicaciones frente a posibles amenazas. A través de métodos controlados y éticos, como las pruebas de penetración y las simulaciones de ataques, se busca exponer debilidades reales que podrían comprometer la confidencialidad, integridad o disponibilidad de los sistemas.
          
          p(data-aos="fade-left") El estudio de esta unidad permite comprender cómo se aplican enfoques ofensivos para fortalecer defensas, adoptando la mentalidad de un atacante para mejorar la postura de seguridad de una organización. Además, se profundiza en el uso de herramientas especializadas como OWASP ZAP, ampliamente reconocidas en el análisis automatizado de vulnerabilidades en aplicaciones web. Estas herramientas no solo aceleran el proceso de evaluación, sino que también estandarizan la detección de errores comunes, como inyecciones SQL, scripts maliciosos o errores de configuración.
        .col-lg-4
          figure
            img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")

      // Bloque: bg-full-icono-texto
      .bg-full-width.bg-color-3.mb-0
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              p.mb-0 Dominar estas técnicas es crucial en entornos donde la seguridad es un factor determinante para la confianza del usuario y el cumplimiento normativo. Desde plataformas bancarias hasta servicios de salud, los sistemas modernos requieren pruebas rigurosas que anticipen posibles vectores de ataque. Por ello, se explorarán diversos escenarios prácticos en los que los estudiantes aprenderán a ejecutar pruebas éticas, analizar resultados y proponer medidas correctivas eficaces.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
