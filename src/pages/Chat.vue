<template>
  <q-page>
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 400px">
        <q-chat-message
          label="Sunday, 19th"
        />

        <q-chat-message
          name="me"
          avatar="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-9/96734858_2671339216481401_3707348828546924544_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BbQlaMc7hxIAX8vEjuW&_nc_ht=scontent.fmpm4-1.fna&oh=3886711320ec9f25752e65b2a70b848d&oe=61737F6B"
          :text="['Ola, Não consigo encontrar exames de inglês.']"
          sent
          stamp="7 minutes ago"
        />
        <q-chat-message
          name="Nicolas"
          avatar="https://scontent.fmpm4-1.fna.fbcdn.net/v/t1.6435-1/p200x200/79091188_1334692450066814_7222131471232794624_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WJYsVmg4bf8AX9uHQod&_nc_ht=scontent.fmpm4-1.fna&oh=e38236ad266c4ddd5888ed130654b621&oe=6178128E"
          :text="['Por favor, renicie a aplicação e tente acessar outra vez']"
          stamp="4 minutes ago"
        />
      </div>
    </div>
    <q-footer  class="bg-white">
      <q-toolbar>
        <q-form class="full-width">
          <q-input
            outlined
            autofocus
            bottom-slots
            label="Label"
          >
            <template v-slot:after>
              <q-btn
                round
                dense
                flat
                icon="send"
              />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {

}
</script>

<style>

</style>
