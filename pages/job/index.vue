<template>
  <v-main>
    <v-container >
      <v-card class="mx-auto my-12">
        <div class="text-center d-flex pb-4">
          <v-btn @click="all">
            View all
          </v-btn>
          <v-btn @click="none">
            Hide all
          </v-btn>
        </div>
        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel
          v-for="(t, index) in job" :key="index"
          >
            <v-expansion-panel-header>Title : {{t.node.projectName}} | {{t.node.title}}</v-expansion-panel-header>
            <v-expansion-panel-content>
                <p>Job ID : {{t.node.id}}</p>
                <p>Requirements : {{t.node.requirements}}</p>
                <p>Deadline : {{t.node.deadline}}</p>
                <p><v-btn @click="onClick(t.node.id)">View Tasks Details Here</v-btn></p>
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
