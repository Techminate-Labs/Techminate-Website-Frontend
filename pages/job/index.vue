<template>
   <div>
    <ul v-for="(t, index) in job" :key="index">
        <li>title : {{t.node.title}}</li>
        <li>Tasks : 
            <ul v-for="(x, index) in t.node.tasks.edges" :key="index">
                <li>{{index+1}}</li>
                <li>{{x.node.id}}</li>
                <li>{{x.node.title}}</li>
                <li>{{x.node.description}}</li>
                <li>{{x.node.bounty}}</li>
            </ul>
        </li>
    </ul>
  </div>
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
