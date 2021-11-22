<template>
    <div>
      <v-footer color="deep-orange darken-3" class="hidden-sm-and-down py-4 white--text" >
        <div class="container">
          <!-- add footer content here -->
        </div>
      </v-footer>
      <div class="deep-orange darken-2 white--text">
        <v-row justify="space-between" no-gutters>
        <span class="ma-4">Developed By : Techminate</span>
        <span class="ma-4">Copyright © Techminate {{ new Date().getFullYear() }}</span>
        </v-row>
      </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
     
    }),
  }
</script>

<style>

</style>