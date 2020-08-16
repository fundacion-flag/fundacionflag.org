<template>
  <div class="flex flex-col min-h-screen">
    <header class="z-10">
      <div class="container">
        <main-nav />
      </div>
    </header>
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainNav from '~/components/MainNav'
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
    MainNav
  },
  data() {
    return {}
  },
}
</script>

<style src="../css/main.css" />
