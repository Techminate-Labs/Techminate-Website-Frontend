<template>
  <div>
    <v-container >
      <p class="pa-5 mt-10 text-h3 font-weight-medium text-uppercase text-center">Our Services</p>
      <v-row>
        <v-col cols="12" sm="12" md="4" v-for="(service, index) in services" :key="index">
          <v-card width="400" class="rounded-xl mx-auto">
              <div class="d-flex justify-space-around pt-10">
                  <span class="ml-5 d-inline">
                      <v-icon size="100" :class="service.color" class="text--lighten-1">{{ service.icon }}</v-icon>
                  </span>
                  <p class="mr-5 grey--text text--lighten-4 text-h1 font-weight-bold d-inline">{{ service.number }}</p>
              </div>
              <p class="text-h5 text-center font-weight-bold mt-5">{{ service.title }}</p>
              <p class="font-weight-medium ml-10 mr-10 pb-8">
                {{ service.description }}
              </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  components:{
    
  },
  metaInfo: {
    title: 'Service'
  },
  data(){
    return{
      services:[
        {"title":"Software Development","icon":"mdi-view-dashboard", "color":"blue--text", "number":"01", "description":"We provide turn-key software product development services that add value to your business. We offer our customers a wealth of technical and business expertise. "},
        {"title":"Website Development","icon":"mdi-web", "color":"purple--text", "number":"02", "description":"We are an e-commerce service agency, dedicated to providing you with e-commerce solutions of extraordinary quality.our developers have extensive experience in developing."},
        {"title":"UI/UX Design","icon":"mdi-material-design", "color":"red--text", "number":"03", "description":"We will design a professional UI UX (Screens), prototype and IOS app or web UI UX using proper Apple and Google guidelines, our design will be user friendly and eye catching."},
        {"title":"Cloud & DevOps","icon":"mdi-cloud-tags", "color":"green--text", "number":"04", "description":"We have 7 years of Linux administration & Apache Administration skills and 5 years of experience in Web Deployments.We are a team of professional Designers, Developers."},
        {"title":"Analytic Solutions","icon":"mdi-chart-bar-stacked", "color":"orange--text", "number":"05", "description":"We will build data analytics solutions with data processing.We have Good communication skills & Strong expertise in Automating Reports and Building Dashboards."},
        {"title":"Database Administration","icon":"mdi-microsoft-access", "color":"teal--text", "number":"06", "description":" will develop professional database system in Oracle, SQL, MySQL, Server or any other DBMS. We are experienced in Angular, Asp.net, PHP, Laravel and Wordpres."}
      ]
    }
  }
}
</script>

<style>

</style>
