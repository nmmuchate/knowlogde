<template>
  <q-page class='q-pa-md'>
    <q-form @submit="submitQuestion">
      <div>
        <q-select
          v-model="model"
          :options="options"
          label="Disciplinas" />
      </div>
      <h6>Questões</h6>
      <div>
        <q-input
          v-model="text"
          filled
          type="textarea"
        />
      </div>
      <h6>Respostas</h6>
      <div>
        <q-input
          class="q-my-md"
          v-model="formDataAnswer.answer"
          outlined
          label="Resposta 1"
        />
        <q-input
          class="q-my-md"
          v-model="formDataAnswer.answer2"
          outlined
          label="Resposta 2"
        /><q-input
          class="q-my-md"
          v-model="formDataAnswer.answer3"
          outlined
          label="Resposta 3"
        /><q-input
          class="q-my-md"
          v-model="formDataAnswer.answer4"
          outlined
          label="Resposta 4"
        />
      </div>
      <div>
        <!-- <q-select
          v-model="response"
          :options="respostas"
          label="Resposta correta" /> -->
      </div>

      <q-btn
        push
        no-caps
        type="submit"
        color="positive"
        class="q-mt-md full-width"
        label='save' />
    </q-form>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      model: ref(null),
      response: ref(null),
      text: ref(''),
      options: [
        'Portugues',
        'Matematica',
        'Biologia',
        'Quimica',
        'Fisica',
        'Geografia',
        'Filosofia'
      ],
      formDataAnswer: {
        answer: '',
        answer2: '',
        answer3: '',
        answer4: '',

      }
    }
  },
  methods: {
    submitQuestion(){
      for (let index = 0; index < this.options.length; index++) {
        const element = this.options[index];
        console.log(element)
      }
      console.log(this.options)
      //Reseting input fields
      // this.question.text = ''
      // this.question.answers = ''
      // this,question.answer = ''
    }
  }
}
</script>

<style>

</style>
