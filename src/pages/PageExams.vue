<template>
  <div class="container-app">
    <div class="container-quiz">
      <div
        v-for="(element, index) in questions.slice(a,b)"
        :key="index"
        class="box"
      >
        <div class="box-question">
          <h6>{{ element.question }}</h6>
        </div>
        <div class="box-choices">
          <q-btn
            v-for="(item, index) in element.choices"
            :key="index"
            :label="item.choice"
            :class="selected ? verify(item): ''"
            @click="selectAnswer(item)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions:[
        {
          question: 'Inside which HTML element do we put the JavaScript??',
          choices:[
            {choice: '<script>', answer:true},
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
            {choice: '231256456', answer:true},
          ]
        },
        {
          question: 'Some question dumb?',
          choices:[
            {choice: 'Baka'},
            {choice: 'Bakaero'},
            {choice: 'Badjia', answer:true},
            {choice: 'Cara de Badjia'},
          ]
        },
      ],
      a:0,
      b:1,
      selected: false,
      score:0
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
}
</script>

<style>
  .correct{
    background-color: #9ccc65;
  }
  .incorrect {
    background-color: #ef5350;
  }
</style>
