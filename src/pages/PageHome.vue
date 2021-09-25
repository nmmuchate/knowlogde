<template>
  <q-page>
    <div>
      <h6 class="q-my-none q-pt-md q-mx-md">Preparação de exame</h6>
      <q-tabs
        v-model="tab"
        dense
        class="text-black shadow-0 tabsD"
      >
        <q-tab name="Português" label="Português" />
        <q-tab name="Matematica" label="Matematica" />
        <q-tab name="Fisica" label="Fisica" />
        <q-tab name="Quimica" label="Quimica" />
        <q-tab name="Biologia" label="Biologia" />
      </q-tabs>
    </div>
    <div class="q-ma-md">
      <div class="row">
        <div class="col-6 q-pa-md">
          <div class="imgExam q-mb-md">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Novo Jogo</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div class="imgExam">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Desafios</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <div class="col-6 q-pa-md">
          <div class="q-mb-md">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Contra-relógio</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <div>
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Ranking</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tab: 'portugues'
    }
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
</style>
