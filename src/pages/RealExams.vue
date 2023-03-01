<template>
  <q-page>
    <img src='../assets/copycopycopy.svg' alt='' class='absolute -top-25 left-0 object-none'>
    <div class="relative z-20 px-8 py-6">
      <div class="text-gray-800 text-right">
        <span class="font-medium">Pontuação: </span>
        <span class="font-bold text-red-600">{{ score }}</span>
      </div>
       <!-- quiz timer container -->
       <div class="bg-white shadow-lg p-1 rounded-full w-full h-3 mt-4">

        <q-linear-progress
          rounded
          :value="timer"
          class="q-pa-xs" />

      </div>
      <div class="rounded-lg bg-gray-100 p-2 .neumorph-1 text-center font-bold text-gray-800 mt-8">
          <div class="bg-white p-5">
            {{currentQuestion.question}}
          </div>
        </div>

        <!-- answers container -->
        <div class='mt-8'>

          <!-- answer container -->
          <div  v-for='(choice, item) in currentQuestion.incorrectAnswer' :key='item' >
            <div :ref="optionChosen" @click="onOptionClicked(choice, item)" class='neumorph-1 option-default bg-gray-100 p-2 rounded-lg mb-3 relative'>

              <div class='bg-blue-500 p-1 transform rotate-45 rounded-md h-7 w-7 text-white font-bold absolute right-0 top-0 shadow-md'>
                <p class='transform -rotate-45'>+1</p>
              </div>

              <div class="rounded-lg row font-bold flex justify-center items-center p-2">

                <!-- answer ID -->

                <div class="p-3 rounded-lg">{{ charIndex(item) }}</div>

                <!-- option text -->
                <div class=" flex flex-center col-10 pl-6">{{ choice }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- progress indicator container -->
        <div class='mt-8 text-center'>
          <div class='h-1 w-12 rounded-full bg-gray-800 mx-auto'>
           <p
              class='text-gray-800
              font-bold'>{{questionCounter}}/{{questions.length}}</p>
          </div>
        </div>
        <q-footer  class="bg-white text-primary">
          <q-btn
            color="white"
            @click="previousQuestion()"
            text-color="black"
            label="Anterior"
          />
          <q-btn
            v-if="this.questionCounter <this.questions.length - 1"
            @click="nextQuestion()"
            color="primary"
            label="Próxima"
          />
          <q-btn
            v-else
            @click="showResults()"
            color="primary"
            label="Ver resultado" />
        </q-footer>
      </div>
      <div v-if="endOfQuiz" class="bg-slate-800 bg-opacity-50 flex justify-center items-center z-30 absolute top-0 right-0 bottom-0 left-0">
        <div class="bg-white px-16 py-14 rounded-md text-center">
          <h1 class="text-xl mb-4 font-bold text-slate-500">Pontuação obtida: {{score}}%</h1>


            <q-btn @click="showDetailsQuestions()" class="full-width bg-gray-900 py-2 ml-2 rounded-md text-md text-white font-semibold" label="Respostas" />
            <div v-for="(question, item) in questions" :key="question">
              <div v-if="showDetails"  class="bg-gray-200 bg-opacity-100 flex justify-center items-center z-40">
                <h2 class="text-md font-medium text-white">QUESTÃO: {{ question.question }}</h2><br>
                <h1 class="text-xl mb-4 font-bold text-slate-500">RESPOSTA: {{ userAnswers[item] }}</h1>
              </div>
            </div>
          <q-btn
            to="/home"
            class="bg-gray-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"> Inicio</q-btn>
          <q-btn
            @click="onQuizStart()"
            class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
             outra vez
          </q-btn>
        </div>
      </div>
  </q-page>
</template>

<script>
  import { dbFApp } from 'src/boot/firebase'
  import { Loading } from 'quasar'
  export default {
    data(){
      return{
        canClick: true,
        endOfQuiz: false,
        score: 0,
        timer: 100,
        questionCounter: 0,
        questions: [],
        currentQuestion: {
          question: '',
          correctAnswer: '',
          incorrectAnswer: '',
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
        ],
        userAnswers: [],
        showDetails: false
      }
    },
    methods: {
      charIndex(i){
        return String.fromCharCode(65 + i)
      },
      onOptionClicked(choice, item){

        if(this.canClick){
          this.userAnswers[this.questionCounter] = choice
          console.log('user answers::',this.questions)

          const divContainer = this.itemsRef[item]
          divContainer.classList.add('option-choosed')

          this.timer = 1
          this.canClick = false
        }else{
          console.log("Can't select question")
        }
      },
      clearSelected(){
        setTimeout(() =>{
          for (let i = 0; i < this.itemsRef.length; i++) {
            const divContainer = this.itemsRef[i]
            divContainer.classList.remove('option-choosed')
            divContainer.classList.add('option-default')
            this.loadQuestion()
          }

        }, 1000)
      },
      optionChosen(element){
        if(element) {
          this.itemsRef.push(element)
        }
      },
      loadQuestion(){
        this.canClick = true
        if (this.questions.length > this.questionCounter) {
          this.timer = 1

          this.currentQuestion = this.questions[this.questionCounter]
        }else {
          this.endfoquizovr = true
          console.log('Out of Questions')
        }
      },
      correctTheAnswer(){
        this.score = 0
        for(let i =0; i < this.userAnswers.length; i++){
          if(this.questions[i].correctAnswer === this.userAnswers[i]){
            this.score += 10
          }
        }
      },
      nextQuestion(){
        if(this.questionCounter <this.questions.length)
        this.questionCounter ++
        this.clearSelected()
      },
      previousQuestion(){
        if(this.questions.length > 0){
          this.questionCounter --
          this.clearSelected()
        }
      },
      showResults(){
        this.correctTheAnswer()
        this.endOfQuiz = true
        console.log(this.score)
      },
      onQuizStart(){
        //set default values
        this.canClick = true
        this.endOfQuiz = false
        this.questionCounter = 0
        this.score = 0
        this.currentQuestion = {
          question: '',
          correctAnswer: '',
          incorrectAnswer: []
        }
        this.questions = []
        this.percentageScore = 0

        this.fetchData()
      },
      showDetailsQuestions(){
        if(this.showDetails){
          this.showDetails = false
        }else{
          this.showDetails = true
        }
      },
      fetchData(){

      Loading.show({
        message: 'Carregando as questões...'
      })
      let docRef =dbFApp.collection('QUIZ').doc(this.subjectsf[this.$route.params.id])
      docRef.get().then((querySnapshot) => {
        if(querySnapshot.exists){
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
            // console.log('new questions ::' , newQuestions.sort(() => Math.random() - 0.5))
            newQuestions.sort(() => Math.random() - 0.5)
            this.questions = newQuestions;
            this.loadQuestion()
            Loading.hide()
    } else{
      this.$router.push("/home")
    }
    }).catch((error) => {
      console.log("Error Getting document")
    })
      }
    },
    mounted(){
      this.fetchData()
    },
}
</script>

<style>
</style>
