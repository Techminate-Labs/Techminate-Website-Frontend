<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <NuxtLink to="/" class="mr-2">
        Logo
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/" class="ma-5">
        <span class="grey--text">Home</span>
      </NuxtLink>
      <NuxtLink to="/about" class="ma-5">
        <span class="grey--text">About</span>
      </NuxtLink>
      <NuxtLink to="/portfolio" class="ma-5">
        <span class="grey--text">Portfolio</span>
      </NuxtLink>
      <NuxtLink to="/team" class="ma-5">
        <span class="grey--text">Team</span>
      </NuxtLink>
      <NuxtLink to="/contact" class="ma-5">
        <span class="grey--text">Contact</span>
      </NuxtLink>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
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
export default {
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