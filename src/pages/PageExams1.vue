<template>
  <q-page class="">
    <div class="text-center questions">
      <h6>{{ exam.question }}</h6>
    </div>
    <div
      class=" q-pa-lg answers flex column flex-center"
    >
    <p class="choice-prefix">A</p>
      <q-btn
        class=" choice-container"
        outline
        rounded
        color="primary"
        :label="exam.choice1"
      />
      <!-- <q-btn
        outline
        class="q-pa-md"
        rounded
        color="primary"
        :label="exam.choice2"
      />
      <q-btn
        outline
        class="q-pa-md"
        rounded
        color="indigo-6"
        :label="exam.choice3"
      />
      <q-btn
        outline
        class="q-pa-md"
        rounded
        color="primary"
        :label="exam.choice4"
      /> -->
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return{
      currentQuestion : {},
      acceptingAnswers : false,
      score : 0,
      questionCounter : 0,
      questionCounter1 : 1,
      availableQuestions : [],
      exam:
        {
          question: 'Inside which HTML element do we put the JavaScript??',
          choice1: '<script>',
          choice2: '<javascript>',
          choice3: '<js>',
          choice4: '<scripting>',
          answer: 1
        },
      //   {
      //     question: 'Inside which HTML element do we put the JavaScript??',
      //     choice1: '<script>',
      //     choice2: '<javascript>',
      //     choice3: '<js>',
      //     choice4: '<scripting>',
      //     answer: 1
      //   },
      //   {
      //     question: 'Inside which HTML element do we put the JavaScript??',
      //     choice1: '<script>',
      //     choice2: '<javascript>',
      //     choice3: '<js>',
      //     choice4: '<scripting>',
      //     answer: 1
      //   },
      // ]
    }
  },
  computed:{
    // getNewQuestion1() {
    //   this.questionCounter++

    //   this.availableQuestions = [...this.questions]
    //   const questionIndex = Math.floor(Math.random() * this.availableQuestions.length)
    //   this.currentQuestion = this.availableQuestions[questionIndex]
    //   console.log('question::',this.currentQuestion.question)
      // return this.currentQuestion.question
    // },
    // getNewAnswers() {
    //   // console.log('question:::',this.getNewQuestion1)
    //   console.log('::',this.questions.keys)
    // }
  },
  methods: {
    getNewQuestion() {
      this.availableQuestions = [...this.questions]

      this.questionCounter++
      const questionIndex = Math.floor(Math.random() * this.availableQuestions.length)
      this.currentQuestion = this.availableQuestions[questionIndex]
      question.innerText = this.currentQuestion.question


      choices.forEach( choice => {
        const number = choice.dataset['number']
        choice.innerText = this.currentQuestion['choice' + number]

        this.availableQuestions.slice(questionIndex, 1)

        this.acceptingAnswers = true
      })
    },
    verifyIsAnswer(){
      choices.forEach(choice => {
        choice.addEventListener('click', e => {
          if(!this.acceptingAnswers) return

          this.acceptingAnswers = false
          const selectedChoice = e.target;
          const selectedAnswer = selectedChoice.dataset['number']

          const classToApply = selectedAnswer == this.currentQuestion.answer

          if (classToApply === 'correct') {
            this.incrementScore(CORRECT_BONUS)
          }

          selectedChoice.parentElement.classList.add(classToApply)

          setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
          }, 1000)
        })
      })
    },
    incrementScore(num) {
      score += num;
    }
  }
}
</script>

<style>
  .choice-container{
    width: 90%;
  }
  .choice-container:hover{
    cursor: none;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(255, 0, 0, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
  .choice-prefix {
    padding: 0.5rem 1.5rem;
    background-color: red;
    color: white;
  }
</style>
<template>
  <q-page class="container-app fullscreen bg-indigo-1">
<!-- quiz container -->
    <div class="container-quiz">
      <div
        v-for="(element, index) in questions.slice(a,b)"
        :key="index"
        class="box"
      >
        <div class="box-question-round bg-indigo-5">
          <div class=" row box-question text-center justify-center items-center">
            <h6 style="margin-top: 45px;">{{ element.question }}</h6>
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
      <q-footer class="q-pa-md" >
        <div class="row">
            <q-btn
              push
              icon="arrow_back"
              color="white"
              text-color="indigo-5"
              label="voltar"
            />
            <q-space />
            <q-btn
              push
              icon="arrow_forward"
              color="white"
              text-color="indigo-5"
              label="Próximo"
            />
        </div>
      </q-footer>
    </div>
  </q-page>
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
      // availableQuestions = [],
      a:0,
      b:1,
      selected: false,
      score:0,
      timer: null,
      totalTime: 0.25 * 60,
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
      return this.paddedSeconds
    }
  },
  methods: {
    incrementScore(choice){
      choice.answer ? this.score++ : ''
    },
    selectAnswer(choice){
      this.selected = true
      this.incrementScore(choice)
      this.startTimer()
      setTimeout(() => {
        this.nextQuestion()
      }, 1000)
      this.resetTimer()
      console.log('score::',this.questions.length)
    },
    verify(answer){
      return answer.answer ? 'correct' : 'incorrect'
    },
    nextQuestion() {
      this.a++
      this.b++
      this.selected = false
    },
    startTimer() {
      this.timer = setInterval(() => this.totalTime--, 1000)
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

  .correct{
    background-color: #9ccc65;
  }
  .incorrect {
    background-color: #ef5350;
  }
  .box-question-round{
    height: 150px;
    border-bottom-right-radius: 45px;
    border-bottom-left-radius: 45px;
    color: aliceblue;
  }
  .btn-choices{
    width: 90%;
  }
  .countdown{
    margin-top: -39px;
  }
</style>

