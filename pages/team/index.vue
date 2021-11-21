<template>
  <div>
    <div>
    <CoreTeam />
    </div>
     <div>
    <BusinessTeam />
    </div>
    <div>
    <Contributers />
    </div>
  </div>
</template>

<script>
import CoreTeam from "@/components/Team/CoreTeam.vue"
import BusinessTeam from "@/components/Team/BusinessTeam.vue"
import Contributers from "@/components/Team/Contributers.vue"
export default {
  components:{
    CoreTeam,
    BusinessTeam,
    Contributers

  },
  metaInfo: {
    title: 'Team'
  }
}
</script>

<style>

</style>