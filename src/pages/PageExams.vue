<template>
  <q-page>
    <!-- quiz container -->
        
        <!-- quiz score container -->
      <div class='relative z-20'>
        <div class="text-gray-800 text-right">
          <span class="font-medium">Pontuação:</span>
          <span class="font-bold text-red-600"> 20</span>
        </div>

        <!-- quiz timer container -->
        <div class="bg-white shadow-lg p-1 rounded-full w-full h-5 mt-4">
          <div class="bg-blue-700 rounded-full w-11/12 h-full">       
          </div>
        </div>
        <!-- question container -->
        <div class="rounded-lg bg-gray-100 p-2 .neumorph-1 text-center font-bold tex-gray-800 mt-8">
          <div class="bg-white p-5">
            Who is the most poweful Avenger?
          </div>
        </div>

        <!-- answers container -->
        <div class='mt-8'>
          
          <!-- answer container -->
          <div  class='neumorph-1 option-default bg-gray-100 p-2 rounded-lg mb-3 relative'>

            <div class='bg-blue-500 p-1 transform rotate-45 rounded-md h-7 w-7 text-white font-bold absolute right-0 top-0 shadow-md'>
              <p class='transform -rotate-45'>+1</p>
            </div>

            <div class="bg-white rounded-lg font-bold flex p-2"> 
              
              <!-- answer ID -->

              <div class="bg-gray-400 p-3 rounded-lg">A</div>

              <!-- option text -->
              <div class="flex items-center pl-6">Thor</div>
            </div>        
          </div>

        </div>

        <!-- progress indicator container -->
        <div class='mt-8 text-center'>
          <div class='h-1 w-12 rounded-full bg-gray-800 mx-auto'>
            <p class='text-gray-800 font-bold'>1/3</p>
          </div>
        </div>
      </div>

  </q-page>
</template>

<script>
  import { dbFApp } from '../boot/firebase'
  // import '../index.css'

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
    max-width: 400px;
  }
</style>
