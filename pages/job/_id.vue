<template>
  <div v-if="!$apollo.queries.job.loading">
    <v-card class="mx-auto" max-width="344">
    <h3>Title : {{job.title}}</h3>
    <h3>Project : {{job.projectName}}</h3>
    <h3>Requirements : {{job.requirements}}</h3>
    <h3>Deadline : {{job.deadline}}</h3>
    <h3>Task List :</h3>
    <div class="text-center d-flex pb-4">
          <v-btn @click="all">
            View all
          </v-btn>
          <v-btn @click="none">
            none
          </v-btn>
        </div>
        <v-expansion-panels
          v-model="panel"
          multiple
        >
          <v-expansion-panel
          v-for="(x, index) in job.tasks.edges" :key="index"
          >
            <v-expansion-panel-header>{{x.node.title}} | {{x.node.bounty}} TNBC</v-expansion-panel-header>
            <v-expansion-panel-content>
              task: 
              <ul>
                <li>Task : {{index+1}}</li>
                <li>Title : {{x.node.title}}</li>
                <li>Description : {{x.node.description}}</li>
                <li>Bounty : {{x.node.bounty}}</li>
              </ul>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-card>
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