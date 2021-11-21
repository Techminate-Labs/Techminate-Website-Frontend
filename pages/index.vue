<template>
  <div>
    <Home />
    <About />
    <ServiceComponents />
    <Clients />
    <Testimonials />
  </div>
</template>

<script>
import Home from "@/components/Home.vue"
import About from "@/components/About.vue"
import ServiceComponents from "~/components/ServiceComponents.vue"
import Clients from "@/components/Clients.vue"
import Testimonials from "@/components/Testimonials.vue"

export default {
  components:{
    Home,
    About,
    ServiceComponents,
    Clients,
    Testimonials
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
.bg{
  background: linear-gradient(90deg, #FC575E 0%, #F7B42C 100%), #C4C4C4;
  border-radius: 0px 0px 300px 300px;
}

</style>
