<template>
  <q-layout view="lHh Lpr lFf">
    <main class="flex h-screen justify-center">
      <div  class='bg-white overflow-hidden flex-none relative container shadow-lg rounded-lg'>

        <!-- header container -->
      <q-header v-if="showHeader" class="bg-white align-center text-primary">
        <q-toolbar>
          <q-btn
            flat
            round
            color="indigo-8"
            dense
            icon="arrow_back"
            class="text-white" />
          <q-toolbar-title class="text-xl font-bold leading-none text-gray-900 text-center">
            {{title}}
          </q-toolbar-title>
          <q-btn to='/settings' class='w-12 h-12 rounded-full ml-4 shadow-2xl' round>
            <q-avatar size="48px">
              <img src='../assets/avatar.svg' alt='' >
            </q-avatar>
          </q-btn>
        </q-toolbar>
      </q-header>

        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </main>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";

import HeaderHomeComponent from "src/components/Headers/HeaderHomeComponent.vue";

export default {
  name: 'MainLayout',
  components: {
    HeaderHomeComponent,
  },
  data () {
    return {
      title: '',
      leftDrawerOpen: false,
      isShowedHeader: true,
      navs: [
          {
            label:'Inicio',
            icon:'home',
            to:'/home'
          },
          {
            label:'Disciplinas',
            icon:'school',
          },
          {
            label:'Recordes',
            icon:'star',
            to:'/records'
          },
          {
            label:'Definições',
            icon:'settings',
            to:'/settings'
          }
        ]
    }
  },
  computed: {
    showHeader(){
      let currentPath = this.$route.fullPath
      if (currentPath == '/ranking') {
        this.title = 'Recordes'
        return this.isShowedHeader
      }
      else if (currentPath == '/subjects') {
        this.title = 'Disciplinas'
        return this.isShowedHeader
      }
      else if (currentPath == '/subjectswithouttime') {
        this.title = 'Disciplinas'
        return this.isShowedHeader
      }
      else if (currentPath == '/sendquestion') {
        this.title = 'Add Questões'
        return this.isShowedHeader
      }
    }
  },
  methods: {
    ...mapActions('auth',['logoutUser']),

  }
}
</script>
<style>
.container{
  max-width: 640px;
}
</style>
