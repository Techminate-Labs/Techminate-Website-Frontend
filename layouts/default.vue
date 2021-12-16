<template>
  <v-app>
    <Navbar />
    <v-main>
      <div class="orange lighten-5">
        <Nuxt />
      </div>
    </v-main>
    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '../layouts/website/Navbar.vue'
import MobileMenu from '@/components/website/menu/MobileMenu.vue'
import Footer from '../layouts/website/Footer.vue'
export default {
  components: {
    Navbar,
    MobileMenu,
    Footer
  },
  data () {
    return {
      showMobileMenu: false,
      showCart: false,
    }
  }
}
</script>
<style>
  a {
    text-decoration: none;
  }
</style>