<template>
  <q-page>
    <div>
      <h6 class="q-my-none q-pt-md q-mx-md">Preparação de exame</h6>
      <!-- <q-tabs
        v-model="tab"
        dense
        class="text-black shadow-0 tabsD"
      > -->
        <!-- <q-tab v-for="(subject,key) in subjects"
        :key="key" :name="subject.name" :label="subject.name" />
      </q-tabs> -->
    </div>
    <div class=" flex flex-center q-ma-md">
      <q-item clickable>

        <div class="row">
          <div
            v-for="(elements, key) in elemetnsInHome"
            :key="key"
            class="col-6 q-pa-md"
          >
            <div class="imgExam q-mb-md">
              <q-card class="my-card" >
                <q-img :src="elements.image"></q-img>
                <q-card-actions>
                  <q-btn
                    :to="elements.path"
                    class="text-center"
                    no-caps
                    flat>{{ elements.name }}</q-btn>
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </q-item>
     </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      tab: 'portugues',
      elemetnsInHome: [
        {
          name: 'Novo Jogo',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/subjects',
        },
        {
          name: 'Contra-Relógio',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/subjects',
        },
        {
          name: 'Desafio',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/exams',
        },
        {
          name: 'Ranking',
          image: 'https://cdn.quasar.dev/img/parallax2.jpg',
          path: '/ranking',
        }
      ],
      // subjects: [
      //   {

      //   },
      //   {
      //     name: 'Matematica',
      //     path: ''
      //   },
      //   {
      //     name: 'Fisica',
      //     path: ''
      //   },
      //   {
      //     name: 'Quimica',
      //     path: ''
      //   },
      //   {
      //     name: 'Biologia',
      //     path: ''
      //   },
      // ]
    }
  },
  computed: {
    // ...mapGetters('subjects', ['subjects']),
  }
}
</script>

<style>
  img{
    width: 50px;
    height: 170px;
  }
  .tabsD{
    font-family: 'jost', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 23px;
  }
  .my-card{
    width: auto;
    max-width: 132px;
    height: auto;
    max-height: 133px;
  }
</style>
