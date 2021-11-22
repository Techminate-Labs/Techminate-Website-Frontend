<template>
    <v-container fluid>
        <v-row class="">
            <v-col cols="12" sm="12" md="6" lg="6">
                <div class="text-center">
                    <span class="hidden-sm-and-down">
                        <img class="mt-15" src="~/assets/about/about.png" quality="90" width="620" height="500" fit="fill"/>
                    </span>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="5">
                <div class="hidden-sm-and-down">
                    <p class="font-weight-medium text-h5 mt-10">About US</p>
                    <p class="mt-5">
                        Techminate is a team of experienced software developers.
                        We are expert on SaaS, stand alone applications and unique website creation.
                        Including the best business software solutions, we provide e-commerce app, 
                        point of sales, digital marketing services, accounting and investment software solutions.
                        We've team to provide 24/7 technical support.
                        Lets build something special.
                    </p>
                    <p class="text-h6 mt-4">We are specialized on:</p>
                    <div class="mt-2">
                        <span v-for="(item, index) in items" :key="index">
                            <p>* {{ item.subtitle }}</p>
                        </span>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

  data(){
    return{
        items: [
        { "subtitle": 'Blockchain Development'},
        { "subtitle": 'Web & Mobile App Development'},
        { "subtitle": 'UI / UX Design'},
        { "subtitle": 'Digital Marketing'}
      ],
     
    }
  }
}
</script>

<style scoped>

</style>
