<template>
  <div>
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
     
      <NuxtLink to="/contact" class="ma-3">
        <span class="white--text">Contact</span>
      </NuxtLink>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>