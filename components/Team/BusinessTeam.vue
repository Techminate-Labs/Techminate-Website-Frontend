<template>
    <div>
      <v-container >
        <p class="pa-5 mt-10 text-h5 font-weight-medium text-uppercase text-center">BUSINESS DEVELOPMENT TEAM</p>
        <v-row>
          <v-col cols="12" sm="12" md="3" v-for="(busines, index) in business" :key="index">
            <v-card width="250" class="rounded-xl mx-auto bg-white">
                <div class="text-center">
                  <v-avatar size="120" class="mt-5">
                    <v-img :src="busines.get_image"></v-img>
                  </v-avatar>
                </div>
                <span class="text-h5 text-center font-weight-bold d-block mt-5">{{ busines.name }}</span>
                <span class="text-center d-block">{{ busines.title }}</span>
                <div class="d-flex justify-space-around pa-5">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <a @click="mailTo(busines.email)" v-bind="attrs" v-on="on" style="text-decoration:none; color:white">
                        <v-icon size="25" class="text--lighten-1">mdi-gmail</v-icon>
                      </a>
                    </template>
                    <span>{{ busines.email }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <a :href="busines.linkedin" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                        <v-icon size="25" class="text--lighten-1">mdi-linkedin</v-icon>
                      </a>
                    </template>
                    <span>{{ busines.linkedin }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <a :href="busines.portfolio" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                        <v-icon size="25" class="text--lighten-1">mdi-web</v-icon>
                      </a>
                    </template>
                    <span>{{ busines.portfolio }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <a :href="busines.github" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                        <v-icon size="25" class="text--lighten-1">mdi-github</v-icon>
                      </a>
                    </template>
                    <span>{{ busines.github }}</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <a href="#" v-bind="attrs" v-on="on" style="text-decoration:none; color:white">
                        <v-icon size="25" class="text--lighten-1">mdi-discord</v-icon>
                      </a>
                    </template>
                    <span>{{ busines.discord }}</span>
                  </v-tooltip>
                </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
import axios from 'axios'

// components
import Spinner from '@/components/Spinner.vue'

export default {
  components: { Spinner },

  data(){
    return{
      business:[],
    }
  },
   created(){
    this.getData();
  },

  methods:{
    mailTo(param){
      window.location.href = 'mailto:' + param;
    },
    async getData(){
      try {
        const results = await axios.get('http://localhost:8000/business')
        this.business = results.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed:{
    core: function(){
      return this.members.filter( d=> d.
        team_type === "core")
    },
    business: function(){
      return this.members.filter( d=> d.
        team_type === "business")
    },
    contributors: function(){
      return this.members.filter( d=> d.
        team_type === "contributor")
    }
  },
}
</script>

<style>

</style>
