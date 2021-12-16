<template>
  <div>
      <!-- parent relative child absolute -->
      <v-container fluid class="bg">
        <v-row no-gutters class="pa-12">
          <v-col cols="12" sm="12" md="1" lg="2">
          </v-col>
          <v-col cols="12" sm="12" md="5" lg="4">
            <div class="pa-10 white--text text-uppercase hidden-sm-and-down">
              <p class="font-weight-medium text-h3 mt-10">Business</p>
              <p class="font-weight-medium text-h3">Inspiration</p>
              <p class="font-weight-medium text-h3 mb-10">Technology</p>
              <span class="font-weight-medium text-subtitle-1">"{ Lets Build Something Special }"</span>
            </div>
            <div class="white--text text-uppercase hidden-md-and-up">
              <p class="font-weight-medium text-h4 mt-10">Business</p>
              <p class="font-weight-medium text-h4">Inspiration</p>
              <p class="font-weight-medium text-h4 mb-10">Technology</p>
              <span class="font-weight-medium text-subtitle-1">"{ Lets Build Something Special }"</span>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="4">
            <div class="text-center">
              <span class="hidden-sm-and-down">
                <img class="self-center" alt="home" src="~/assets/home/Rectangle.png" quality="90" width="550" height="500" fit="fill" />
              </span>
              <span class="hidden-md-and-up">
                <img class="mt-5 mb-5" alt="home" src="~/assets/home/Rectangle.png" quality="90" width="300" height="350" fit="fill"/>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
.bg{
  background: linear-gradient(90deg, #FC575E 0%, #F7B42C 100%), #C4C4C4;
  border-radius: 0px 0px 300px 300px;
}
</style>
