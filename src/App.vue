<template>
  <img alt="AveTemp Logo" class="logo" src="./assets/icon.png">
  <AveTempLanding msg="AveTemp"/>
</template>

<script>
import AveTempLanding from './components/AveTempLanding.vue'

export default {
  name: 'App',
  components: {
    AveTempLanding
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .logo {
    width: 100px;
  }
</style>
