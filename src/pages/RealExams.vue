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

        <q-linear-progress rounded :value="timer" class="q-pa-xs"/>

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

              <div class="rounded-lg font-bold flex justify-center items-center p-2">

                <!-- answer ID -->

                <div class="p-3 rounded-lg">{{ charIndex(item) }}</div>

                <!-- option text -->
                <div class=" bla pl-6">{{ choice }}</div>
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
        <q-footer  class="bg-white text-primary">
          <q-btn
            color="white"
            @click="previousQuestion()"
            text-color="black"
            label="Anterior" />
          <q-btn
            @click="nextQuestion()"
            color="primary"
            label="Próxima" />
        </q-footer>
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
        endOfQuizOvr: false,
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
        userAnswers: []
      }
    },
    methods: {
      charIndex(i){
        return String.fromCharCode(65 + i)
      },
      onOptionClicked(choice, item){

        console.log('choice', choice)
        if(this.canClick){
          this.userAnswers[this.questionCounter] = choice
          console.log('user answers::',this.userAnswers)


          this.timer = 1
          this.canClick = false

        }else{
          console.log("Can't select question")
        }
      },
      clearSelected(){
        setTimeout(() =>{

          this.loadQuestion()
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

          this.questionCounter++
        }else {
          this.endfoquizovr = true
          console.log('Out of Questions')
        }
      },
      nextQuestion(){
        if(this.questionCounter <this.questions.length )
        this.questionCounter ++
        this.clearSelected()
      },
      previousQuestion(){
        if(this.questions.length > 0){
          this.questionCounter --
          this.clearSelected()
        }
      }
    },
    mounted(){
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
    } else{
      this.$router.push("/home")
    }
  }).catch((error) => {
      console.log("Error Getting document")
  })
  },
}
</script>

<style>

</style>
