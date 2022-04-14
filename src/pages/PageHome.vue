<template>
  <q-page>
    <div>
      <h1 class='text-xl font-medium'>Prepara-te para o exame com nosso jogo</h1>
      <!-- <q-tabs
        v-model="tab"
        dense
        class="text-black shadow-0 tabsD"
      > -->
        <!-- <q-tab v-for="(subject,key) in subjects"
        :key="key" :name="subject.name" :label="subject.name" />
      </q-tabs> -->
    </div>
    <div class="">
      <q-list>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-green-100 rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Simplesmente desfrute do seu conhecimento</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Aqui neste modo do jogo é onde poderá simplesmente colocar o seu conhecimento em pratica sem nenhuma pressão.</p>
            <q-btn label="Experimente agora" to="/subjects" color="primary" icon-right="east"/>
          </div>  
        </q-item>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-green-300 rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Teste o seu conhecimento sobre pressão</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Para cada questão tem apenas 15 segundos para responder. Este exercicio poderá ser muito útil para estudar sobre pressão.</p>
            <q-btn label="Experimente agora" to="/subjects" color="primary" icon-right="east"/>
          </div>  
        </q-item>
        <q-item clickable>
          <div class='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
            <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Testemunhe o seu crescimento</h5>
            <p class='mb-3 font-normal text-gray-400'>
              Veja as suas pontuações que obtém. Também pode comparar com as outras pessoas.</p>
            <q-btn label="Ver as pontuações" to="/ranking" color="primary" icon-right="east"/>
          </div>  
        </q-item>
      </q-list>
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
      
    }
  },
  computed: {
    // ...mapGetters('subjects', ['subjects']),
  }
}
</script>

<style>
 
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
