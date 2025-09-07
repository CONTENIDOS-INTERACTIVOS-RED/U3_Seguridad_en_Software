<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Implementación de feedback continuo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      // Bloque: video-fondo
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/JxrZwg_oN5Y?si=isKAGQhWJQ6jrcgv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario que ampliará sus conocimientos sobre implementación de feedback continuo.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/28569" target="_blank" rel="noopener noreferrer") Clery Aguirre, A. G. (2009). Aplicación y uso del sistema Kanban para lograr la eficiencia operativa de una empresa. El Cid Editor | apuntes.
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=-hoki2YPHQw" target="_blank" rel="noopener noreferrer") Evolution4All. (2019). Agile Retrospectives: Feedback Door Exercise [video].YouTube.
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema3,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
