<template>
  <div>
    <Why1 />
    <Workflow />
    <Why2 />
  </div>
</template>

<script>
import Why1 from "@/components/Why1.vue"
import Why2 from "@/components/Why2.vue"
import Workflow from "@/components/Workflow.vue"
export default {
  components:{
    Why1,
    Why2,
    Workflow,
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>

</style>
