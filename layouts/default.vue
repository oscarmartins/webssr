<template>
  <div>
    <top-header/>
    <bottom-footer/> 
    <div>
      <nuxt keep-alive/>     
      
    </div>
    
  </div>
</template>

<script>
import TopHeader from '~/components/TopHeader.vue'
import BottomFooter from '~/components/BottomFooter.vue'

export default {
  components: {
    TopHeader,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import '../assets/scss/styles.scss';
</style>