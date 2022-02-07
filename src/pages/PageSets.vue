<template>
  <q-page v-for="set in sets" :key="set"  class="q-pa-lg">
    <q-btn
      unelevated
      round
      class="q-ma-sm"
      color="indigo-5"
      :label="set.SET"
    />
    <q-btn
      unelevated
      round
      class="q-ma-sm"
      color="indigo-5"
      :label="set.SET1"
    />
  </q-page>
</template>

<script>
  import { dbFApp } from "../boot/firebase"

export default{
  data(){
    return{
      sets:[]
    }
  },
  created(){
    let docRef = dbFApp.collection('QUIZ').doc('CAT1');
    docRef.get().then(querySnapshot => {
        if (querySnapshot.exists) {
           console.log('sets::',querySnapshot.data())
          this.sets.push(querySnapshot.data())
          console.log('saaa::',this.sets)
        }else {
          console.log('Es um perdedor')
        }
      }).catch((error) => {
        console.log('error no servidor::', error)
      })
  }
}

</script>

<style>

</style>
