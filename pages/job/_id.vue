<template>
  <div v-if="!$apollo.queries.job.loading">
    <v-container>
      <v-card >
      <div class="pa-5">
        <h4>Job : {{job.projectName}} | {{job.title}} | {{job.deadline}}</h4>
      </div>
      <div class="text-center d-flex pa-5">
        <v-btn @click="all" color="deep-orange white--text">
          View Tasks
        </v-btn>
        <v-btn @click="none" color="deep-orange white--text" class="ml-5">
          Hide Tasks
        </v-btn>
      </div>
        <v-expansion-panels
          inset
          focusable
          v-model="panel"
          multiple
        >
          <v-expansion-panel
          v-for="(x, index) in job.tasks.edges" :key="index"
          >
            <v-expansion-panel-header><h3>Task : {{index+1}} | {{x.node.title}} | {{x.node.bounty}} TNBC</h3></v-expansion-panel-header>
            <v-expansion-panel-content>
              <h4>ID :</h4>
              <p>{{x.node.id}}</p>
              <h4>Title:</h4>
              <p>{{x.node.title}}</p>
              <h4>Bounty :</h4>
              <p>{{x.node.bounty}}</p>
              <h4>Details:</h4>
              <p>{{x.node.description}}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      panel: [],
      items: 5,
    }
  },
  apollo: {
    job: {
      query: gql`
        query job($id: ID!) {
          job(id: $id) {
            id
            title
            projectName
            description
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
      `,
      variables() {
        return {
           id: this.$route.params.id
        }
      }
    }
  },

  methods: {
    all () {
      this.panel = [...Array(this.items).keys()].map((k, i) => i)
    },
    none () {
      this.panel = []
    },
  },
}
</script>

<style>

</style>