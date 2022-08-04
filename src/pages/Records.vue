<template>
  <div class="px-8 py-6">
    <q-tabs
      dense
      class="text-dark"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
        <q-tab>
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Ranking</q-btn>
              </q-card-actions>
            </q-card>
        </q-tab>
        <q-tab >
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Ranking</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
        <q-tab>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Desafio</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
        <q-tab>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Desafio</q-btn>
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
          <!-- <q-item-label caption lines="2">Quimica</q-item-label> -->
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>1vs1</q-item-label>
          <div class="text-red">
            <q-icon name="arrow_downward" />
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
    mounted(){
      dbFApp.collection('users').onSnapshot(snapshot => {

        this.users.push(...snapshot.docs.map(doc => doc.data()))
      })
    }
  }
</script>

<style>

</style>
