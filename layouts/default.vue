<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <NuxtLink to="/" class="mr-2">
        <v-img alt="logo" src="https://buddypress.org/media/disc.png" width="40px" height="40px"
  contain></v-img>
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/" class="ma-5">
        <span class="grey--text">Home</span>
      </NuxtLink>
      <NuxtLink to="/whychooseus" class="ma-5">
        <span class="grey--text">Why choose us ?</span>
      </NuxtLink>
      <NuxtLink to="/portfolio" class="ma-5">
        <span class="grey--text">Portfolio</span>
      </NuxtLink>
      <NuxtLink to="/team" class="ma-5">
        <span class="grey--text">Team</span>
      </NuxtLink>
      <NuxtLink to="/store" class="ma-5">
        <span class="grey--text">store</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="ma-5">
        <span class="grey--text">Contact</span>
      </NuxtLink>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <!-- Footer -->
      <Footer />
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-row
        justify="space-between"
        no-gutters
      >
        <strong>Powered By : Techminate</strong>
        <strong>Copyright@Techminate {{ new Date().getFullYear() }} </strong>
      </v-row>
    </v-footer>

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
      fixed: false,
    }
  }
}
</script>
<style>
  a {
    text-decoration: none;
  }
</style>