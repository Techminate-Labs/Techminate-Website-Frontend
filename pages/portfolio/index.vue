<template>
   <div v-if="!$apollo.queries.allPortfolio.loading">
      <v-container >
        <p class="pa-5 mt-5 text-h5 font-weight-medium text-uppercase text-center">Our Projects</p>
        <div class="d-flex justify-center mb-5">
          <v-btn-toggle v-model="text" tile color="orange accent-3" group>
            <v-btn @click="filterData(all)" value="all">All</v-btn>
            <v-btn @click="filterData(design)" value="left">Design</v-btn>
            <v-btn @click="filterData(website)" value="center">Website</v-btn>
            <v-btn @click="filterData(app)" value="right">Apps</v-btn>
          </v-btn-toggle>
        </div>
        <div v-if="filtered.length">
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="3" v-for="(project, index) in filtered" :key="index">
             <v-card class="mx-auto" max-width="344">
              <v-img :src="'https://res.cloudinary.com/techminate/image/upload/v1/' + project.image" height="250px"></v-img>
              <p class="text-h5 text-center font-weight-bold mt-5">{{ project.title }}</p>
              <div class="d-flex justify-center">
                <v-btn color="orange white--text mb-5" >
                  <a :href="project.link" target="_blank" style="text-decoration:none; color:white">View</a>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
        </div>
        <div v-else>
            <Spinner />
        </div>
      </v-container>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import Spinner from '@/components/Spinner.vue'

export default {
  components: { Spinner },
  metaInfo: {
    title: 'Portfolio'
  },
  data(){
    return{
      website:'WEBSITE',
      design:'DESIGN',
      app:'APP',
      all:'all',
      text: 'all',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],
      show: false,
      projectlist:[],
      filtered: [],
    }
  },
  
  apollo: {
    allPortfolio: {
      query: gql`
        query{
          allPortfolio{
            id
            category
            title
            image
            link
          }
        }
      `,
    }
  },
 
 beforeMount(){
    this.getProjects();
    const loadFiltered = async () =>{
      try{
        await new Promise (resolve => {
          setTimeout(resolve, 1000)
        })
        this.filtered = this.projectlist;
      }
      catch (error) {
        console.log(error)
      }
    }
    loadFiltered();
  },
  methods:{
    getProjects(){
      try {
        this.projectlist = this.allPortfolio
        console.log(this.projectlist)
      } catch (error) {
        console.log(error)
      }
    },

    ViewSite(l){
      console.log(l);
      window.location.href = l;
    },

    filterData(type){
      if(type=="all"){
        this.filtered = this.projectlist
      }else{
        this.filtered = this.projectlist.filter( d=> d.category === type)
      }
    },
  }
}
</script>

<style>

</style>
