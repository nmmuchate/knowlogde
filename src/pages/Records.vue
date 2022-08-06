<template>
  <div class="px-8 py-6">
     <h5 class="text-xl font-bold leading-none text-gray-900 text-center pb-3">Classificações</h5>
    <q-tabs
      dense
      class="text-dark"
      active-color="primary"
      indicator-color="primary"
      align="center"

    >
        <q-tab>
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn
                dense
                  class="text-center"
                  no-caps
                  flat>Resultados Nacionais</q-btn>
              </q-card-actions>
            </q-card>
        </q-tab>
        <q-tab >
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn
                dense
                class="text-center"
                no-caps
                flat>Resultados Pessoais</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
    </q-tabs>
    <div class="q-pt-xl q-px-md">
      <p><strong>Resultados nacionais</strong></p>
    </div>

    <q-list>
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
          <q-item-label caption>{{user.detailsGame.highScore}}V</q-item-label>
          <div :class="changeColor(user)">
            <q-icon :name="changeIcon(user)" />
          </div>
        </q-item-section>
      </q-item>
      <q-separator spaced inset />

    </q-list>
  </div>
</template>

<script>
  import { dbAuth, dbFApp } from 'src/boot/firebase'
  export default {
    data(){
      return{
        users: []
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
        // get all users from firebase firestore
        this.users.push(...snapshot.docs.map(doc => doc.data()))
        // sort users by high score and get top 10 users
        return this.users.sort((a, b) => {
          return b.detailsGame.highScore - a.detailsGame.highScore
        }).slice(0, 10)
      })
    }
  }
</script>

<style>

</style>
