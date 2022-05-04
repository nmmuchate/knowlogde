<template>
    <q-page>
      <div class="mb-6 bg-indigo-5">
        <!-- button editar -->
        <q-btn
          no-caps 
          class="absolute top-0 right-0"
          color="primary"
          label="Editar"
          @click="editUser"
          />
      </div>
      <div class="flex flex-col items-center mt-6">
            <q-avatar size="78px">
                <img src='../assets/avatar.svg' alt='' >
            </q-avatar>
            <h5 class="my-6 text-xl font-medium text-gray-900"> Nicolas Muchate </h5>
      </div>


      <div class="flex my-4 items-baseline justify-between">
        <!-- container about user information : name email password-->
        <p class="text-gray-900 text-lg font-bold">Nome</p>
        <p class="text-gray-800 text-lg font-medium">Nicolas Muchate</p>
        
      </div>

      <div class="flex my-4 items-baseline justify-between">
        <p class="text-gray-900 text-lg font-bold">Email</p>
        <p class="text-gray-800 text-lg font-medium">nicolas.muchate@gmail.com</p>
      </div>

      <div class="flex my-4 items-baseline justify-between">
        <p class="text-gray-900 text-lg font-bold">Senha</p>
        <p class="text-gray-800 text-lg font-medium">********</p>
      </div>
    </q-page>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    editUser(){
      this.$router.push('/editProfile')
    }
  }
}
</script>

<style>

</style>
