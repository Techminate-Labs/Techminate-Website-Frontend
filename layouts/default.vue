<template>
  <v-app>
    <v-app-bar fixed app color="rgba(241, 90, 34, 1)" flat>
      <img class="self-center" alt="logo" src="~/assets/logo/logo_white.png" width="180px" height="38px" contain />
      <v-spacer></v-spacer>
      <NuxtLink to="/" class="ma-3">
        <span class="white--text">Home</span>
      </NuxtLink>
      <NuxtLink to="/whychooseus" class="ma-3">
        <span class="white--text">Why choose us ?</span>
      </NuxtLink>
      <NuxtLink to="/service" class="ma-3">
        <span class="white--text">Services</span>
      </NuxtLink>
      <NuxtLink to="/portfolio" class="ma-3">
        <span class="white--text">Portfolio</span>
      </NuxtLink>
      <NuxtLink to="/team" class="ma-3">
        <span class="white--text">Team</span>
      </NuxtLink>
      <NuxtLink to="/job" class="ma-3">
        <span class="white--text">Job</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="ma-3">
        <span class="white--text">Contact</span>
      </NuxtLink>
    </v-app-bar>
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
import Footer from '../layouts/website/Footer.vue'
export default {
  components: {
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