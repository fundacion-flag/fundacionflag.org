<template>
  <Layout>
    <header
      class="bg-center bg-repeat-x border-b-2 border-orange-100 bg-orange-50"
    >
      <div
        class="container pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 -mt-14 lg:-mt-16"
      >
        <transition name="fadeUp">
          <h1
            v-if="show"
            class="mt-8 font-serif text-3xl font-bold leading-snug text-center md:text-4xl lg:text-5xl text-cool-gray-700"
            style="animation-duration: 0.3s;"
          >
            Programa de becas y acompañamiento FLAG
          </h1>
        </transition>
      </div>
    </header>
    <section>
      <div
        class="container grid grid-cols-1 gap-10 py-16 lg:grid-cols-2 md:gap-20"
      >
        <div>
          <g-image class="rounded" src="~/images/postula.png" />
        </div>
        <div>
          <div class="prose prose-lg max-w-none">
            <h2>Acerca del programa</h2>
            <p>
              El programa de becas y acompañamiento de la FLAG tiene el objetivo de apoyar la permanencia y conclusión de la educación superior de jóvenes de alto rendimiento académico, provenientes de familias en situación de necesidad económica.
            </p>
            <p>
              Durante los dos años de duración del programa, impulsamos el desarrollo académico, personal y profesional de las y los jóvenes estudiantes. Buscamos crear un entorno que les permita continuar destacando académicamente, desarrollar sus fortalezas y metas, priorizar su salud mental y emocional, construir relaciones significativas y tener acceso a nuevas oportunidades.
            </p>
            <p>
              Las personas que participan en  el programa de la FLAG reciben una beca de manutención mensual y asesoramiento personal, además de participar en actividades grupales de formación y desarrollo de habilidades con una comunidad diversa de compañeras/os y exbecarias/os.
            </p>
            <g-image src="~/images/sep.png" width="200" />
            <p>
              Antes de llenar la solicitud en línea, lee cuidadosamente la convocatoria y ten preparados los documentos solicitados.
            </p>
          </div>
          <div
            class="px-8 py-6 mt-6 border-2 border-orange-100 rounded-lg bg-orange-50"
          >
            <a
              class="mb-4 mr-4 button-secondary sm:mb-0"
              href="/files/convocatoria-flag-2022.pdf"
              target="_blank"
            >
              <download-icon size="1x" class="mr-2" />
              Descarga la convocatoria
            </a>
            <a
              class="button-primary"
              href="https://www.cognitoforms.com/FLAG2/Convocatoria2022"
              target="_blank"
            >
              <edit-3-icon size="1x" class="mr-2"></edit-3-icon>
              Registra tu solicitud
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 bg-orange-50">
      <div class="container grid grid-cols-1 gap-10 lg:grid-cols-2 md:gap-20">
        <div class="prose prose-lg">
          <h2>Requisitos</h2>
          <ul>
            <li>
              <p>
                Ser estudiante en sistema escolarizado de cualquier carrera. Matriculada/o en una institución de educación superior ubicada en la Ciudad de México o área metropolitana, tanto públicas como privadas.
              </p>
              <p>
                En caso de estudiar en una universidad privada, es necesario contar con una beca o financiamiento que cubra un mínimo del 80% de la colegiatura.
              </p>
            </li>
            <li>
              Cursar entre el 3er y 7mo semestre (o equivalente) de su programa de estudios de licenciatura.
            </li>
            <li>Acreditar un promedio acumulado mínimo de 9.0 hasta el periodo inmediato anterior.</li>
            <li>Tener necesidad económica comprobable.</li>
            <li>Tener nacionalidad mexicana.</li>
            <li>Tener entre 18 y 23 años.</li>
            <li>Estado civil soltero.</li>
            <li>Poseer habilidades de liderazgo, iniciativa y un gran interés y compromiso con su comunidad. </li>
          </ul>
        </div>
        <div class="prose prose-lg">
          <h2>Proceso de selección</h2>
          <ol>
            <li>
              <p>
                <span class="font-bold">Primera etapa.</span> Para postularse al programa, las y los interesados que cumplan con todos los requisitos deberán llenar una solicitud en línea y enviar un video de presentación personal durante el periodo de recepción de registros.
              </p>
            </li>
            <li>
              <p>
                <span class="font-bold">Segunda etapa.</span> Las y los candidatos que se seleccionen en la primera etapa tendrán una primera entrevista por videollamada.
              </p>
            </li>
            <li>
              <p>
                <span class="font-bold">Tercera etapa.</span> Las y los candidatos seleccionados en la segunda etapa tendrán una segunda entrevista y deberán presentar la documentación que se les solicite.
              </p>
            </li>
            <li>
              <p>Los resultados finales se comunicarán a las y los candidatos a través de correo electrónico.</p>
            </li>
          </ol>
          <p>
            Para más información consulta la convocatoria vigente.
          </p>
        </div>
      </div>
      <div class="container text-center">
        <div
          class="px-8 py-6 mt-10 text-lg bg-white border-2 border-orange-100 md:inline-block"
        >
          ¿Tienes dudas?
          <g-link to="/contacta">Comunícate con nosotros.</g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { DownloadIcon, Edit3Icon } from 'vue-feather-icons'
export default {
  components: {
    DownloadIcon,
    Edit3Icon
  },
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

<style lang="postcss" scoped>
.prose ul > li::before {
  background-color: theme("colors.orange.400") !important;
}
</style>