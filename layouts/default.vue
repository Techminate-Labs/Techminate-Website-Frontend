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
import Footer from '../layouts/website/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
  a {
    text-decoration: none;
  }
</style>