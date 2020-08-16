<template>
  <footer>
    <div
      class="container py-8 border-t-2 border-cool-gray-400 border-opacity-25 flex items-center justify-between"
    >
      <div>
        © {{ new Date().getFullYear() }} Fundación Lorena Alejandra Gallardo
      </div>
      <ul>
        <li class="inline-flex items-center mr-4 text-lg">
          <twitter-icon size="1.25x" class="mr-1" />
          Twitter
        </li>
        <li class="inline-flex items-center mr-4 text-lg">
          <facebook-icon size="1.25x" class="mr-1" />
          Facebook
        </li>
        <li class="inline-flex items-center mr-4 text-lg">
          <instagram-icon size="1.25x" class="mr-1" />
          Instagram
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { InstagramIcon, FacebookIcon, TwitterIcon } from 'vue-feather-icons'
export default {
  components: {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon
  }
}
</script>

<style>
</style>