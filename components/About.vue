<template>
    <v-container fluid>
        <v-row class="">
            <v-col cols="12" sm="12" md="6" lg="6">
                <div class="text-center">
                    <span class="hidden-sm-and-down">
                        <v-img class="mt-15" src="https://us.123rf.com/450wm/puhhha/puhhha1802/puhhha180200824/96381596-it-office-people-working-at-open-workplace-group-of-programmers-working-together-on-project-programm.jpg?ver=6" width="726" height="500"></v-img>
                    </span>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="5">
                <div class="text-uppercase hidden-sm-and-down">
                    <p class="font-weight-medium text-h5 mt-10">About US</p>
                    <p class="mt-5">We are professional webdesigner and developers, we will provide you Professional and High-Quality Webdesign to promote your business. Our creativity will show unique professional design for your business website. Our aim to give value to our customer on a first priority.</p>
                </div>
                <div class="mt-5">
                   <p class="font-weight-medium text-h5 mt-10">Why you should choose us:</p>
                   <v-list two-line color="">
                        <template v-for="(item, index) in items">
                            <v-list-item :key="index" >
                                <v-list-item-content>
                                    <v-list-item-title class="font-weight-medium">* {{ item.subtitle }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
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
        { "subtitle": 'Specialized in website user interface and experience' },
        { "subtitle": 'Successfully completed 150+ Ui/Ux projects' },
        { "subtitle": 'Great communication and customer service.'},
        { "subtitle": 'Have worldwide happy clients'},
      ],
     
    }
  }
}
</script>

<style scoped>

</style>
