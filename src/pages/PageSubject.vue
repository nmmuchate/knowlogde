<template>
  <q-page>
    <q-list>
      <q-item
        v-for="(subject, key) in subjects"
        :key="key"
        :to="'/exams/' + key"
        class="q-pa-none"
        clickable
        v-ripple>
        <q-item-section  avatar>
          <q-avatar
            color="primary"
            text-color="white">
            {{ subject.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section class='font-bold tracking-tight text-gray-900 text-md'>{{ subject.NAME }}</q-item-section>
         <q-separator spaced inset />
      </q-item>
    </q-list>
    <!-- <q-list>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Simplesmente desfrute do seu conhecimento</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Aqui neste modo do jogo é onde poderá simplesmente colocar o seu conhecimento em pratica sem nenhuma pressão.</p>
            <q-btn label="Experimente agora" to="/subjects" color="primary" icon-right="east"/>
          </div>  
        </q-item>
    </q-list> -->
    
    <!-- <q-list>
      <q-item v-for="(subject, key) in subjects"
        :key="key"
        :to="'/exams/' + key"
        clickable>
        <div class='flex flex-col items-center bg-white rounded-lg border-gray-200 shadow-md'>
          <q-avatar
            class="fi"
            color="primary"
            text-color="white">
            {{ subject.letter }}
          </q-avatar>
          <div class='flex flex-col justify-between p-4 leading-normal'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{{ subject.NAME }}</h5>
             <p class="mb-3 font-normal text-gray-400">{{ subject.description }}</p> -->
          <!-- </div>
        </div>
      </q-item>
    </q-list>  -->

  </q-page>
</template>

<script>
import { dbAuth, dbFApp } from 'src/boot/firebase'
import { mapGetters, mapState } from "vuex";
export default {
  data(){
    return{
      subjects: [],
    }
  },
  computed: {
    ...mapState('store', ['idSubject'])
  },
  methods: {
    readSubjectFirestore() {
    dbFApp.collection('QUIZ').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.subjects.push(doc.data())

      })
    })
    }
  },
  created(){
    this.readSubjectFirestore()
  }
}
</script>

<style>

</style>
