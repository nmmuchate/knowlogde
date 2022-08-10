<template>
    <q-page class="">
     <div class="mt-4">
      <h5 class="text-xl font-bold text-center leading-none text-gray-900">Definições</h5>

        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">{{userDetails.detailsGame.countHowManyTimesPlayed.timesPlayed}}</p>
                <p class="text-gray-400">Jogados</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl">{{userDetails.detailsGame.countHowManyTimesPlayed.timesLost}}</p>
                <p class="text-gray-400">Perdidos</p>
              </div>
                  <div>
                  <p class="font-bold text-gray-700 text-xl">{{userDetails.detailsGame.countHowManyTimesPlayed.timesWon}}</p>
                <p class="text-gray-400">Vencidos</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <img :src="userDetails.photoURL" alt="Foto do perfil" class="rounded-full">
              </div>
            </div>

            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <q-btn
                to="/editProfile"
                class="text-white py-2 px-4 uppercase rounded bg-indigo-700 shadow font-medium"
              >
                Editar
              </q-btn>
              <q-btn
                to="/home"
                class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 font-medium"
              >
                Inicio
              </q-btn>
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{{userDetails.name}}</h1>
        <p class="font-light text-gray-600 mt-3">{{userDetails.email}}</p>

            <!-- <p class="mt-8 text-gray-500">Meu contacto: {{userDetails.details.phone}}</p>
            <p class="mt-2 text-gray-500"></p> -->
          </div>

          <div class="mt-12 flex flex-col justify-center">
            <q-btn
              @click="logoutUser()"
              class="text-white py-2 px-4 uppercase rounded bg-red-600 font-medium"
            >
          Sair
        </q-btn>
          </div>

        </div>
        </div>
    </q-page>
</template>

<script>
import { dbAuth, dbFApp } from "src/boot/firebase";
import { Loading } from "quasar";
import { mapActions } from "vuex";
export default {
  data(){
    return {
      userDetails:{
        name:'',
        email: '',
        photoURL: '',
        details:{
          phone:'',
          subjectsLiked: [],
          universitys: [],
        },
        detailsGame: {
          highScore: 0,
          countHowManyTimesPlayed: {
            timesPlayed: 0,
            timesWon: 0,
            timesLost: 0,
            subjectWithBigScore: '',
            scores: []
          }
        }
      }
    }
  },
  methods:{
    ...mapActions('auth', ['logoutUser']),
  },
  mounted(){
    // call this user in firebase firestore
    Loading.show()
    let userID = dbAuth.currentUser.uid
    dbFApp.collection('users').doc(userID).get().then(doc=>{
      this.userDetails.name = doc.data().name
      this.userDetails.email = doc.data().email
      this.userDetails.photoURL = doc.data().photoURL
      this.userDetails.details.phone = doc.data().details.phone
      this.userDetails.details.subjectsLiked = doc.data().details.subjectsLiked
      this.userDetails.details.universitys = doc.data().details.universitys
      this.userDetails.detailsGame.highScore = doc.data().detailsGame.highScore
      this.userDetails.detailsGame.countHowManyTimesPlayed.timesPlayed = doc.data().detailsGame.countHowManyTimesPlayed.timesPlayed
      this.userDetails.detailsGame.countHowManyTimesPlayed.timesWon = doc.data().detailsGame.countHowManyTimesPlayed.timesWon
      this.userDetails.detailsGame.countHowManyTimesPlayed.timesLost = doc.data().detailsGame.countHowManyTimesPlayed.timesLost
      this.userDetails.detailsGame.countHowManyTimesPlayed.subjectWithBigScore = doc.data().detailsGame.countHowManyTimesPlayed.subjectWithBigScore
      this.userDetails.detailsGame.countHowManyTimesPlayed.scores = doc.data().detailsGame.countHowManyTimesPlayed.scores

      Loading.hide()
    }).catch(err=>{
      Loading.hide()
      console.log(err)
    })

  }
}
</script>

<style>

</style>
