<template>
  <div class="justify-center column flex flex-center">
   <h6> {{ timeDisplay }} </h6>
    <q-btn
     color="green"
     push
     v-if='!timer && totalTime !== 0'
     @click="startTimer">Start</q-btn>
    <q-btn
     color="red"
     push
     v-if="resetButton"
     @click="resetTimer()">Stop</q-btn>
  </div>
</template>

<script>
  export default {
    data:() => {
      return {
        timer: null,
        totalTime: 25 * 60,
        timeSet: '',
        displayed: 25 * 60,
        resetButton: false

      }
    },
    // mounted(){
    //   const
    // },
    computed: {
      paddedMinutes(){
        const minutes = Math.floor(this.totalTime / 60)
        return (minutes < 10 ? '0' : '') + minutes
      },
      paddedSeconds(){
        const seconds = this.totalTime - this.paddedMinutes * 60
        return (seconds < 10 ? '0' : '') + seconds
      },

      timeDisplay() {
        return `${this.paddedMinutes}:${this.paddedSeconds}`
      },

    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => this.totalTime--, 1000)
        this.resetButton = true
      },
      stopTimer() {
        clearInterval(this.timer);
        this.timer = null
        this.resetButton = true
      },
      resetTimer() {
        this.totalTime = this.displayed
        clearInterval(this.timer)
        this.timer = null
        this.resetButton = false
        this.startTimer()
      }
    }
  }
</script>

<style>

</style>
