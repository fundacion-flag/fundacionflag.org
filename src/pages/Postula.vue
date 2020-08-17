<template>
  <Layout>
    <header
      class="bg-orange-50 border-b-2 border-orange-100 bg-repeat-x bg-center"
    >
      <div
        class="container pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 -mt-14 lg:-mt-16"
      >
        <transition name="fadeUp">
          <h1
            v-if="show"
            class="text-3xl md:text-4xl lg:text-5xl mt-8 text-cool-gray-700 leading-snug text-center font-serif font-bold"
            style="animation-duration: 0.3s;"
          >
            Convocatoria 2020
          </h1>
        </transition>
      </div>
    </header>
    <section>
      <div
        class="container py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
      >
        <div>
          <g-image class="rounded" src="~/images/postula.png" />
        </div>
        <div>
          <div class="prose prose-lg max-w-none">
            <h2>Acerca del programa</h2>
            <p>
              El programa de becas y acompañamiento FLAG tiene el objetivo de
              apoyar la permanencia y conclusión de la educación superior de
              jóvenes de alto rendimiento académico, provenientes de familias en
              situación de necesidad económica.
            </p>
            <p>
              Durante los dos años de duración del programa (iniciando en enero
              de 2021 y concluyendo en diciembre 2022), las y los estudiantes
              seleccionados recibirán una beca de manutención y seguimiento
              personalizado, además de participar en actividades grupales de
              formación.
            </p>
            <g-image src="~/images/sep.png" width="200" />
            <p>
              Antes de llenar la solicitud en línea, lee cuidadosamente la
              convocatoria y ten preparados los documentos solicitados. Recuerda
              que la fecha límite para registrar tu postulación es el 13 de
              septiembre a las 23:59 hrs.
            </p>
          </div>
          <div
            class="mt-6 py-6 px-8 bg-orange-50 border-orange-100 border-2 rounded-lg"
          >
            <a
              class="button-secondary mb-4 sm:mb-0 mr-4"
              href="/files/convocatoria-flag-2020.pdf"
              target="_blank"
            >
              <download-icon size="1x" class="mr-2" />
              Descarga la convocatoria
            </a>
            <a
              class="button-primary"
              href="https://www.cognitoforms.com/FLAG2/Convocatoria2020"
              target="_blank"
            >
              <edit-3-icon size="1x" class="mr-2"></edit-3-icon>
              Registra tu solicitud
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-orange-50 py-16">
      <div class="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
        <div class="prose prose-lg">
          <h2>Requisitos</h2>
          <ul>
            <li>
              <p>
                Ser estudiante de cualquier carrera, matriculado en una
                institución de educación superior de la Ciudad de México o área
                metropolitana, tanto públicas como privadas.
              </p>
              <p>
                En caso de estudiar en una universidad privada, es necesario
                contar con una beca o financiamiento que cubra un mínimo del 80%
                de la colegiatura.
              </p>
            </li>
            <li>
              Cursar entre el 3er y 6to semestre (o equivalente) de su programa
              de estudios de licenciatura.
            </li>
            <li>Acreditar un promedio acumulado mínimo de 9.0.</li>
            <li>Tener nacionalidad mexicana.</li>
            <li>Tener entre 18 y 23 años.</li>
            <li>Ser soltero.</li>
            <li>Tener necesidad económica comprobable.</li>
            <li>Poseer liderazgo, compromiso e iniciativa.</li>
          </ul>
        </div>
        <div class="prose prose-lg">
          <h2>Proceso de selección</h2>
          <ol>
            <li>
              <p>
                Para postularse al programa, las/los interesadas/os que cumplan
                con todos los requisitos deberán llenar la solicitud en línea y
                enviar un video de presentación personal.
              </p>
              <p class="italic">
                <span class="inline-block w-full">
                  Fechas: 17 de agosto al 13 de septiembre
                </span>
                <span class="inline-block w-full">
                  Resultados preliminares: 18 de septiembre
                </span>
              </p>
            </li>
            <li>
              <p>
                Las/los candidatas/os que se seleccionen en la primera etapa
                completarán un estudio socioeconómico y tendrán una entrevista
                por videollamada.
              </p>
              <p class="italic">
                <span class="inline-block w-full">
                  Fechas: 28 de septiembre al 23 de octubre
                </span>
                <span class="inline-block w-full">
                  Resultados preliminares: 28 de octubre
                </span>
              </p>
            </li>
            <li>
              <p>
                Las/los candidatas/os aprobados en la segunda etapa tendrán una
                segunda entrevista y deberán presentar la documentación que se
                les solicite.
              </p>
              <p class="italic">
                <span class="inline-block w-full">
                  Fechas: 2 de noviembre al 27 de noviembre
                </span>
                <span class="inline-block w-full">
                  Resultados finales: 11 de diciembre
                </span>
              </p>
            </li>
          </ol>
          <p>
            Al concluir cada etapa del proceso de selección, se comunicarán los
            resultados a través de correo electrónico.
          </p>
        </div>
      </div>
      <div class="container text-center">
        <div
          class="md:inline-block mt-10 text-lg bg-white border-2 border-orange-100 py-6 px-8"
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