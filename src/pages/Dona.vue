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
            Dona
          </h1>
        </transition>
      </div>
    </header>
    <section>
      <div class="container">
        Coming Soon
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