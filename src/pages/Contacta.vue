<template>
  <Layout>
    <header
      class="bg-center bg-repeat-x border-b-2 bg-cool-gray-50 border-cool-gray-200"
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
            Contacta
          </h1>
        </transition>
      </div>
    </header>
    <section class="py-16">
      <div class="container grid grid-cols-1 gap-10 lg:grid-cols-2 md:gap-20">
        <div
          class="px-6 py-6 border-2 border-orange-100 rounded-lg bg-orange-50 md:py-12 md:px-12"
        >
          <form
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div class="mb-10 prose prose-lg">
              <h2>Mensajes</h2>
              <p>
                Déjanos tus datos y nos comunicaremos contigo a la brevedad.
              </p>
            </div>
            <g-image class="mb-6" src="~/images/sep.png" width="200px" />
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label> Don’t fill this out: <input name="bot-field" /> </label>
            </p>
            <div class="sender-info">
              <div>
                <label for="name" class="label">Nombre</label>
                <input
                  class="w-full"
                  type="text"
                  name="name"
                  v-model="formData.name"
                  required
                />
              </div>
              <div class="mt-6">
                <label for="email">Correo electrónico</label>
                <input
                  class="w-full"
                  type="email"
                  name="email"
                  v-model="formData.email"
                  required
                />
              </div>
            </div>

            <div class="mt-6 message-wrapper">
              <label for="message">Mensaje</label>
              <textarea
                class="w-full"
                name="message"
                v-model="formData.message"
                rows="8"
                required
              ></textarea>
            </div>

            <button class="mt-4 button-secondary" type="submit">Enviar</button>
          </form>
        </div>
        <div
          class="px-6 py-6 prose prose-lg border-2 border-gray-200 rounded-lg max-w-none bg-cool-gray-50 md:py-12 md:px-12"
        >
          <h2>Información de contacto</h2>
          <g-image class="mb-6" src="~/images/sep.png" width="200px" />
          <ul>
            <li>
              <h3>
                Dirección
              </h3>
              <p>
                Monte Cáucaso 915, oficina 304<br />
                Lomas de Chapultepec V Secc 11000<br />
                Ciudad de México, México
              </p>
              <p>
                <a
                  class="flex items-center"
                  href="https://goo.gl/maps/7PM2EB91jpdjxRT97"
                  target="_blank"
                >
                  <external-link-icon size="1x" class="mr-2" />
                  Google Maps
                </a>
              </p>
            </li>
            <li>
              <h3>
                Email
              </h3>
              <p>
                <a
                  class="flex items-center"
                  href="mailto:contacto@fundacionflag.org"
                >
                  <div style="width: 18px;" class="mr-2">
                    <mail-icon size="1x" />
                  </div>
                  contacto@fundacionflag.org
                  </a>
              </p>
            </li>
            <li>
              <h3>
                Teléfono
              </h3>
              <p>
                <div class="flex items-start px-4 py-3 mb-2 text-sm text-orange-500 border-2 border-orange-400 rounded bg-orange-50">
                  <div class="mt-2 mr-2 text-orange-500">
                    <AlertTriangleIcon size="1.5x" />
                  </div>
                  <div>
                    Hasta nuevo aviso nuestro equipo trabajará de manera virtual. Contáctanos mandando un mensaje.
                  </div>
                </div>
                <a class="flex items-center" href="tel:55208522">
                  <phone-icon size="1x" class="mr-2" />
                  55208522</a
                >
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { ExternalLinkIcon, MailIcon, PhoneIcon, AlertTriangleIcon} from 'vue-feather-icons'
export default {
  components: {
    ExternalLinkIcon,
    MailIcon,
    PhoneIcon,
    AlertTriangleIcon
  },
  data() {
    return {
      show: false,
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
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