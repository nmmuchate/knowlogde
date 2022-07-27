<template>
  <q-page>
    <div class="px-8 py-6">

    </div>
  </q-page>
</template>

<script>
  import Vue from 'vue'
  export default {
    data(){
      return{
        questions: [],
        quizCompleted: false,
        currentQuestion: 0,
        score: 0,
        getCurrentQuestion: null,
        setAnswer: null,
        getNextQuestion: null,
      }
    },
    computed: {
      getCurrentQuestion(){
        let question = this.questions[this.currentQuestion]
        question.index = this.currentQuestion
        console.log('question::', question)
        return question
      },
    },
    methods: {
      selectOption(){
        this.questions.fill(null)

      }
    }
  }
</script>

<style>

</style>
