<template>
  <q-layout view="lHh Lpr lFf">
    <main class="flex h-screen justify-center">
      <div  class='bg-white overflow-hidden flex-none relative container shadow-lg rounded-lg'>

        <!-- header for all page -->
        <!-- <header-home-component-vue v-if="showHeader"/> -->
        <!-- <div v-if="showHeader" class='flex z-50 relative justify-between items-center mb-6'>
          <div  class='row items-center'>
            <h1 class='text-2xl font-medium'>Olá, <br>Nicolas</h1>

          </div>
          <div class='absolute top-0 right-0 h-16 w-16 items-center'>

            <q-btn
              flat
              color="primary"
              label="Sair"
              @click="logoutUser"
              />
            <q-btn to='/settings' class='w-12 h-12 rounded-full ml-4' round>
              <q-avatar size="48px">
                <img src='../assets/avatar.svg' alt='' >
              </q-avatar>
            </q-btn>
          </div>
        </div> -->

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
      title: 'Knowledge',
      leftDrawerOpen: false,
      isShowedHeader: true,
      navs: [
          {
            label:'Inicio',
            icon:'home',
            to:'/home'
          },
            {
            label:'Conversas',
            icon:'chat',
            to:'/chat'
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
      if (currentPath == '/settings') {
        this.title = 'Definições'
        return this.isShowedHeader
      }
      else if (currentPath == '/home') {
        this.title = 'Knowlodge'
        return this.isShowedHeader
      }
      else if (currentPath == '/ranking') {
        this.title = 'Recordes'
        return this.isShowedHeader
      }
      else if (currentPath == '/subjects') {
        this.title = 'Disciplinas'
        return this.isShowedHeader
      }
      else if (currentPath == '/sets') {
        this.title = 'Escolha'
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
  max-width: 400px;
}
</style>
