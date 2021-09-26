<template>
  <div class="q-pa-md">
    <q-tabs
      dense
      class="text-dark"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
        <q-tab>
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
              <q-card-actions>
                <q-btn class="text-center" no-caps flat>Ranking</q-btn>
              </q-card-actions>
            </q-card>
        </q-tab>
        <q-tab >
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Ranking</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
        <q-tab>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Desafio</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
        <q-tab>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"></q-img>
            <q-card-actions>
              <q-btn class="text-center" no-caps flat>Desafio</q-btn>
            </q-card-actions>
          </q-card>
        </q-tab>
    </q-tabs>
    <div class="q-pt-xl q-px-md">
      <p><strong>Resultados nacionais</strong></p>
    </div>

    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-9/96734858_2671339216481401_3707348828546924544_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BbQlaMc7hxIAX8vEjuW&_nc_ht=scontent.fmpm4-1.fna&oh=3886711320ec9f25752e65b2a70b848d&oe=61737F6B">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Ester da Graça</q-item-label>
          <q-item-label caption lines="2">Quimica</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>1vs1</q-item-label>
          <div class="text-red">
            <q-icon name="arrow_downward" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-1/c33.0.200.200a/p200x200/242705147_131980145832659_766602093770421472_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=CjyxzDyJb8QAX9RqsN7&_nc_ht=scontent.fmpm4-1.fna&oh=cf1ea9d46a400382c8f0edba71e44054&oe=617721B0">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Gideon Dimande</q-item-label>
          <q-item-label caption>Matematica</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Contra-relógio</q-item-label>
          <div class="text-red">
            <q-icon name="arrow_downward" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-9/c0.23.206.206a/p206x206/104207118_2086725024805509_1250582255469139407_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=da31f3&_nc_ohc=5ZoqxiKugyEAX-HVx-4&_nc_ht=scontent.fmpm4-1.fna&oh=e8f15d401a5f56650d7436807565adba&oe=617814E7">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Samson Mambo</q-item-label>
          <q-item-label caption>Fisica</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>1vs1</q-item-label>
          <div class="text-green">
            <q-icon name="arrow_upward" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/179134054_862606991335604_8569421863857001009_n.jpg?ccb=11-4&oh=08fc82c003178eefcaa367726fe6bc54&oe=61553821">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Magna da Belita</q-item-label>
          <q-item-label caption>Biologia</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Ranqueada</q-item-label>
          <div class="text-red">
            <q-icon name="arrow_downward" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://avatars.githubusercontent.com/u/58500613?v=4">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Nicolas Muchate</q-item-label>
          <q-item-label caption>Todas as disciplinas</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Desafios</q-item-label>
          <div class="text-green">
            <q-icon name="arrow_upward" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
