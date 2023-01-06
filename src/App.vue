<template>
  <MainHeader/>
  <Main/>
  <MainFooter/>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import Main from './components/Main.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      Main,
      MainFooter
    }
  }
</script>

<style>
   #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
  }

  .logo {
    width: 36px;
    height: 36px;
    margin-left: 16px;
    margin-right: 16px;
  }

  .name {
    font-size: 24px;
    margin-left: 16px;
    color: #fff;
    text-decoration: none;
  }

  .screenshot {
    max-width: 100%; 
    height: auto;
    padding-bottom: 16px;
  }

  .btn {
    width: max-content;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 100%;
  }

  ul, ol, dl {
    width: 100%;   
  }

  h3 {
    margin: 16px 0px 8px 0px;
    margin-right: auto;
  }

  a {
    color: #fff;
  }

  a:hover, a:active {
    color: #e1e1e1;
  }

  h1 {
    margin-right: auto;
  }

  .footer_and_header {
    width: 100%;
    background-color: #818181;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    min-height: 52px;
  }

  .footer_and_header.header ul,
  .footer_and_header.header ol,
  .footer_and_header.header dl {
    width: max-content;
    margin-left: 16px;
  }

  .footer {
    margin-top: 16px;
  }
  
  .header {
    margin-bottom: 16px;
  }

  .app .footer_and_header .container,
  .app .footer_and_header .container {
    text-align: center;
  }

  .footer_and_header ul, 
  .footer_and_header ol, 
  .footer_and_header dl {
    display: flex;
    flex-direction: row;
    list-style-type: none;  
    padding-left: 0px;
    justify-content: center;
    margin-bottom: 0px;
  }

  .footer_and_header li,
  .footer_and_header li {
    margin-right: 16px;
    margin-top: auto;
    margin-bottom: auto;
  }

</style>
