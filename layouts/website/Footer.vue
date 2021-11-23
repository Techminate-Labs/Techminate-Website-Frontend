<template>
    <div>
      <v-footer color="deep-orange darken-3" padless :absolute="!fixed" class="py-4 white--text" >
        <div class="container">
          <!-- add footer content here -->
          <v-row>
              <v-col cols="12" sm="12" md="3" lg="3">
                <h3 class="mb-2">Community</h3>
                <span class="d-block">Donate</span>
                <span>Donate</span>
              </v-col>
              <v-col cols="12" sm="12" md="3" lg="3">
                <h3 class="mb-2">Useful Links</h3>
                <span class="d-block">Donate</span>
                <span>Donate</span>
              </v-col>
              <v-col cols="12" sm="12" md="3" lg="3">
                <h3 class="mb-2">Resources</h3>
                <span class="d-block">Donate</span>
                <span>Donate</span>
              </v-col>
              <v-col cols="12" sm="12" md="3" lg="3">
                <h3 class="mb-2">Others</h3>
                <span class="d-block">Donate</span>
                <span>Donate</span>
              </v-col>
          </v-row>
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
  data () {
    return {
      fixed: true,
    }
  }
}
</script>

<style>

</style>