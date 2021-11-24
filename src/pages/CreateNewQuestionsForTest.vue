<template>
  <q-page class='q-pa-md'>
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
      v-model="text"
      outlined
      label="Resposta 1"
    />
    <q-input
      class="q-my-md"
      v-model="text"
      outlined
      label="Resposta 2"
    /><q-input
      class="q-my-md"
      v-model="text"
      outlined
      label="Resposta 3"
    /><q-input
      class="q-my-md"
      v-model="text"
      outlined
      label="Resposta 4"
    />
  </div>
  <div>
    <q-select
      v-model="response"
      :options="respostas"
      label="Resposta correta" />
  </div>

  <q-btn push no-caps color="positive" class="q-mt-md full-width" label='save'/>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      response: ref(null),
      text: ref(''),
      options: [
        'Portugues', 'Matematica', 'Biologia', 'Quimica', 'Fisica', 'Geografia', 'Filosofia'
      ],
      respostas: [
        'Resposta 1', 'Resposta 2', 'Resposta 3','Resposta 4'
      ]
    }
  }
}
</script>

<style>

</style>
