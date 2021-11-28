<template>
  <v-main>
    <v-container >
      <v-card class="mx-auto my-12">
        <div class="text-center d-flex pa-5">
          <v-btn @click="all" color="deep-orange white--text">
            View Jobs
          </v-btn>
          <v-btn @click="none" color="deep-orange white--text ml-5">
            Hide Jobs
          </v-btn>
        </div>
        <v-expansion-panels
          inset
          focusable
          v-model="panel"
          multiple
        >
          <v-expansion-panel
          v-for="(t, index) in job" :key="index"
          >
            <v-expansion-panel-header><h3>Job : {{index+1}} | {{t.node.projectName}} | {{t.node.title}}</h3></v-expansion-panel-header>
            <v-expansion-panel-content>
                <h4>ID :</h4>
                <p>{{t.node.id}}</p>
                <h4>Title :</h4>
                <p>{{t.node.title}}</p>
                <h4>Project :</h4>
                <p>{{t.node.projectName}}</p>
                <h4>Deadline :</h4>
                <p>{{t.node.deadline}}</p>
                <h4>Requirements :</h4>
                <p>{{t.node.requirements}}</p>
                <p><v-btn @click="onClick(t.node.id)" color="deep-orange white--text">View Tasks Details Here</v-btn></p>
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
    all () {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    none () {
      this.panel = []
    },
    onClick(id){
        console.log("clicked", id)
        this.$router.push('/job/' + id)
    },
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
    return { job }
  },
}
</script>

<style>

</style>
