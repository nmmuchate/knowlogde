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
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Docs',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      isShowedHeader: true
    }
  },
  computed: {
    showHeader(){
      let currentPath = this.$route.fullPath
      if (currentPath == '/settings') return this.isShowedHeader
      else if (currentPath == '/home') return this.isShowedHeader
    }
  }
}
</script>
<style>
</style>
