<template>
  <q-page>
    <q-list>
      <q-item
        v-for="(subject, key) in subjects"
        :key="key"
        :to="'/exams/' + key"
        @click="optionchosen(key)"
        clickable
        v-ripple>
        <q-item-section  avatar>
          <q-avatar
            color="primary"
            text-color="white">
            {{ subject.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>{{ subject.NAME }}</q-item-section>
        <!-- <q-item-section side>{{ subject.questions.length}} questões</q-item-section> -->
      </q-item>
    </q-list>
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
