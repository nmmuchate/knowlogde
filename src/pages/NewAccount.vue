<template>
  <q-page class="flex flex-center container">
    <form-component :currentPath="currentPath"/>
  </q-page>
</template>

<script>
export default {
  data(){
    return {
      currentPath: 'register'
    }
  },
  components: {
    'form-component' : require('components/formComponent.vue').default
  }
}
</script>

<style>

</style>
