<template>
  <div>
    <q-list>
      <q-item @click="some()" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            P
          </q-avatar>
        </q-item-section>
        <q-item-section>{{this.subjects}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
 import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('subjects', ['subjects']),
  },
  methods: {
    ...mapActions('subjects', ['readSubjects']),
    some(){
      console.log(this.readSubjects())
    }
  }
}
</script>

<style>

</style>
