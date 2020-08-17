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
            Contacta
          </h1>
        </transition>
      </div>
    </header>
    <section>
      <div class="container">
        <form
          name="contact"
          method="post"
          v-on:submit.prevent="handleSubmit"
          action="/success/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <div class="sender-info">
            <div>
              <label for="name" class="label">Nombre</label>
              <input type="text" name="name" v-model="formData.name" required />
            </div>
            <div class="mt-4">
              <label for="email">Correo electrónico</label>
              <input
                type="email"
                name="email"
                v-model="formData.email"
                required
              />
            </div>
          </div>

          <div class="message-wrapper mt-4">
            <label for="message">Mensaje</label>
            <textarea
              name="message"
              v-model="formData.message"
              required
            ></textarea>
          </div>

          <button class="mt-4" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
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
label {
  @apply block mb-2 text-sm font-bold text-gray-900;
}
input,
textarea {
  @apply appearance-none inline-flex text-gray-700 leading-6 border-t-2 border-r-2 border-b-2 border-l-2 border-gray-400 text-base py-2 px-3 rounded;
  &:focus {
    @apply outline-none bg-white border-orange-400 outline-none shadow-outline-orange;
  }
}
button {
  @apply inline-flex items-center border-2 justify-center rounded-l-md rounded-r-md font-bold leading-6 border-transparent text-gray-900 bg-orange-400 text-base py-2 px-3;
  &:hover {
    @apply bg-orange-300;
  }
  &:focus {
    @apply bg-orange-100 shadow-outline outline-none;
  }
  &:active {
    @apply bg-orange-400;
  }
}
</style>