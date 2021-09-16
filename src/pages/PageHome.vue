<template>
  <q-page>
    <div>
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
    <div class="q-ma-xl">
      <div class="row">
        <div class="col-6 bg-red justify-center ">
          <div class="imgExam">
            <q-item>
              <q-item-section>

              </q-item-section>
              <q-item-label class="text-bold">Exame de admissão</q-item-label>
            </q-item>
          </div>
        </div>
        <div class="col-6 bg-green">

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
