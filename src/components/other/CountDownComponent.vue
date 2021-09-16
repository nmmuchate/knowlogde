<template>
  <div class="">
    <!-- <q-circular-progress
      :value="value"
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="red"
      class="q-ma-md"
    /> -->
  </div>
</template>

<script>
  export default {
    name: 'CountDownComponent',
    data(){
      return{
        timeleft: 25,
        displaySeconds: 0,
      }
    },
    setup () {
      return {
        value: 50
      }
    },
    computed: {
      seconds(){
        return 1000
      }
    },
    methods: {

    }
  }
</script>

<style>

</style>
