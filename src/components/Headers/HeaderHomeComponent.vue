<template>

    <div class='flex z-50 relative justify-between items-center mb-6'>
        <!-- header for only page home -->
          <div  class='row items-center'>
            <h1 class='text-2xl font-medium'>Olá, <br>userState.name</h1>
          </div>
          <div class='absolute top-0 right-0 h-16 w-16 items-center'>
            <!-- button logout -->
            <q-btn to='/settings' class='w-12 h-12 rounded-full ml-4' round>
              <q-avatar size="48px">
                <img :src='userState.photoURL' alt='' >
              </q-avatar>
            </q-btn>
          </div>
        </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "HeaderHomeComponent",
    computed: {
      ...mapState(['auth','userState']),
    },
  }
</script>

<style>

</style>
