<template>
    <div>
      <v-footer color="deep-orange darken-3" padless :absolute="!fixed" class="hidden-sm-and-down py-4 white--text" >
        <div class="container">
          <!-- add footer content here -->
          <v-row
            justify="center"
            no-gutters
          >
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
              rounded
              class="my-2"
            >
              {{ link }}
            </v-btn>
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
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

    }
  }
}
</script>

<style>

</style>