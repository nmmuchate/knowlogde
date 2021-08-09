<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      reveal
      class="bg-white text-black">
      <q-toolbar>
        <div class="row">
          <div class="col-4">
            <q-btn
              flat
              dense
              round
              icon="more_horiz"
              aria-label="Menu"
              @click="leftDrawerOpen = !leftDrawerOpen"
            />
          </div>
          <div class="col-4"></div>
          <div class="col-4">
            <q-btn class="absolute-top-right" round>
              <q-avatar size="42px">
                <img src="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-9/96734858_2671339216481401_3707348828546924544_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=bGKMaXKkHy4AX8ghxhV&_nc_ht=scontent.fmpm4-1.fna&oh=5f920810964b1b56902af95aaf26254b&oe=613042EB">
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </q-toolbar>
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
  },
  {
    title: 'Forum',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style>
</style>
