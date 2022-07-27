<template>
  <q-page class="px-8 py-6">
    <!-- <q-toolbar>
      <q-toolbar-title>
        <span class="text-primary">
          <q-icon name="mdi-account-circle" />
          <span class="text-primary">
            {{ $route.params.name }}
          </span>
        </span>
      </q-toolbar-title>
    </q-toolbar> -->
    <q-card>
      <q-card-section>
        <q-btn
          label="Voltar"
          no-caps
          flat
          @click="$router.push('/')"
          type="submit"
          class="q-mt-sm"
          color="primary"
        />
      </q-card-section>
    </q-card>
    <div>
      <q-card>
        <q-card-section>
          <q-input v-model="formData.email" outlined/>
        </q-card-section>

        <q-card-section>
          <q-btn
            label="Reenviar a senha"
            no-caps
            class="q-mt-sm"
            color="indigo-5"
            @click="sendPasswordReset()"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>

  import { mapActions } from "vuex";

  export default {
    data(){
      return{
        formData: {
          email: '',
        },
      }
    },
    methods:{
      ...mapActions('auth', ['resetPassword']),
      sendPasswordReset() {
        console.log(this.formData.email)
        this.resetPassword(this.formData.email)
      }
    },
  }
</script>

<style>

</style>
