<template>
    <v-container>
        <v-row class="">
            <v-col cols="12" sm="12" md="6" lg="6">
                <div class="text-uppercase ml-5">
                    <p class="font-weight-medium text-h5 mt-10">Clients</p>
                    <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque, perspiciatis fugiat natus libero perferendis et ipsa debitis sint laborum vero quo dignissimos doloremque labore molestiae similique soluta enim iusto mollitia accusamus! Accusantium a ab iusto, amet in dicta aperiam id voluptatibus quisquam minima doloribus quod delectus aspernatur tenetur nemo.</p>
                </div>
                <div class="mt-10">
                    <v-list two-line color="grey darken-4">
                        <template v-for="(item, index) in data">
                            <v-list-item :key="index" >
                                <v-list-item-avatar size="60">
                                    <v-icon size="50" :color="item.color">{{ item.icon }}</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title class="font-weight-medium" color="teal accent-4">{{ item.title }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </div>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6">
                <div class="text-center mt-15">
                    <span class="">
                        <v-img class="mt-5" src="https://previews.123rf.com/images/nyul/nyul1101/nyul110100239/8549434-young-office-worker-sitting-at-desk-in-office-talking-on-phone-using-laptop-women-working-in-the-bac.jpg" width="600" height="520"></v-img>
                    </span>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  metaInfo: {
    
  },
  data(){
    return{
      data:[
        {"title":"First Growing Proccess","color":"blue", "icon":"mdi-state-machine", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {"title":"Clean Code","color":"purple", "icon":"mdi-console", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
        {"title":"Well Documentation","color":"red", "icon":"mdi-file-document-multiple-outline", "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
      ]
    }
  }
}
</script>

<style scoped>

</style>
