<template>
  <q-page>
    <!-- quiz container -->
        <img src='../assets/abstract.svg' alt='' class='absolute -top-25 left-0 object-none'>
        <!-- quiz score container -->
      <div class='relative z-20 px-8 py-6'>
        <div class="text-gray-800 text-right">
          <span class="font-medium">Pontuação:</span>
          <span class="font-bold text-red-600">{{score}}</span>
        </div>

        <!-- quiz timer container -->
        <div class="bg-white shadow-lg p-1 rounded-full w-full h-3 mt-4">

          <q-linear-progress rounded :value="timer" class="q-pa-xs"/>

        </div>
        <!-- question container -->
        <div class="rounded-lg bg-gray-100 p-2 .neumorph-1 text-start font-bold text-gray-800 mt-8">
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

              <div class="rounded-lg row font-bold flex p-2">

                <!-- answer ID -->

                <div class="p-3 rounded-lg">{{ charIndex(item) }}</div>

                <!-- option text -->
                <div class="flex flex-center col-10 pl-6">{{ choice }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- progress indicator container -->
        <div class='mt-8 text-center'>
          <div class='h-1 w-12 rounded-full bg-gray-800 mx-auto'>
            <p class='text-gray-800 font-bold'>{{questionCounter}}/{{questions.length}}</p>
          </div>
        </div>
      </div>

      <!-- end of quiz overlay -->
      <div v-if="endOfQuiz" class="bg-slate-800 bg-opacity-50 flex justify-center items-center z-30 absolute top-0 right-0 bottom-0 left-0">
        <div class="bg-white px-16 py-14 rounded-md text-center">
          <h1 class="text-xl mb-4 font-bold text-slate-500">Pontuação obtida: {{percentageScore}}%</h1>
          <q-btn to="/home" class="bg-gray-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"> Inicio</q-btn>
          <q-btn @click="onQuizStart()" class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
             outra vez
          </q-btn>
        </div>
      </div>

  </q-page>
</template>

<script>

  import { Loading } from 'quasar'

  import { dbFApp } from '../boot/firebase'
  // import '../index.css'

  import EndOfQuiz from 'src/components/Quiz/EndOfQuiz'

  export default {
    data(){

      return{
        canClick: true,
        endOfQuiz: false,
        score: 0,
        timer: 100,
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
        ],
        percentageScore: 0
      }
    },
    components:{
      EndOfQuiz
    },
    methods: {

      charIndex(i){
        return String.fromCharCode(65 + i)
      },
      loadQuestion(){
        this.canClick = true
        if (this.questions.length > this.questionCounter) {
          this.timer = 1

          this.currentQuestion = this.questions[this.questionCounter]

          this.questionCounter++
        }else {
          this.endOfQuiz = true
          this.onQuizEnd()
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
          if(divSelected) {
            divSelected.classList.remove('option-correct')
            divSelected.classList.remove('option-wrong')
            divSelected.classList.add('option-default')
          }
          this.loadQuestion()
        }, 1000)
      },
      onOptionClicked(choice, item){
        if(this.canClick){
          const divContainer = this.itemsRef[item]

          if(this.currentQuestion.correctAnswer == choice){
            this.score ++
            divContainer.classList.add('option-correct')
            divContainer.classList.remove('option-default')

          }else {
            divContainer.classList.add('option-wrong')
            divContainer.classList.remove('option-default')
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
            this.onQuizEnd()
            clearInterval(countDown)
          }
        }, 1500)
      },
      //  // save the data in the firestore user
      //     dbFApp.collection('users').doc(this.$store.state.user.uid).update({
      //       score: this.score,
      //       subject: this.subjectsf[this.$store.state.user.subject]
      //     })
      //     .then(() => {

      ifUserPassed(){
        if(this.score >= this.questions.length * 0.7){
          return true
        }else {
          return false
        }
      },
      setUserScore(){
        if(this.ifUserPassed()){
          dbFApp.collection('users').doc(this.$store.state.user.uid).update({
            score: this.score
          })
        }
      },
      onQuizEnd(){
        // when a answer is too long break the line
        this.percentageScore = (this.score/100)*1000
        this.timer = 0
        this.endOfQuiz = true
      },
      onQuizStart(){
        //set default values
        this.canClick = true
        this.timer = 100
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
      fetchData(){
        Loading.show({
        message: 'Carregando as questões...'
      })
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
            // console.log('new questions ::' , newQuestions.sort(() => Math.random() - 0.5))
            newQuestions.sort(() => Math.random() - 0.5)
            this.questions = newQuestions;
            this.loadQuestion()
            Loading.hide()
            this.countDownTimer()
        } else {
          console.log('No such a document')
        }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      }
      // add score after game


    },
    mounted(){
      this.fetchData()
    },
  }
</script>

<style scoped>
  .neumorph-1{
    box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.09), -6px -6px 18px #ffffff;
  }
  .container{
    max-width: 400px;
  }
  .bla{
    word-wrap: break-word;
    display: block;
  }
</style>
