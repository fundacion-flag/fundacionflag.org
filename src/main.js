// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import 'vue2-animate/dist/vue2-animate.min.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Gridsome Portfolio Starter'
  })

  head.meta.push({
    name: 'author',
    content: 'Andre Madarang'
  })

  head.link.push({
    rel: 'dns-prefetch',
    href: '//fonts.googleapis.com',
  })

  head.link.push({
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com/',
    crossorigin: "use-credentials"
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300&family=Lora:ital,wght@0,400;0,500;0,700;1,400&display=swap'
  })
}


