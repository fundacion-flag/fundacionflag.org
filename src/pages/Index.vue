<template>
  <Layout class="home">
    <header
      class="bg-orange-50 border-b-2 border-orange-100 bg-repeat-x bg-center home-header"
    >
      <div class="container pt-24 pb-20 md:py-32 lg:py-40 -mt-16">
        <transition name="fadeUp">
          <h1 v-if="show" style="animation-duration: 0.3s;">
            <g-image
              immediate="true"
              class="sm:mx-auto mt-6 w-full max-w-xs md:max-w-md lg:max-w-lg"
              src="~/images/logo-full.png"
              alt="Fundación Lorena Alejandra Gallardo"
            />
          </h1>
        </transition>
        <transition name="fadeUp">
          <h2
            v-if="show"
            class="text-3xl md:text-4xl lg:text-5xl mt-8 text-cool-gray-700 leading-snug sm:text-center font-serif font-bold"
            style="animation-duration: 0.5s;"
          >
            Apoyando el potencial de las y los
            <br class="hidden xl:inline-block" />jóvenes mexicanos desde 1984.
          </h2>
        </transition>
      </div>
    </header>
    <main>
      <section class="py-12 sm:py-16 md:py-14">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div class="bg-white">
            <g-image
              fit="inside"
              height="350"
              class="mx-auto"
              src="~/images/about.png"
            />
          </div>
          <div class="prose prose-lg max-w-none self-center">
            <h2>¿Quiénes somos?</h2>
            <p>
              La Fundación Lorena Alejandra Gallardo (FLAG) es una Institución
              de Asistencia Privada que apoya el desarrollo integral de las y
              los jóvenes mexicanos universitarios con potencial de ser agentes
              de cambio, a partir de una atención personalizada.
            </p>
          </div>
        </div>
      </section>
      <!-- ¿Qué hacemos? -->
      <section class="bg-orange-50 py-12 sm:py-16 md:py-20">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div class="prose prose-lg max-w-none">
            <h2>¿Qué hacemos?</h2>
            <p>
              Nuestra misión es promover la inclusión y el pleno desarrollo de
              jóvenes mexicanos destacados, comprometidos socialmente y de
              excelencia académica, a través del apoyo económico, del
              acompañamiento individual y de la formación de comunidades en las
              generaciones y entre generaciones de personas apoyadas.
            </p>
            <p>
              El programa de becas de la FLAG tiene una duración de dos años.
              Nuestros esfuerzos están dirigidos a apoyar a estudiantes
              universitarios cuyas familias se encuentran en situación de
              necesidad económica. Al disminuir las cargas financieras de las y
              los participantes de nuestro programa, y al darles atención
              personalizada, potenciamos la capacidad de para lograr sus metas
              educativas y personales.
            </p>
          </div>
          <div class="space-y-10 self-center">
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-1">
                <g-image src="~/images/grad_icon.png" width="100px" />
              </div>
              <div class="col-span-4 prose">
                <h3>Becar</h3>
                <p>
                  Cada persona apoyada recibe una beca mensual para gastos de
                  manutención.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-1">
                <g-image src="~/images/together_icon.png" width="100px" />
              </div>
              <div class="col-span-4 prose">
                <h3>Acompañar</h3>
                <p>
                  Impulsamos el crecimiento personal con citas individuales de
                  seguimiento una vez al mes.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-5 gap-4">
              <div class="col-span-1">
                <g-image src="~/images/light_icon.png" width="100px" />
              </div>
              <div class="col-span-4 prose">
                <h3>Potenciar</h3>
                <p>
                  Creamos una comunidad diversa, en la cual las y los jóvenes
                  desarrollan sus capacidades, aprenden nuevas herramientas y
                  encuentran apoyo entre sí.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Nuestra historia -->
      <section
        class="container py-12 sm:py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20"
      >
        <div>
          <VueCompareImage
            class="rounded-lg overflow-hidden"
            :hover="true"
            :leftImage="require(`~/images/yesterday.png`)"
            :rightImage="require(`~/images/today.png`)"
          />
        </div>
        <div class="prose prose-lg max-w-none">
          <h2>Nuestra historia</h2>
          <p>
            La FLAG se creó en 1984 por iniciativa de Don Juan Gallardo y su
            familia para perpetuar la memoria de su hija Lorena Alejandra, quien
            falleció a temprana edad. Somos la primera institución de asistencia
            privada en México dedicada a brindar apoyo económico a estudiantes
            de educación superior.
          </p>
          <p>
            Nuestros fundadores estaban convencidos de que la educación es un
            derecho fundamental y un instrumento clave para construir un mejor
            país. Ésa misma convicción sigue viva en la FLAG hoy en día.
          </p>
          <p>
            Durante 36 años, hemos tenido el privilegio de acompañar a nuevas
            generaciones de estudiantes brillantes y comprometidos a construir
            un México mejor.
          </p>
        </div>
      </section>
      <section>
        <div class="text-center -mb-20 pt-8 relative z-10">
          <h2 class="text-4xl font-bold -mb-24 text-white relative z-10">
            Testimonios
          </h2>
          <g-image class="mx-auto w-64" src="~/images/blob.png" />
        </div>
        <carousel
          loop="true"
          perPage="1"
          autoplayTimeout="5000"
          :navigationEnabled="true"
          :paginationEnabled="false"
          :adjustableHeight="true"
        >
          <slide class="bg-blue-50">
            <div class="container h-full flex items-center">
              <div>
                <p class="quote">
                  “Tuve el privilegio de conocer personalmente a Don Juan
                  Gallardo, de escuchar por qué abrió la Fundación, pero sobre
                  todo qué esperaba de las y los jóvenes becarios, y era un
                  apasionado del compromiso por el país. Nos quería activos,
                  comprometidos en la acción cotidiana, haciendo mil cosas al
                  mismo tiempo, no sólo buenos estudiantes, sino ciudadanos y
                  ciudadanas involucradas en el cambio.”
                </p>
                <span class="author">Elsa, generación '86</span>
              </div>
            </div>
          </slide>
          <slide class="bg-orange-50">
            <div class="container h-full flex items-center">
              <div>
                <p class="quote">
                  “La FLAG vino a enriquecer mi mirada y a abrir un mundo de
                  posibilidades. Cada junta, reunión o capacitación que teníamos
                  significaba una gran experiencia de aprendizaje. La
                  convivencia con la diversidad de opiniones, formas de pensar y
                  actuar de mis compañeros siempre fue muy rica e interesante.
                  Aprendí a valorar la posibilidad que tengo como ser humano de
                  dar. ¡Gracias FLAG!”
                </p>
                <p class="author">Francisco, generación ‘91</p>
              </div>
            </div>
          </slide>
          <slide class="bg-blue-50">
            <div class="container h-full flex items-center">
              <div>
                <p class="quote">
                  “La beca de la FLAG no sólo es económica sino una aportación a
                  formarnos como personas. Gracias a la Fundación, una serie de
                  estudiantes que estamos esparcidos por diversas instituciones
                  podemos conocernos, dialogar, construir juntos algo hacia el
                  futuro. Para mí es un honor haber sido becario de la FLAG.”
                </p>
                <p class="author">Rogelio, generación ‘10</p>
              </div>
            </div>
          </slide>
          <slide class="bg-orange-50">
            <div class="container h-full flex items-center">
              <div>
                <p class="quote">
                  “Sin duda FLAG ha impactado positivamente en mi vida. Me ha
                  brindado apoyo, asesoría y motivación por parte de Julie,
                  Moni, Dámaris y el resto del equipo. En las reuniones
                  mensuales individuales siempre muestran interés por mi vida,
                  no solo escolar sino personal. Y las pláticas grupales me han
                  permitido ir creando un mayor panorama de la vida. Sin duda
                  una gran experiencia que antes de iniciar mi estancia no
                  imaginaba.”
                </p>
                <p class="author">María Fernanda, generación ‘20</p>
              </div>
            </div>
          </slide>
        </carousel>
      </section>
    </main>
  </Layout>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import VueCompareImage from 'vue-compare-image/src/VueCompareImage.vue';
export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Carousel,
    Slide,
    VueCompareImage
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

<style lang="postcss">
.VueCarousel .container {
  @apply pt-32 pb-20;
}
.VueCarousel-navigation-button {
  @apply hidden;
}
@screen lg {
  .VueCarousel-navigation-prev {
    transform: translateY(-50%) translateX(90%) !important;
  }
  .VueCarousel-navigation-next {
    transform: translateY(-50%) translateX(-90%) !important;
  }
  .VueCarousel-navigation-button {
    @apply inline-block bg-orange-200 opacity-75 h-16 w-16 rounded-full text-cool-gray-500 !important;
  }
  .VueCarousel-navigation-button:not(.VueCarousel-navigation--disabled):hover {
    @apply bg-orange-300 opacity-100 !important;
  }
}
.VueCarousel-slide-adjustableHeight {
  display: block !important;
}
.VueCarousel-inner {
  align-items: flex-start !important;
}

.quote {
  @apply text-xl font-serif italic;
}
.author {
  &:before {
    content: "―";
    @apply mr-2;
  }
  @apply inline-block text-lg font-bold mt-4;
}
@screen md {
  .quote {
    @apply text-2xl;
  }
  .author {
    @apply text-xl;
  }
}
@screen lg {
  .quote {
    @apply text-3xl;
  }
  .author {
    @apply text-2xl;
  }
}
</style>

