<template>
  <v-main>
    <div v-if="teams.length">
      <v-container>
        <span v-for="(t, index) in teams" :key="index">
          <p class="pa-5 mt-10 text-h5 font-weight-medium text-uppercase text-center">{{t.node.name}}</p>
          <v-row>
            <v-col cols="12" sm="12" md="3" v-for="(member, index) in t.node.memberSet.edges" :key="index">
              <v-card width="280" class="rounded-xl mx-auto bg-white">
                  <div class="text-center">
                    <v-avatar size="120" class="mt-5">
                      <v-img :src="'https://res.cloudinary.com/techminate/image/upload/v1/'+member.node.image"></v-img>
                    </v-avatar>
                  </div>
                  <span class="text-h5 text-center font-weight-bold d-block mt-5">{{ member.node.name }}</span>
                  <span class="text-center d-block">{{ member.node.role }}</span>
                  <div class="d-flex justify-space-around pa-5">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a @click="mailTo(member.node.email)" v-bind="attrs" v-on="on" style="text-decoration:none; color:white">
                          <v-icon size="25" class="text--lighten-1">mdi-gmail</v-icon>
                        </a>
                      </template>
                      <span>{{ member.node.email }}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a :href="member.node.linkedin" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                          <v-icon size="25" class="text--lighten-1">mdi-linkedin</v-icon>
                        </a>
                      </template>
                      <span>{{ member.node.linkedin }}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a :href="member.node.github" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                          <v-icon size="25" class="text--lighten-1">mdi-web</v-icon>
                        </a>
                      </template>
                      <span>{{ member.node.github }}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a :href="member.node.github" v-bind="attrs" v-on="on" target="_blank" style="text-decoration:none; color:white">
                          <v-icon size="25" class="text--lighten-1">mdi-github</v-icon>
                        </a>
                      </template>
                      <span>{{ member.node.github }}</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <a href="#" v-bind="attrs" v-on="on" style="text-decoration:none; color:white">
                          <v-icon size="25" class="text--lighten-1">mdi-discord</v-icon>
                        </a>
                      </template>
                      <span>{{ member.node.discord }}</span>
                    </v-tooltip>
                  </div>
              </v-card>
            </v-col>
          </v-row>
        </span>
      </v-container>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </v-main>
</template>

<script>
import gql from 'graphql-tag'
// components
import Spinner from '@/components/Spinner.vue'

const allTeam = gql`
query{
  allTeam{
    edges{
      node{
        id
        name
        memberSet{
          edges{
            node{
              id
              name
              role
              gmail
              github
              discord
              linkedin
              image
            }
          }
        }
      }
    }
  }
}
`
export default {
  components: { Spinner },
  data () {
    return {
      
    }
  },
  methods: {
    mailTo(param){
      window.location.href = 'mailto:' + param;
    },
  },
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { id } = params;
    const res = await client.query({
      query: allTeam,
      variables: {
        id
      },
    })
    const teams = res.data.allTeam.edges;
    return { teams }
  },
}
</script>

<style>

</style>
