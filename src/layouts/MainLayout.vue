<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      v-if="showHeader"
      reveal
      class="bg-white text-black">
        <div class="q-pa-md">
            <q-toolbar>
              <q-btn
                flat
                dense
                round
                icon="more_horiz"
                aria-label="Menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
              />
              <q-toolbar-title>
               <strong>Knowlodge</strong>
              </q-toolbar-title>
              <q-btn class="" round>
                <q-avatar size="42px">
                  <img src="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-9/96734858_2671339216481401_3707348828546924544_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BbQlaMc7hxIAX8vEjuW&_nc_ht=scontent.fmpm4-1.fna&oh=3886711320ec9f25752e65b2a70b848d&oe=61737F6B">
                </q-avatar>
              </q-btn>
            </q-toolbar>
        </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      bordered
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-10"
          exact
          clickable>
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ nav.label }}</q-item-label>
            </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
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
      if (currentPath == '/settings') return this.isShowedHeader
      else if (currentPath == '/home') return this.isShowedHeader
      else if (currentPath == '/records') return this.isShowedHeader
    }
  }
}
</script>
<style>
</style>
