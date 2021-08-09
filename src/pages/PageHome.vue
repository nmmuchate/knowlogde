<template>
  <q-page>
    <div>
      <q-tabs
        v-model="tab"
        dense
        mobile-arrows
        class="text-black shadow-0"
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
                <img src="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/multiple.jpg?itok=IaZlOkw_"/>
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
</style>
