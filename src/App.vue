<template>
  <MainHeader/>
  <MainContent/>
  <MainFooter/>
</template>

<script>
  import MainHeader from './components/MainHeader.vue'
  import MainContent from './components/MainContent.vue'
  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      MainHeader,
      MainContent,
      MainFooter
    }
  }
</script>

<style>
   #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
    min-width: 360px;
  }

  .logo {
    width: 36px;
    height: 36px;
    margin-right: 16px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 48px;
  }

  .name {
    font-size: 24px;
    color: #222222;
    text-decoration: none;
  }

  .columns {
    max-width: 1180px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
  }

  .columns.one {
    align-items: center;
    width: 100%;
  }

  .columns.two {
    flex-direction: row;
    column-gap: 48px;
    row-gap: 16px; 
  }

  .columns.two.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 992px) { 
    .columns.two {
      flex-direction: column-reverse;
    }

    .columns.two.reverse {
      flex-direction: column-reverse;
    }
  }

  .screenshot {
    max-width: 100%; 
    height: auto;
    padding-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .spacer {
    margin-left: auto;
    margin-right: auto;
    flex-grow: 1;
  }

  .btn {
    width: max-content;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ul, ol, dl {
    width: 100%;   
  }

  h3 {
    margin: 16px 0px 8px 0px;
    margin-right: auto;
  }

  a {
    color: #bb2d3b;
  }

  a:hover, a:active {
    color: #dc3545;
  }

  h1 {
    margin-right: auto;
  }

  .footer_and_header {
    width: 100%;
    background-color: #eeeeee;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    min-height: 52px;
    border-bottom: 1px solid #c8c8c8;
    border-top: 1px solid #c8c8c8;
  }

  .footer_and_header .header ul,
  .footer_and_header .header ol,
  .footer_and_header .header dl {
    width: max-content;
    margin-left: 16px;
  }
  
  .header {
    display: flex;
    width: 100%;
    padding-left: 32px;
    padding-right: 32px;
  }

  .footer {
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }

  @media (max-width: 576px) { 
    .header,
    .footer {
      padding-left: 16px;
      padding-right: 16px;
    }
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

  @media (max-width: 500px) { 
    .header_menu {
      display: none;
    }
  }

  .footer_and_header li,
  .footer_and_header li {
    margin-right: 8px;
    margin-left: 8px;
  }

  @media screen and (min-resolution: 120dpi) { 
    body {zoom: 0.8;}
  }

  li {
    margin-top: 6px;
  }

  .icon_list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 480px) { 
    .icon_list {
      row-gap: 32px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      column-gap: 32px;
    }
  }

  .icon_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
  }

  .currency {
    font-size: 24px;
    font-weight: 700;
    color: #8b1924;
    opacity: 0.6;
  }

  .release_description {
    width: 100%;
  }

  h2 {
    margin-bottom: 16px;
  }

  h3 {
    margin: 32px 0px 8px 0px;
    margin-right: auto;
  }

</style>
