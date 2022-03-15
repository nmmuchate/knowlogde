<template>
  <q-page class="bg-grey-3 full-width">

    <!-- EndOfQuizOverLay -->
    <end-of-quiz v-if="endfoquizovr"></end-of-quiz>

    <!-- quiz container -->
    <div class="bg-white shadow-3 q-py-md q-px-lg rounded-borders container">
      <!-- score container -->
        <div class="text-grey-9">
          <p class="q-ma-none">Score</p>
          <p class="text-bold ">{{score}}V</p>
        </div>
      <!-- timer container -->
      <div class="bg-white shadow-4 q-pa-xs rounded-borders">
        <q-linear-progress rounded :value="timer" class="q-pa-xs"/>
      </div>

      <!-- question container -->
      <div
        class="neumorph-1 rounded-borders bg-grey-1 q-my-md text-center text-bold">
        <div class="question bg-white q-pa-md">
          {{ currentQuestion.question }}
        </div>
      </div>

      <!-- options container -->
      <div class="q-mt-xl">
        <div
          v-for="(choice, item) in currentQuestion.incorrectAnswer"
          :key="item">
          <div
            class="neumorph-1 bg-grey-3 rounded-borders q-pa-xs q-my-sm"
            @click="onOptionClicked(choice, item)"
            :ref="optionChosen">
            <div class="bg-white rounded-borders text-bold row">
              <!-- option id -->
              <div class="bg-grey-5 rounded-borders q-pa-sm">
                {{ item }}
              </div>
              <!-- Option name -->
              <div class="q-pa-sm">{{choice}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- progress indicator container -->
      <div class="q-mt-lg text-center">
        <div style="width:50px;height:2px;" class="rounded-borders bg-grey-7 q-mx-auto">
          <p class="text-bold text-grey-7">{{ questionCounter }}/{{questions.length}}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import { dbFApp } from '../boot/firebase'

  import EndOfQuiz from 'src/components/Quiz/EndOfQuiz.vue'
  export default {
    data(){

      return{
        canClick: true,
        endfoquizovr: false,
        score: 0,
        timer: 1,
        questionCounter:0,
        questions: [],
        currentQuestion: {
          question: '',
          correctAnswer: '',
          incorrectAnswer: []
        },
        itemsRef: [],
        subjectsf: [
          'CAT1',
          'CAT10',
          'CAT2',
          'CAT3',
          'CAT4',
          'CAT5',
          'CAT6',
          'CAT7',
          'CAT8',
          'CAT9',
        ]
      }
    },
    components:{
      EndOfQuiz
    },
    methods: {
      loadQuestion(){
        this.canClick = true
        if (this.questions.length > this.questionCounter) {
          this.timer = 1

          this.currentQuestion = this.questions[this.questionCounter]

          this.questionCounter++
        }else {
          this.endfoquizovr = true
          console.log('Out of Questions')
        }
      },
      optionChosen(element){
        if(element) {
          this.itemsRef.push(element)
        }
      },
      clearSelected(divSelected){
        setTimeout(() =>{
          this.loadQuestion()
        }, 1000)
      },
      onOptionClicked(choice, item){
        if(this.canClick){
          const divContainer = this.itemsRef[choice]
          console.log(this.currentQuestion.correctAnswer)

          if(this.currentQuestion.correctAnswer == choice){
            this.score += 10
          }else {

          }
          this.timer = 1
          this.canClick = false
          this.clearSelected(divContainer)
        }else{
          console.log("Can't select question")
        }
      },
      countDownTimer(){
        let countDown = setInterval(() => {
          if (this.timer > 0) {
            this.timer -= 0.1;
          } else {
            console.log('Time is up')
            clearInterval(countDown)
          }
        }, 1500)
      }
    },

    mounted(){
      let docRef =dbFApp.collection('QUIZ').doc(this.subjectsf[this.$route.params.id])
      docRef.get().then((querySnapshot) => {
        if (querySnapshot.exists) {
            const newQuestions = querySnapshot.data().questions

            newQuestions.map((serverQuestion) => {
              const arrangedQuestion = {
                question: serverQuestion.question,
                choices: '',
                answer: ''
              };

              const choices = serverQuestion.incorrectAnswer;

              arrangedQuestion.answer = Math.floor(Math.random() * 4 + 1);

              choices.splice(arrangedQuestion.answer - 1, 0, serverQuestion.correctAnswer)

              arrangedQuestion.choices = choices;

              return arrangedQuestion;
            });
            console.log('new questions ::',querySnapshot.id,newQuestions,)

            this.questions = newQuestions;
            this.loadQuestion()
            this.countDownTimer()
        } else {
          console.log('No such a document')
        }
        }).catch((error) => {
    console.log("Error getting document:", error);
});
    },
  }
</script>

<style scoped>
  .neumorph-1{
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.09), -6px -6px 18px #ffffff;
  }
  .container{
    border-radius: 25px;
  }
</style>
