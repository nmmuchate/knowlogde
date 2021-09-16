<template>
  <div class="container-app fullscreen bg-indigo-1">
    <div class="container-quiz">
      <div
        v-for="(element, index) in questions.slice(a,b)"
        :key="index"
        class="box"
      >
        <div class="box-question-round">
          <div class="box-question text-center ">
            <h6>{{ element.question }}</h6>
          </div>
        </div>
        <div class="countdown flex flex-center">
          <q-circular-progress
            :value="timeDisplay"
            reverse
            max="60"
            size="45px"
            :thickness="1"
            color="indigo-5"
            track-color="white"
            class="q-ma-md"
          />
        </div>
        <div class="box-choices q-pa-lg answers flex column flex-center">
          <q-btn
            v-for="(item, index) in element.choices"
            :key="index"
            :label="item.choice"
            rounded
            class="btn-choices bg-white q-mt-lg"
            :class="selected ? verify(item) : ''"
            @click="selectAnswer(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // components: {
  //   'countdown-component': () => import('app/src/components/other/CountDownComponent.vue')
  // },
  data() {
    return {
      questions:[
        {
          question: 'Inside which HTML element do we put the JavaScript??',
          choices:[
            {choice: '<script>', answer:true},
            {choice: 'hnfjdfdlifb'},
            {choice: '<javascript>'},
            {choice: '<js>'},
            {choice: '<scripting>'},
          ]
        },
        {
          question: 'Calcula a massa do sol?',
          choices:[
            {choice: '5453165'},
            {choice: '52561'},
            {choice: '15189'},
            {choice: '546543'},
            {choice: '231256456', answer:true},
          ]
        },
        {
          question: 'Some question dumb?',
          choices:[
            {choice: 'Baka'},
            {choice: 'Bakaero'},
            {choice: 'ADFDSfdsfjdskfjkd'},
            {choice: 'Badjia', answer:true},
            {choice: 'Cara de Badjia'},
          ]
        },
      ],
      a:0,
      b:1,
      selected: false,
      score:0,
      timer: null,
      totalTime: 1 * 60,
      displayed: 1 * 60,
    }
  },
  computed: {
    paddedMinutes() {
      const minutes = Math.floor(this.totalTime / 60)
      return (minutes < 10 ? '0' : '') + minutes
    },
    paddedSeconds() {
      const seconds = this.totalTime - this.paddedMinutes * 60
      return (seconds < 10 ? '0' : '') + seconds
    },
    timeDisplay() {
      return `${this.paddedMinutes}:${this.paddedSeconds}`
    }
  },
  methods: {
    incrementScore(choice){
      choice.answer ? this.score++ : ''
    },
    selectAnswer(choice){
      this.selected = true
      this.incrementScore(choice)
      setTimeout(() => {
        this.nextQuestion()
      }, 1000)
        // this.resetTimer()
      console.log('score::',this.score)
    },
    verify(answer){
      return answer.answer ? 'correct' : 'incorrect'
    },
    nextQuestion() {
      this.a++
      this.b++
      this.selected = false
    },
  }
    // countDownTimer(){
    //   if(this.countDown > 0){
    //     setTimeout(() => {
    //       this.countDown -= 1
    //       this.countDownTimer()
    //     },1000)
    //   }
    // }
  //   showRemaining() {
  //       const timer = setInterval(() => {
  //         const now = new Date()
  //         const end = new Date(2021, 7, 18, 14, 10, 10)
  //         const distance = end.getTime() - now.getTime();

  //         if( distance < 0 ){
  //           clearInterval(timer);
  //           return
  //         }

  //         const day = Math.floor((distance / this.days))
  //         const hour = Math.floor((distance % this.days) / this.hours)
  //         const minute = Math.floor((distance % this.hours) / this.minutes)
  //         const second = Math.floor((distance % this.minutes) / this.seconds)


  //         this.displayDays = day < 10 ? '0' + day : day
  //         this.displayHours = hour < 10 ? '0' + hour : hour
  //         this.displayMinutes = minute < 10 ? '0' + minute : minute
  //         this.displaySeconds = second < 10 ? '0' + second : second

  //         console.log('seconds::',second )

  //       }, 1000)
  //     }
  //   startTimer() {
  //     this.timer = setInterval(() => this.totalTime--, 1000)
  //   },
  //   resetTimer(){
  //     this.totalTime = this.displayed
  //     clearInterval(this.timer)
  //     this.timer = null
  //   }
  // },
  //   mounted() {
  //     this.startTimer()
  //   }
  // watch: {
  //   timerEnabled(value) {
  //     if(value) {
  //       setTimeout(() => {
  //         this.countDown--
  //       },1000)
  //     }
  //   },
  //   timerCount: {
  //     handler(value) {
  //       if(value > 0 && this.timerEnabled) {
  //         setTimeout(() => {
  //           this.countDown--
  //         },1000)
  //       }
  //       console.log(this.countDown)
  //     },
  //     immediate: true
  //   }
  // }

}
</script>

<style>
  .correct{
    background-color: #9ccc65;
  }
  .incorrect {
    background-color: #ef5350;
  }
  .box-question-round{
    height: 150px;
    margin-top: -50px;
    border-bottom-right-radius: 45px;
    border-bottom-left-radius: 45px;
    background-color: darkslateblue;
    color: aliceblue;
  }
  .btn-choices{
    width: 90%;
  }
  .countdown{
    margin-top: -39px;

  }
</style>
