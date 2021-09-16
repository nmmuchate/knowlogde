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
