<template>
  <q-page class="px-8 py-6">
    <div class="mb-4">

      <h5 class="text-xl font-bold leading-none text-gray-900">As disciplinas de preparação</h5>
    </div>
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="(subject, key) in subjects" :key="key" class="py-3">
          <!-- past a path exams/ with a div -->
          <router-link :to="'/exams/' + key" class="flex items-center">
            <div class="cursor-pointer flex items-center space-x-4">
              <div class="flex-shrink-0">
                <q-avatar
                  color="indigo-700"
                  text-color="white">
                  {{ subject.letter }}
                </q-avatar>
              </div>
              <div class="ml-3">
                <h5 class="text-sm font-medium leading-none text-gray-900">{{ subject.subjectName }}</h5>
                <p class="text-gray-700 text-sm">{{ subject.DESCRIPTION }}</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>


  </q-page>
</template>

<script>
import { Loading } from "quasar";
import { dbAuth, dbFApp } from 'src/boot/firebase'
import { mapGetters, mapState } from "vuex";

export default {
  data(){


    return{
      subjects: [],
    }
  },
  methods: {


    readSubjectFirestore() {
       Loading.show({
        message: 'Carregando as disciplinas...'
       });
      dbFApp.collection('QUIZ').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.subjects.push(doc.data())
          Loading.hide()
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
