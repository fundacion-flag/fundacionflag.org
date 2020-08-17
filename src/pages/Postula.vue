<template>
  <Layout>
    <header class="bg-orange-50 bg-repeat-x bg-center">
      <div class="container pt-24 pb-20 md:py-32 lg:pt-32 lg:pb-24 -mt-16">
        <transition name="fadeUp">
          <h1
            v-if="show"
            class="text-3xl md:text-4xl lg:text-5xl mt-8 text-cool-gray-700 leading-snug sm:text-center font-serif font-bold"
            style="animation-duration: 0.3s;"
          >
            Convocatoria 2020
          </h1>
        </transition>
      </div>
    </header>
    <section>
      <div class="container py-16">
        <div class="prose prose-lg max-w-none">
          <h2>Acerca del programa</h2>
          <p>
            El programa de becas y acompañamiento FLAG tiene el objetivo de
            apoyar la permanencia y conclusión de la educación superior de
            jóvenes de alto rendimiento académico provenientes de familias en
            situación de necesidad económica.
          </p>
          <p>
            Durante los dos años de duración del programa (iniciando en enero de
            2021 y concluyendo en diciembre 2022) , las y los estudiantes
            seleccionados recibirán una beca de manutención y seguimiento
            personalizado, además de participar en actividades grupales de
            formación.
          </p>
          <p>
            Antes de llenar la solicitud en línea, lee cuidadosamente la
            convocatoria y ten preparados los documentos solicitados. Recuerda
            que la fecha límite para registrar tu postulación es el 13 de
            septiembre del a las 23:59 hrs.
          </p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style>
</style>