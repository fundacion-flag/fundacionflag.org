<template>
  <footer>
    <div
      class="container py-8 border-t-2 border-cool-gray-400 border-opacity-25 flex items-center justify-between"
    >
      <div>
        © {{ new Date().getFullYear() }} Fundación Lorena Alejandra Gallardo
      </div>
      <ul>
        <li class="inline-block mr-4 text-lg">
          <a
            class="inline-flex items-center"
            href="https://twitter.com/fundacionflag"
            target="_blank"
          >
            <twitter-icon size="1.25x" class="mr-1" />
            Twitter
          </a>
        </li>
        <li class="inline-block mr-4 text-lg">
          <a
            class="inline-flex items-center"
            href="https://www.facebook.com/fundacionflag"
            target="_blank"
          >
            <facebook-icon size="1.25x" class="mr-1" />
            Facebook
          </a>
        </li>
        <li class="inline-block mr-4 text-lg">
          <a
            class="inline-flex items-center"
            href="https://www.instagram.com/fundacionflag/"
            target="_blan"
          >
            <instagram-icon size="1.25x" class="mr-1" />
            Instagram
          </a>
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