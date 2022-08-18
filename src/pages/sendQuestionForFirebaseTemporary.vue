<template>
  <q-page class="px-8 py-6">
    <div class="q-gutter-md">
      <h5 class="text-xl font-bold text-center leading-none text-gray-600">Questão</h5>
      <q-select
        color="indigo-8"
        v-model="subject"
        :options="subjects"
        label="Disciplina"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="question"
        label="Questão"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="incorrectAnswer_1"
        label="Resposta incorrecta 1"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="incorrectAnswer_2"
        label="Resposta incorrecta 2"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="incorrectAnswer_3"
        label="Resposta incorrecta 3"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="incorrectAnswer_4"
        label="Resposta incorrecta 4"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="correctAnswer"
        label="Resposta correcta"
      />
      <q-input
        rounded
        outlined
        color="indigo-8"
        v-model="score"
        label="Pontuação"
      />
      <q-btn
        color="positive"
        class="full-width"
        @click="updateDataToFirebase()"
      >
        Enviar
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import firebase from 'firebase/app';
import { dbFApp } from 'src/boot/firebase';
import { Loading } from 'quasar';

  export default {
    data(){
      return{
        question: '',
        incorrectAnswer_1: '',
        incorrectAnswer_2: '',
        incorrectAnswer_3: '',
        incorrectAnswer_4: '',
        incorrectAnswer: [],
        correctAnswer: '',
        score: '',
        subject: '',
        subjectId: '',
        subjects: [
          'Português',
          'Filosofia',
          'Matemática',
          'Inglês',
          'Francês',
          'Biologia',
          'Física',
          'Química',
          'Geografia',
          'História',
        ],
      }
    },
    methods: {

      organizeSubjectInSubjectId(){
        // transforma o nome da disciplina em um id para o firebase
        switch(this.subject){
          case 'Português':
            this.subjectId = 'CAT1';
            break;
          case 'Filosofia':
            this.subjectId = 'CAT10';
            break;
          case 'Matemática':
            this.subjectId = 'CAT2';
            break;
          case 'Inglês':
            this.subjectId = 'CAT3';
            break;
          case 'Francês':
            this.subjectId = 'CAT4';
            break;
          case 'Biologia':
            this.subjectId = 'CAT5';
            break;
          case 'Física':
            this.subjectId = 'CAT6';
            break;
          case 'Química':
            this.subjectId = 'CAT7';
            break;
          case 'Geografia':
            this.subjectId = 'CAT8';
            break;
          case 'História':
            this.subjectId = 'CAT9';
            break;
        }
      },
      organizeIncorrectAnswer(){
        if(this.incorrectAnswer_1 != ''){
          this.incorrectAnswer.push(this.incorrectAnswer_1)
        }
        if(this.incorrectAnswer_2 != ''){
          this.incorrectAnswer.push(this.incorrectAnswer_2)
        }
        if(this.incorrectAnswer_3 != ''){
          this.incorrectAnswer.push(this.incorrectAnswer_3)
        }
        if(this.incorrectAnswer_4 != ''){
          this.incorrectAnswer.push(this.incorrectAnswer_4)
        }

        console.log(this.incorrectAnswer)
      },
      updateDataToFirebase(){
        if (this.subject == '' || this.subject == undefined){
          console.log('subjectId is undefined')
        } else{
          Loading.show({
            message: 'Aguarde...',
          });
          this.organizeSubjectInSubjectId()
          let data = {
          question: this.question,
          incorrectAnswer: this.incorrectAnswer,
          correctAnswer: this.correctAnswer,
          }

          this.organizeIncorrectAnswer()
          // add new question to firebase in the collection 'QUIZ' with the id 'CAT2'
          let docRef = dbFApp.collection('QUIZ').doc(this.subjectId);
            docRef.update({
              questions: firebase.firestore.FieldValue.arrayUnion(data)
            }).then(() => {
              console.log("Document successfully updated!");
            }).catch(error => {
              console.error("Error updating document: ", error);
            });
          this.cleanAll()
          Loading.hide();
        }
      },
      cleanAll(){
          this.question = ''
          this.incorrectAnswer_1 = ''
          this.incorrectAnswer_2 = ''
          this.incorrectAnswer_3 = ''
          this.incorrectAnswer_4 = ''
          this.correctAnswer = ''
          this.subject = ''
      }
    }
  }
</script>

<style>

</style>
