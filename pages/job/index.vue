<template>
  <v-main>
    <v-container >
      <v-card class="mx-auto my-12">
        <div class="text-center d-flex pb-4">
          <v-btn @click="all">
            all
          </v-btn>
          <div>{{ panel }}</div>
          <v-btn @click="none">
            none
          </v-btn>
        </div>
        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel
          v-for="(t, index) in job" :key="index"
          >
            <v-expansion-panel-header>{{t.node.title}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              task: 
              <ul v-for="(x, index) in t.node.tasks.edges" :key="index">
                    <li>{{index+1}}</li>
                    <li>{{x.node.id}}</li>
                    <li>{{x.node.title}}</li>
                    <li>{{x.node.description}}</li>
                    <li>{{x.node.bounty}}</li>
                </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import gql from 'graphql-tag'

const allJobs = gql`
query{
  allJobs{
    edges{
      node{
        id
        title
        description
        projectName
        requirements
        deadline
        tasks {
          edges {
            node {
              id
              title
              description
              bounty
            }
          }
        }
      }
    }
  }
}
`
export default {
  data () {
      return {
        panel: [],
        items: 5,
      }
    },
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },
    },
components:{
  //
  },
  metaInfo: {
    title: 'Job'
  },

  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const { id } = params;
    const res = await client.query({
      query: allJobs,
      variables: {
        id
      },
    })
    const job = res.data.allJobs.edges;
    console.log(job)
    return { job }
  },
}
</script>

<style>

</style>
