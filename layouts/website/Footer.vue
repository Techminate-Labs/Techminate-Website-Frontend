<template>
    <div>
        <v-footer class="hidden-sm-and-down py-4 white--text" >
            <div class="container">
                <v-row
                justify="center"
                no-gutters
                >
                  <nuxt-link to="/" style="text-decoration: none;"><v-btn color="white" text rounded>Home</v-btn></nuxt-link>
                  <nuxt-link to="/about" style="text-decoration: none;"><v-btn color="white" text rounded>About</v-btn></nuxt-link>
                  <nuxt-link to="/service" style="text-decoration: none;"><v-btn color="white" text rounded>Services</v-btn></nuxt-link>
                  <nuxt-link to="/portfolio" style="text-decoration: none;"><v-btn color="white" text rounded>Portfolio</v-btn></nuxt-link>
                  <nuxt-link to="/testimonial" style="text-decoration: none;"><v-btn color="white" text rounded>Testimonial</v-btn></nuxt-link>
                  <nuxt-link to="/team" style="text-decoration: none;"><v-btn color="white" text rounded>Team</v-btn></nuxt-link>
                  <nuxt-link to="/contact" style="text-decoration: none;"><v-btn color="white" text rounded>Contact</v-btn></nuxt-link>
                </v-row>
            </div>
        </v-footer>
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
