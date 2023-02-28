<template>
  <div class="px-8 py-6">
     <h5 class="text-xl font-bold leading-none text-gray-900 text-center pb-3">Classificações</h5>
    <q-tabs
      dense
      class="text-dark"
      active-color="indigo-8"
      indicator-color="Indigo-8"
      align="center"
      v-model="tab"
    >
        <q-tab name="nacionais">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn
                  dense
                  class="text-center"
                  no-caps
                  flat>Gerais</q-btn>
              </q-card-actions>
            </q-card>
        </q-tab>
        <q-tab name="pessoais">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn
                dense
                class="text-center"
                no-caps
                no-wrap
                flat>Pessoais</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
    </q-tabs>
    <q-tab-panels
      animated
      v-model="tab"
      transition-next="slide-up"
      transition-prev="slide-down"
    >
      <q-tab-panel name="nacionais">
        <div class="q-pt-xl">
          <h5 class="text-xl font-bold leading-none text-gray-900">
            Resultados Gerais
          </h5>
        </div>
          <q-separator spaced />

        <q-list class="mt-4">
          <q-item v-for="user in users" :key="user">
            <q-item-section avatar>
              <q-avatar>
                <img :src="user.photoURL">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{user.name}}</q-item-label>
            <q-item-label
              caption
              lines="2">
              {{user.detailsGame.countHowManyTimesPlayed.subjectWithBigScore}}
            </q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>
                {{user.detailsGame.highScore}}V
              </q-item-label>
              <div :class="changeColor(user)">
                <q-icon :name="changeIcon(user)" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-tab-panel>
      <q-tab-panel name="pessoais">
        <div class="q-pt-xl">
          <h5 class="text-xl font-bold leading-none text-gray-900">Resultados Pessoais</h5>
        </div>
        <q-separator spaced />
        <div class="mt-4">
          <div class=" flex items-center justify-between">
            <p class="text-gray-500 font-semibold">Pontos Máximos Conseguidos</p>
            <p>{{userDetails.detailsGame.highScore}}</p>
          </div>
          <div class="my-4 flex items-center justify-between">
            <p class="text-gray-500 font-semibold">Disciplina com melhores pontos </p>
            <p>{{userDetails.detailsGame.countHowManyTimesPlayed.subjectWithBigScore}}</p>
          </div>
          <div class="my-4 flex items-center justify-between">
            <p class="text-gray-500 font-semibold">Vezes Jogadas</p>
            <p>{{userDetails.detailsGame.countHowManyTimesPlayed.timesPlayed}}</p>
          </div>
          <div class="my-4 flex items-center justify-between">
            <p class="text-gray-500 font-semibold">Vezes ganhadas </p>
            <p>{{userDetails.detailsGame.countHowManyTimesPlayed.timesWon}}</p>
          </div>
          <div class="flex my-4 items-center justify-between">
            <p class="text-gray-500 font-semibold">Vezes Perdidas</p>
            <p>{{userDetails.detailsGame.countHowManyTimesPlayed.timesLost}}</p>
          </div>
        </div>

      </q-tab-panel>

    </q-tab-panels>


  </div>
</template>

<script>
  import { dbAuth, dbFApp } from 'src/boot/firebase'
  import { Loading } from 'quasar'
  export default {
    data(){
      return{
        users: [],
        tab: 'nacionais',
        userDetails:{}
      }
    },
    methods:{
      changeIcon(usr){
       // change the icon if the user high score is equal or greater than 15
        if(usr.detailsGame.highScore >= 15){
          return 'arrow_upward'
        }else{
          return 'arrow_downward'
        }
      },
      changeColor(usr){
        // change the color if the user high score is equal or greater than 15
        if(usr.detailsGame.highScore >= 15){
          return 'text-green'
        }else{
          return 'text-red'
        }
      }
    },
    mounted(){

      dbFApp.collection('users').onSnapshot(snapshot => {
        this.users = []
        // get all users from firebase firestore
        this.users.push(...snapshot.docs.map(doc => doc.data()))
        // sort users by high score and get top 10 users
        return this.users.sort((a, b) => {
          console.log('this users',this.users)
          return b.detailsGame.highScore - a.detailsGame.highScore
        }).slice(0, 10)
      })
      // get this user details in firebase firestore
      dbAuth.onAuthStateChanged(user => {
        if(user){
          dbFApp.collection('users').doc(user.uid).get().then(doc => {
            this.userDetails = doc.data()
            console.log(this.userDetails)
          })
        }
      })
    }
  }
</script>

<style>

</style>
