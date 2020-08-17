<template>
  <div class="bg-orange-50 h-screen flex md:items-center justify-center">
    <div
      class="border-2 border-orange-200 md:rounded py-12 px-12 md:bg-white md:text-center"
    >
      <h1 class="text-3xl font-serif font-bold">
        Success! We will get back to you as soon as possible.
      </h1>
      <span class="inline-block mt-4">
        If you are not redirected, please
        <g-link class="font-normal" to="/">click to go go back home</g-link>.
      </span>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    setTimeout( () => this.$router.push({ path: '/'}), 6000);
  }
}
</script>

<style>
</style>