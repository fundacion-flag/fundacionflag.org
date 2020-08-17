<template>
  <nav
    class="flex items-center justify-between border-b-2 border-cool-gray-400 border-opacity-25 py-4"
  >
    <g-link to="/">
      <g-image src="~/images/logo-orange.png" width="35" />
    </g-link>
    <ul class="menu-items">
      <li class="inline-block text-lg" v-for="link in links">
        <g-link :to="link.to">
          {{ link.text }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      links: [
        {
          text: 'Conoce',
          to: '/'
        },
        {
          text: 'Postula',
          to: 'postula',
        },
        {
          text: 'Contacta',
          to: '/contacta'
        },
        // {
        //   text: 'Dona',
        //   to: '/dona'
        // }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
li:not(:last-of-type) {
  margin-right: theme("spacing.3");
}
li:not(:last-of-type)::after {
  content: "·";
  margin-left: theme("spacing.3");
  color: theme("colors['cool-gray'].500");
}
</style>