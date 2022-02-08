<template>
  <q-page class="bg-grey-3 full-width">
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
      <div class="neumorph-1 rounded-borders bg-grey-1 q-my-md text-center text-bold">
        <div class="question bg-white q-pa-md">
          {{ currentQuestion.question }}
        </div>
      </div>

      <!-- options container -->
      <div class="q-mt-xl">
        <div v-for="(choice, item) in currentQuestion.choices" :key="item">
          <div class="neumorph-1 bg-grey-3 rounded-borders q-pa-xs q-my-sm" @click="onOptionClicked(choice, item)" :ref="optionChosen">
            <div class="bg-white rounded-borders text-bold row">
              <!-- option id -->
              <div class="bg-grey-5 rounded-borders q-pa-sm">
                {{ item }}
              </div>
              <!-- Option name -->
              <div class="q-pa-sm">{{choice.choice}}</div>
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
  import { ref } from "vue";
  export default {
    data(){
      let canClick = true

      let score = ref(0)

      let timer = ref(1)

      let questionCounter = ref(0)
      const currentQuestion = ref({
        question: '',
        answer: 1,
        choices: []
      })
      const questions=[
          {
            question: 'Inside which HTML element do we put the JavaScript??',
            answer: 4,
            choices:[
              {choice: '<script>'},
              {choice: 'hnfjdfdlifb'},
              {choice: '<javascript>'},
              {choice: '<js>'},
              {choice: '<scripting>'},
            ]
          },
          {
            question: 'Calcula a massa do sol?',
            answer:3,
            choices:[
              {choice: '5453165'},
              {choice: '52561'},
              {choice: '15189'},
              {choice: '546543'},
              {choice: '231256456'},
            ]
          },
          {
            question: 'Some question dumb?',
            answer:2,
            choices:[
              {choice: 'Baka'},
              {choice: 'Bakaero'},
              {choice: 'ADFDSfdsfjdskfjkd'},
              {choice: 'Badjia'},
              {choice: 'Cara de Badjia'},
            ]
          },
        ]

        // lifecycle hooks
      const loadQuestion = () => {
        canClick = true
        // Check if there are more questions to load
        if(questions.length > questionCounter.value){
          timer.value = 1

          currentQuestion.value = questions[questionCounter.value]

          questionCounter.value++
        }else{
          // no more questions
          console.log('Out of Questions')
        }
      }
      // Methods/functions
      let itemsRef=[]
      const optionChosen = element => {
        if(element){
          itemsRef.push(element)
        }
      }

      const clearSelected = divSelected => {
        setTimeout(() => {
          // divSelected.classList.remove('option-correct')
          // divSelected.classList.remove('option-wrong')
          // divSelected.classList.add('option-default')
          loadQuestion()
        }, 1000)
      }

      const onOptionClicked = (choice, item) => {

        if(canClick){
          // TODO select an option
          const divContainer = itemsRef[item]
          const optionID = item+1
          if(currentQuestion.value.answer == optionID){
            // divContainer.classList.add('option-correct')
            // divContainer.classList.add('option-wrong')
            // divContainer.classList.remove('option-default')
            score.value += 10
          }else{
            // divContainer.classList.add('option-wrong')
            // divContainer.classList.add('option-correct')
            // divContainer.classList.remove('option-default')
          }
          timer.value = 1
          canClick = false
          // TODO: go to next question
          clearSelected(divContainer);
        }else{
          // can't select option
          console.log('cant select question')
        }

      }

      const countDownTimer = () =>{
        let countDown = setInterval(() => {
          if(timer.value > 0){
            timer.value-=0.1;
          }else{
            console.log('time is up');
            clearInterval(countDown)
          }
        }, 1500)
      }
      return{
        countDownTimer,
        timer,
        currentQuestion,
        questions,
        score,
        questionCounter,
        loadQuestion,
        onOptionClicked,
        optionChosen
      }
    },
    mounted(){
      this.loadQuestion()
      this.countDownTimer()
    }
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
