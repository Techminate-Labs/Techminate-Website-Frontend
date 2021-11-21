<template>
  <div>
    <About />
  </div>
</template>

<script>
import About from "@/components/About.vue"
export default {
  components:{
    About,
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
