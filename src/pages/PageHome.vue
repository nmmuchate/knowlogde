<template>
  <q-page class="px-8 py-6">
    <div class='flex z-50 relative justify-between items-center mb-6'>
          <div  class='row items-center'>
            <!-- <h1 class='text-2xl font-medium'>Bem-vindo</h1> -->
            <h1 class='text-2xl font-medium'>Olá, <br>{{userNameEmpty}}</h1>

          </div>
          <div class='absolute top-0 right-0 h-16 w-16 items-center'>
            <q-btn to='/settings' class='w-12 h-12 rounded-full ml-4' round>
              <q-avatar size="48px">
                <img src='../assets/avatar.svg' alt='' >
              </q-avatar>
            </q-btn>
          </div>
        </div>
    <div>
      <h1 class='text-xl font-medium'>Prepara-te para o exame com nosso jogo</h1>
    </div>
    <div class="">
      <q-list>
        <q-item>
          <div class='p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Simplesmente desfrute do seu conhecimento</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Aqui neste modo do jogo é onde poderá simplesmente colocar o seu conhecimento em pratica sem nenhuma pressão.</p>
            <q-btn
              label="Experimente agora"
              to="/subjectswithouttime"
              class="bg-indigo-700 text-white"
              icon-right="east"
            />
          </div>
        </q-item>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-green-300 rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Teste o seu conhecimento sobre pressão</h5>
            <p class='mb-3 font-normal text-gray-800'>
              Para cada questão tem apenas 15 segundos para responder. Este exercicio poderá ser muito útil para estudar sobre pressão.</p>
            <q-btn
              label="Experimente agora"
              to="/subjects"
              class="bg-indigo-700 text-white"
              icon-right="east"
            />
          </div>
        </q-item>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Testemunhe o seu crescimento</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Veja as suas pontuações que obtém. Também pode comparar com as outras pessoas.</p>
            <q-btn
              label="Ver as pontuações"
              to="/ranking"
              class="bg-indigo-700 text-white"
              icon-right="east"
            />
          </div>
        </q-item>
      </q-list>
     </div>
  </q-page>
</template>

<script>
import { dbAuth, dbFApp } from 'src/boot/firebase'
import { mapActions, mapGetters, mapState } from 'vuex'

import { Loading } from 'quasar'
export default {
  data() {
    return {
      tab: 'portugues',
      clickRoute: '',
      userState: {},
      elemetnsInHome: [
        {
          name: 'Novo Jogo',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/subjects',
        },
        {
          name: 'Contra-Relógio',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/subjects',
        },
        {
          name: 'Desafio',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/exams',
        },
        {
          name: 'Ranking',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/ranking',
        }
      ],

    }
  },
  computed: {
    userNameEmpty() {
      if(this.userState.name === undefined){
        return dbAuth.currentUser.displayName
      }else{
        return this.userState.name
      }
    }
  },
  methods:{
    ...mapActions('auth', ['chooseRoute']),
    chooseMode_1(){
      this.clickRoute = 'exams'
      console.log('clickRoute',this.clickRoute)
      this.chooseRoute = this.clickRoute
    }
  },
  mounted(){
    // // take user id from firebase
    // Loading.show({
    //   message: 'Carregando...',
    // })
    // let userId = dbAuth.currentUser.uid
    // // get user name from firebase firestore

    // dbFApp.collection('users').doc(userId).get().then(doc => {
    //   // set user name in vuex
    //   this.userState = doc.data()

    //   Loading.hide()
    // }).catch(err => {
    //   console.log('Error getting document', err);
    // });
  },
}
</script>

<style>

  .tabsD{
    font-family: 'jost', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 23px;
  }
  .my-card{
    width: auto;
    max-width: 132px;
    height: auto;
    max-height: 133px;
  }
</style>
