<template>
  <div>
    <q-list  v-for="subject in bear" :key="subject">
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT1.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT1}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT2.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT2}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT3.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT3}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT4.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT4}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item><q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT5.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT5}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item><q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT6.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT6}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item><q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT7.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT7}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item><q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT8.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT8}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT9.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT9}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
      <q-item  clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="indigo" text-color="white">
            {{ subject.CAT10.charAt(0) }}
          </q-avatar>
        </q-item-section>
        <q-item-section>{{subject.CAT10}}</q-item-section>
        <q-item-section side>+99 questões</q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { dbFApp } from "../boot/firebase"

 import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return{
      bear: [],
      cats: []
    }
  },
  computed: {
    ...mapGetters('subjects', ['subjects']),
  },
  methods: {
    // renaming(){
    //   let n = 'CAT'
    //   let w
    //   for(let i = 0; i<= 10; i++){
    //     this.w=n.replace(/[0-9]/, parseInt(n.match(/[0-9]/)) + i)
    //     return this.cats = w
    //   }
    //   console.log(this.cats)
    // }
  },
  created(){

      let docRef = dbFApp.collection('QUIZ').doc('Categorias');
      docRef.get().then(querySnapshot => {
        if (querySnapshot.exists) {
           console.log(querySnapshot.data())
          this.bear.push(querySnapshot.data())
        }else {
          console.log('Es um perdedor')
        }
      }).catch((error) => {
        console.log('error no servidor::', error)
      })
  }
//   for(let i = 0; i<= 10; i++){
//  this.w=this.n.replace(/[0-9]/, parseInt(this.n.match(/[0-9]/)) + i)
//   console.log(this.w)
// }
}
</script>

<style>

</style>
